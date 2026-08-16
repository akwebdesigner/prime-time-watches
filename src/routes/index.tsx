import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram, Facebook, MessageCircle, Watch as WatchIcon } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { watches, categories } from "@/data/watches";
import logoAsset from "@/assets/logo.png.asset.json";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Time Watches | Modern Watches from Rs. 2,000" },
      {
        name: "description",
        content:
          "Browse men's, women's, smart, casual and formal watches from Prime Time Watches — stylish Pakistani timepieces priced Rs. 2,000 to Rs. 10,000.",
      },
      { property: "og:title", content: "Prime Time Watches" },
      {
        property: "og:description",
        content: "Time that matches your style. Affordable modern watches in Pakistan.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "Watches", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const rs = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Prime Time Watches logo"
            width={140}
            height={56}
            className="h-8 w-auto max-w-[150px] object-contain md:h-11"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-md border border-border p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="border-b border-border bg-silver-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-10 md:px-6 md:py-24">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase md:text-xs">
            <WatchIcon className="size-3.5" /> Made for everyday
          </span>
          <h1 className="mt-4 text-[1.75rem] leading-tight font-bold sm:text-4xl md:mt-5 md:text-6xl md:leading-[1.05]">
            Time That Matches Your Style
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground md:mt-5 md:text-base">
            Prime Time Watches brings you clean, modern timepieces for men and women across Pakistan
            — every watch priced between Rs. 2,000 and Rs. 10,000.
          </p>
          <a
            href="#featured"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] md:mt-8 md:px-7"
          >
            Explore Watches
          </a>
        </div>
        <div className="mx-auto w-[90%] overflow-hidden rounded-2xl border border-border bg-background md:w-full">
          <img
            src={heroImg}
            alt="Silver wristwatch on a light grey surface"
            width={1600}
            height={1000}
            className="aspect-video h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Shop by Category</h2>
      <p className="mt-2 text-[13px] text-muted-foreground md:text-sm">
        Find the style that fits your day.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:mt-8 md:grid-cols-5">
        {categories.map((c) => (
          <a
            key={c}
            href="#featured"
            className="card-watch rounded-xl border border-border bg-card p-4 text-center md:p-5"
          >
            <WatchIcon className="mx-auto size-6 text-silver" />
            <p className="mt-3 text-[13px] font-semibold md:text-sm">{c}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="featured" className="border-y border-border bg-silver-soft">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Featured Watches</h2>
        <p className="mt-2 text-[13px] text-muted-foreground md:text-sm">
          Twelve picks from our current collection.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:mt-8 md:grid-cols-3 lg:grid-cols-4">
          {watches.map((w) => (
            <article
              key={w.name}
              className="card-watch overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-square overflow-hidden bg-background p-2">
                <img
                  src={w.image}
                  alt={w.name}
                  loading="lazy"
                  width={700}
                  height={700}
                  className="mx-auto h-full w-[90%] max-w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3 md:p-4">
                <p className="text-[10px] tracking-wider text-muted-foreground uppercase md:text-[11px]">
                  {w.category}
                </p>
                <h3 className="mt-1 text-[13px] leading-snug font-semibold md:text-sm">{w.name}</h3>
                <p className="mt-2 text-[13px] font-bold md:text-sm">{rs(w.price)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-12 text-center md:px-6 md:py-20">
      <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">About Prime Time Watches</h2>
      <p className="mt-4 text-sm text-muted-foreground md:text-base">
        Prime Time Watches is a Pakistani watch store built on a simple idea: a good watch should
        look sharp and stay affordable. We curate stylish men's, women's, smart, casual and formal
        timepieces, all quality checked and priced between Rs. 2,000 and Rs. 10,000 — so you can
        wear something you love every single day.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-3 text-left md:gap-4">
        {[
          ["500+", "Happy customers"],
          ["12", "Featured styles"],
          ["Rs. 2k+", "Starting price"],
        ].map(([a, b]) => (
          <div key={b} className="rounded-xl border border-border bg-card p-3 md:p-4">
            <p className="text-base font-bold md:text-lg">{a}</p>
            <p className="mt-1 text-[11px] text-muted-foreground md:text-xs">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-silver-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:gap-10 md:px-6 md:py-20">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Get in Touch</h2>
          <p className="mt-2 text-[13px] text-muted-foreground md:text-sm">
            Questions about a watch? Message us — we usually reply within a few hours.
          </p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border bg-background p-3 transition-colors hover:bg-accent"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-border bg-background p-3 transition-colors hover:bg-accent"
            >
              <Facebook className="size-5" />
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLFormElement).reset();
            toast.success("Thanks! Your message has been sent.");
          }}
          className="rounded-2xl border border-border bg-card p-4 md:p-6"
        >
          <label className="block text-xs font-medium">Name</label>
          <input
            required
            name="name"
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <label className="mt-4 block text-xs font-medium">Email</label>
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <label className="mt-4 block text-xs font-medium">Message</label>
          <textarea
            required
            name="message"
            rows={4}
            className="mt-1 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.01]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center md:px-6">
        <img
          src={logoAsset.url}
          alt="Prime Time Watches logo"
          width={160}
          height={64}
          loading="lazy"
          className="h-10 w-auto object-contain md:h-12"
        />
        <nav className="flex flex-wrap justify-center gap-4 md:gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="size-5 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook className="size-5 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle className="size-5 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Prime Time Watches. All rights reserved.</p>
          <p className="mt-1">Website Designed &amp; Developed by AK Web Design</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Featured />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
