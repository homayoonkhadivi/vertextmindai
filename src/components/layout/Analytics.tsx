import Script from "next/script";
import { site } from "@/config/site";

// Privacy-friendly analytics (no cookies, no consent banner needed).
// Enabled only when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set at build time.
export default function Analytics() {
  if (!site.analyticsDomain) return null;
  return (
    <Script
      defer
      data-domain={site.analyticsDomain}
      src="https://plausible.io/js/script.outbound-links.js"
      strategy="afterInteractive"
    />
  );
}
