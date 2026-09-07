import Image from "next/image";
import MountainSilhouette from "@/components/MountainSilhouette";
import ThemeToggle from "@/components/ThemeToggle";

const tech = ["Next.js", "React", "TypeScript", "Tailwind"];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Back to top">Phil<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="shell hero__content">
          <p className="eyebrow">Ideas → Products</p>
          <h1>I turn “what if?”<br />into <span>“check this out.”</span></h1>
          <p className="hero__lede">
            Hey, I&apos;m Phil. I design and build digital products, websites, and experiences—sometimes from my own ideas,
            sometimes from someone else&apos;s. Either way, I like figuring out how to make them real.
          </p>
          <a className="button" href="#work">See what I&apos;ve been up to <span>→</span></a>
        </div>
        <MountainSilhouette />
      </section>

      <section className="section shell project" id="work">
        <div className="project__copy">
          <p className="eyebrow">Featured project</p>
          <h2>TulHive</h2>
          <p className="subhead">Simple tools for everyday tasks.</p>
          <p>
            A growing collection of fast, privacy-friendly browser tools to make everyday tasks easier.
            No installs. No accounts. No nonsense. Just useful tools that work.
          </p>
          <div className="actions">
            <a className="button" href="https://tulhive.com" target="_blank" rel="noreferrer">Visit TulHive <span>↗</span></a>
            <a className="text-link" href="#">View project <span>→</span></a>
          </div>
          <div className="tech-list" aria-label="Technologies used">
            {tech.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="browser-frame" aria-label="TulHive homepage preview">
          <div className="browser-frame__bar"><i /><i /><i /><span>tulhive.com</span></div>
          <Image src="/images/tulhive-home.png" alt="TulHive homepage showing its browser-based utility tools" width={1298} height={1152} priority={false} />
        </div>
      </section>

      <section className="section shell about" id="about">
        <div className="about__photo">
          <Image src="/images/phil.jpg" alt="Phil outdoors with mountains in the background" width={1152} height={2048} />
        </div>
        <div className="about__copy">
          <p className="eyebrow">About me</p>
          <h2>Hey, I&apos;m <span>Phil.</span></h2>
          <p>
            I&apos;m a product-minded builder and Southern transplant who now happily calls Vermont home. I&apos;ve spent my career somewhere at the intersection of product, technology, systems, design, and development. Basically, I like figuring out how things work, wondering how they could work better, and then trying to make that happen.
          </p>
          <p>
            I&apos;ve fallen pretty hard for the Green Mountain State—the small towns, the mountains, the food, and the fact that there&apos;s always somewhere new to explore. The South still makes an appearance, though. A “y&apos;all” or “howdy” is bound to slip out sooner or later.
          </p>
          <p>
            Away from the screen, I&apos;m a self-proclaimed beekeeper apprentice, amateur gardener, adventurous eater, and frequent traveler. Results vary—especially in the garden—but I&apos;m having a good time.
          </p>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="shell contact__content">
          <p className="eyebrow">Get in touch</p>
          <h2>Want to say hi?</h2>
          <p>I&apos;m always up for talking about an interesting idea, something you&apos;re building, or why my garden refuses to cooperate.</p>
          <a className="button" href="mailto:hello@philipblunk.com">Send me an email <span>→</span></a>
        </div>
        <MountainSilhouette compact />
      </section>

      <footer className="site-footer shell">
        <a className="brand" href="#top">Phil<span>.</span></a>
        <div className="footer-links">
          <a href="https://github.com/pblunk" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:hello@philipblunk.com">Email</a>
        </div>
        <p>© 2026 Philip Blunk</p>
      </footer>
    </main>
  );
}
