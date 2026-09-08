import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-links">
        <a href="https://github.com/pblunk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon aria-hidden="true" width={17} height={17} />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/philip-blunk-4bb5222b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon aria-hidden="true" width={17} height={17} />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:philipblunk@gmail.com" aria-label="Email Philip">
          <Mail aria-hidden="true" size={17} strokeWidth={1.9} />
          <span>Connect</span>
        </a>
      </div>
      <div className="footer-meta">
        <div className="vermont-badge">
          <span className="vermont-outline" aria-hidden="true" />
          <span>Built in Vermont</span>
        </div>
        <p>© 2026 Philip Blunk</p>
      </div>
    </footer>
  );
}
