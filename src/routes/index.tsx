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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Prime Time Watches logo"
            width={140}
            height={56}
            className="h-11 w-auto object-contain"
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
          className="rounded-md border border-border p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
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
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <WatchIcon className="size-3.5" /> Made for everyday
          </span>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold md:text-6xl">
            Time That Matches Your Style
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            Prime Time Watches brings you clean, modern timepieces for men and women across
            Pakistan — every watch priced between Rs. 2,000 and Rs. 10,000.
          </p>
          <a
            href="#featured"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Explore Watches
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-background">
          <img
            src={heroImg}
            alt="Silver wristwatch on a light grey surface"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <h2 className="text-2xl font-bold md:text-3xl">Shop by Category</h2>
      <p className="mt-2 text-sm text-muted-foreground">Find the style that fits your day.</p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
        {categories.map((c) => (
          <a
            key={c}
            href="#featured"
            className="card-watch rounded-xl border border-border bg-card p-5 text-center"
          >
            <WatchIcon className="mx-auto size-6 text-silver" />
            <p className="mt-3 text-sm font-semibold">{c}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="featured" className="border-y border-border bg-silver-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl">Featured Watches</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Twelve picks from our current collection.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {watches.map((w) => (
            <article
              key={w.name}
              className="card-watch overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-square overflow-hidden bg-background">
                <img
                  src={w.image}
                  alt={w.name}
                  loading="lazy"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] tracking-wider text-muted-foreground uppercase">
                  {w.category}
                </p>
                <h3 className="mt-1 text-sm font-semibold">{w.name}</h3>
                <p className="mt-2 text-sm font-bold">{rs(w.price)}</p>
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
    <section id="about" className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
      <h2 className="text-2xl font-bold md:text-3xl">About Prime Time Watches</h2>
      <p className="mt-4 text-muted-foreground">
        Prime Time Watches is a Pakistani watch store built on a simple idea: a good watch should
        look sharp and stay affordable. We curate stylish men's, women's, smart, casual and formal
        timepieces, all quality checked and priced between Rs. 2,000 and Rs. 10,000 — so you can
        wear something you love every single day.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-4 text-left">
        {[
          ["500+", "Happy customers"],
          ["12", "Featured styles"],
          ["Rs. 2k+", "Starting price"],
        ].map(([a, b]) => (
          <div key={b} className="rounded-xl border border-border bg-card p-4">
            <p className="text-lg font-bold">{a}</p>
            <p className="mt-1 text-xs text-muted-foreground">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-silver-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Get in Touch</h2>
          <p className="mt-2 text-sm text-muted-foreground">
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
          className="rounded-2xl border border-border bg-card p-6"
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
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center">
        <img
          src={logoAsset.url}
          alt="Prime Time Watches logo"
          width={160}
          height={64}
          loading="lazy"
          className="h-12 w-auto object-contain"
        />
        <nav className="flex flex-wrap justify-center gap-5">
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
          <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" aria-label="WhatsApp">
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
    <div className="min-h-screen bg-background">
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
