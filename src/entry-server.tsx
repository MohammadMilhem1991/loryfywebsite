/**
 * Loryfy SSR entry — used ONLY at build time by scripts/prerender.ts
 * Renders the full page body for a given URL path into static HTML.
 */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

export function render(urlPath: string): string {
  return renderToString(
    <StrictMode>
      <App initialPath={urlPath} />
    </StrictMode>
  );
}
