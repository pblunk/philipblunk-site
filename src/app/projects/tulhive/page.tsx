import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export const metadata: Metadata = {
  title: "TulHive | Philip Blunk",
  description:
    "A project story about TulHive, a collection of fast, privacy-friendly browser tools built by Philip Blunk.",
  alternates: { canonical: "/projects/tulhive" },
};

export default function TulHiveProjectPage() {
  return (
    <main className="project-page">
      <section className="project-hero shell">
        <div className="project-hero__copy">
          <p className="eyebrow">TulHive · Personal Project</p>
          <h1>TulHive</h1>
          <p className="project-hero__tagline">Little tools. Big buzz.</p>
          <p className="project-hero__lede">
            TulHive started with a simple idea: everyday digital tasks shouldn&apos;t need complicated software. I wanted a place for small, useful tools that are fast, straightforward, and respectful of your privacy.
          </p>
          <dl className="project-meta" aria-label="Project details">
            <div>
              <dt>Role</dt>
              <dd>Product Design · Development</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>2026 — Present</dd>
            </div>
          </dl>
          <a className="button" href="https://tulhive.com" target="_blank" rel="noopener noreferrer">Visit TulHive</a>
        </div>
      </section>

      <section className="project-showcase shell" aria-label="TulHive product homepage">
        <figure className="project-showcase__frame">
          <Image
            src="/projects/tulhive/homepage.png"
            alt="TulHive homepage showing a warm interface with a collection of browser-based utility tools"
            width={1059}
            height={968}
            priority
          />
        </figure>
      </section>

      <section className="project-story shell">
        <div className="project-narrative">
          <h2>Useful shouldn&apos;t have to mean complicated.</h2>
          <p>
            We&apos;ve all had those little tasks—convert an image, resize a photo, compare two lists—that should take a minute but somehow turn into searching for a website, creating an account, or uploading a file somewhere you don&apos;t really know.
          </p>
          <p>I wanted TulHive to be the opposite of that.</p>
          <p className="project-emphasis">Open the tool. Do the thing. Get your result. Move on.</p>
          <div className="principles-grid" aria-label="Product principles">
            <div>
              <h3>Simple by default</h3>
              <p>No unnecessary settings or complicated workflows.</p>
            </div>
            <div>
              <h3>Private by design</h3>
              <p>Process files locally in the browser whenever possible.</p>
            </div>
            <div>
              <h3>Useful first</h3>
              <p>Build tools around actual everyday problems rather than adding features just to add features.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-feature shell">
        <div className="project-narrative">
          <p className="project-eyebrow">Image tools</p>
          <h2>Start with one job. Do it well.</h2>
          <p>
            The first tools were deliberately focused. Convert an HEIC photo. Resize an image. Compress a file. Generate a favicon.
          </p>
          <p>
            Each one is designed around a specific task, with as little friction between opening the page and getting the result as possible.
          </p>
        </div>
        <div className="screenshot-pair screenshot-pair--early">
          <figure className="product-shot product-shot--large">
            <Image
              src="/projects/tulhive/heic-converter.png"
              alt="TulHive HEIC Converter tool interface"
              width={1058}
              height={1180}
            />
          </figure>
          <figure className="product-shot product-shot--support">
            <Image
              src="/projects/tulhive/image-resizer.png"
              alt="TulHive Image Resizer tool interface"
              width={1027}
              height={1199}
            />
          </figure>
        </div>
      </section>

      <section className="project-feature project-feature--capable shell">
        <div className="screenshot-pair screenshot-pair--capable">
          <figure className="product-shot">
            <Image
              src="/projects/tulhive/compare-two-lists.png"
              alt="TulHive Compare Two Lists tool interface"
              width={1028}
              height={1260}
            />
          </figure>
          <figure className="product-shot">
            <Image
              src="/projects/tulhive/compare-excel-files.png"
              alt="TulHive Compare Excel Files tool interface"
              width={910}
              height={1217}
            />
          </figure>
        </div>
        <div className="project-narrative">
          <p className="project-eyebrow">Data tools</p>
          <h2>Small tools can solve bigger problems, too.</h2>
          <p>
            As TulHive grew, I started applying the same approach to more involved tasks. Compare Two Lists can find matches and differences in pasted data in seconds. Compare Excel Files goes further, comparing records between spreadsheets even when columns aren&apos;t in the same order.
          </p>
          <p className="project-emphasis">The tools became more capable. The goal stayed the same: make the complicated part feel simple.</p>
        </div>
      </section>

      <section className="project-underhood shell">
        <div className="project-narrative">
          <p className="project-eyebrow">How it works</p>
          <h2>Under the hood</h2>
          <p>
            TulHive is built as a modern browser-based application, with an emphasis on doing as much work on the user&apos;s device as possible. That keeps many tools fast and means files don&apos;t need to make a round trip to a server just to get a simple job done.
          </p>
        </div>
        <div className="project-stack-wrap">
          <p>Built with</p>
          <ul className="project-stack" aria-label="Technology used">
            {stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="underhood-support">
          <div className="project-narrative project-narrative--support">
            <h3>Your files stay with you.</h3>
            <p>
              Whenever possible, TulHive processes files and data directly in the browser. That means a file you&apos;re converting, resizing, or comparing doesn&apos;t need to be uploaded to a TulHive server first.
            </p>
            <p>
              It&apos;s better for privacy, and for a lot of these tools, it&apos;s simply the more sensible way to build them.
            </p>
          </div>
        </div>
      </section>

      <section className="project-closing shell">
        <div className="project-narrative">
          <p className="project-eyebrow">What&apos;s next</p>
          <h2>Still building.</h2>
          <p>
            TulHive is an ongoing project. I&apos;m continuing to add tools, refine the experience, and figure out what small everyday problems are worth solving next.
          </p>
          <p>That&apos;s kind of the point.</p>
          <a className="button" href="https://tulhive.com" target="_blank" rel="noopener noreferrer">Visit TulHive</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
