/**
 * Loryfy Prerender Verifier — fails the build if any sitemap URL ships without crawlable body content.
 */
import fs from "fs";
import path from "path";

const distDir = path.join(process.cwd(), "dist");
const MIN_TEXT = 300;

function visibleText(html: string): string {
  const root = html.split('<div id="root">')[1] || "";
  return root
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fileForUrl(url: string): string {
  const p = new URL(url).pathname.toLowerCase().replace(/\/+$/, "");
  return path.join(distDir, p || "", "index.html");
}

const sitemap = fs.readFileSync(path.join(distDir, "sitemap.xml"), "utf-8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const failures: string[] = [];
const rows: string[] = [];

for (const url of urls) {
  const file = fileForUrl(url);
  if (!fs.existsSync(file)) {
    failures.push(`${url} → missing ${path.relative(distDir, file)}`);
    continue;
  }
  const html = fs.readFileSync(file, "utf-8");
  const text = visibleText(html);
  const hasH1 = /<h1[\s>]/i.test(html);
  const isAr = new URL(url).pathname.startsWith("/ar");
  const langOk = isAr ? /<html lang="ar" dir="rtl">/.test(html) : /<html lang="en" dir="ltr">/.test(html);
  const ldInBody = (html.split('<div id="root">')[1] || "").includes("application/ld+json");
  const ok = text.length >= MIN_TEXT && hasH1 && langOk && !ldInBody;
  rows.push(`${ok ? "PASS" : "FAIL"} | ${String(text.length).padStart(6)} chars | h1:${hasH1 ? "y" : "n"} | lang:${langOk ? "y" : "n"} | ${new URL(url).pathname}`);
  if (!ok) failures.push(`${url} → text=${text.length} h1=${hasH1} lang=${langOk} jsonLdInBody=${ldInBody}`);
}

// Content spot-checks
const mustContain: [string, string][] = [
  ["/en/faq", "What is Loryfy?"],
  ["/en/faq", "Does Loryfy guarantee profits"],
  ["/ar/faq", "ماذا أحتاج للتسجيل في لوريفاي"],
];
for (const [p, needle] of mustContain) {
  const file = path.join(distDir, p, "index.html");
  const txt = fs.existsSync(file) ? visibleText(fs.readFileSync(file, "utf-8")) : "";
  if (!txt.includes(needle)) failures.push(`${p} → missing text "${needle}"`);
}

console.log(rows.join("\n"));
console.log(`\n[Verify] ${urls.length - failures.filter((f) => f.startsWith("http")).length}/${urls.length} sitemap URLs passed`);

if (failures.length) {
  console.error(`[Verify] FAILED:\n  ` + failures.join("\n  "));
  process.exit(1);
}
console.log("[Verify] All prerendered pages contain crawlable body content.");
