const fs = require('fs');
let code = fs.readFileSync('src/components/HowItWorksInteractive.tsx', 'utf8');

code = code.replace(/trackEvent\("how_it_works_click", \{ role_tab: "owners" \}\);\n[ \t]*className=/g, 'trackEvent("how_it_works_click", { role_tab: "owners" });\n                }}\n                className=');
code = code.replace(/trackEvent\("how_it_works_click", \{ role_tab: "seekers" \}\);\n[ \t]*className=/g, 'trackEvent("how_it_works_click", { role_tab: "seekers" });\n                }}\n                className=');

fs.writeFileSync('src/components/HowItWorksInteractive.tsx', code);
