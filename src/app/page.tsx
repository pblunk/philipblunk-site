import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";

const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell" id="top">
        <div className="shell hero__content">
          <p className="eyebrow">Ideas → Products</p>
          <h1>Good ideas deserve<br /><span>to get built.</span></h1>
          <p className="hero__lede">
            Hey, I&apos;m Phil. I design and build digital products, websites, and experiences. Mostly, I like figuring out how to turn a good idea into something that actually works.
          </p>
          <Link className="button" href="#work">See what I&apos;ve been up to</Link>
        </div>
      </section>

      <section className="section shell project" id="work">
        <Reveal className="project__copy">
          <p className="eyebrow">Featured project</p>
          <h2>TulHive</h2>
          <p className="subhead">Simple tools for everyday tasks.</p>
          <p>
            A growing collection of fast, privacy-friendly browser tools to make everyday tasks easier.
            No installs. No accounts. No nonsense. Just useful tools that work.
          </p>
          <div className="actions">
            <a className="button" href="https://tulhive.com" target="_blank" rel="noopener noreferrer">Visit TulHive</a>
            <Link className="text-link" href="/projects/tulhive">Read the story</Link>
          </div>
          <p className="project-eyebrow">Built with</p>
          <div className="tech-list" aria-label="Technologies used">
            {tech.map((item) => <span key={item}>{item}</span>)}
          </div>
        </Reveal>

        <Reveal className="browser-frame" variant="media" delay={70} aria-label="TulHive homepage preview">
          <div className="browser-frame__bar"><i /><i /><i /><span>tulhive.com</span></div>
          <Image src="/images/tulhive-home.png" alt="TulHive homepage showing its browser-based utility tools" width={1298} height={1152} priority={false} />
        </Reveal>
      </section>

      <section className="section shell about" id="about">
        <Reveal className="about__photo" variant="media">
          <Image src="/images/phil.jpg" alt="Phil outdoors with mountains in the background" width={1152} height={2048} />
        </Reveal>
        <Reveal className="about__copy" delay={70}>
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
        </Reveal>
      </section>

      <section className="contact section-shell" id="contact">
        <Reveal className="shell contact__content">
          <p className="eyebrow">Get in touch</p>
          <h2>Have something in <span className="contact__nowrap">mind<span className="contact__question">?</span></span></h2>
          <p>I&apos;m always up for talking through an idea, something you&apos;re building, or just figuring out whether something is worth making.</p>
          <a className="button" href="mailto:philipblunk@gmail.com">Let&apos;s connect</a>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
