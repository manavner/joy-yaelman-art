const works = [
  {
    title: "Ink workshop / early study",
    image: "https://64.media.tumblr.com/547820fa7d7265b6954b6475aa731711/tumblr_p0g8ck32gv1szgpmro1_500.jpg",
    source: "https://joyyael.tumblr.com/post/168190987447",
  },
  {
    title: "Illustration & poetry fragment",
    image: "https://64.media.tumblr.com/8a9e53cbf5d4c7d832051969c50bed3a/tumblr_p098wvWIuM1szgpmro1_500.jpg",
    source: "https://joyyael.tumblr.com/post/168059867852",
  },
  {
    title: "Sketch / expressive line",
    image: "https://64.media.tumblr.com/f3cd974bc98d5f80e718c790d5b601dd/tumblr_p08rfsljnY1szgpmro1_500.jpg",
    source: "https://joyyael.tumblr.com/post/168049437692",
  },
  {
    title: "Drawing / sunset note",
    image: "https://64.media.tumblr.com/83f64db4ad16387e146a65a41a5e5248/tumblr_p06t6mLtJg1szgpmro1_500.jpg",
    source: "https://joyyael.tumblr.com/post/168013342077",
  },
  {
    title: "Botanical softness",
    image: "https://64.media.tumblr.com/bff8bb415468fbeacadacebc548cdddc/tumblr_p03ho0yAB61szgpmro1_500.jpg",
    source: "https://joyyael.tumblr.com/post/167952043352",
  },
  {
    title: "Pattern study",
    image: "https://64.media.tumblr.com/2877293e2124924bdb482d50ff0e7441/tumblr_ozno1fzQy71szgpmro1_400.jpg",
    source: "https://joyyael.tumblr.com/",
  },
];

const links = [
  { label: "Instagram", value: "@joyyaelman", href: "https://www.instagram.com/joyyaelman/" },
  { label: "Tumblr archive", value: "The art of Joy", href: "https://joyyael.tumblr.com/" },
  { label: "Spoonflower", value: "the_art_of_joy", href: "https://www.spoonflower.com/profiles/the_art_of_joy" },
  { label: "TikTok", value: "@joyyaelman", href: "https://www.tiktok.com/@joyyaelman" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Initial portfolio concept</p>
          <h1>The Art of Joy</h1>
          <p className="subtitle">Joy Yaelman</p>
          <p className="intro">
            A soft, expressive portfolio direction inspired by publicly available work from Joy&apos;s online art presence: illustration, handwritten poetry, botanical sensitivity, body-positive energy, and pattern design.
          </p>
          <div className="ctaRow">
            <a href="#gallery" className="button primary">View art direction</a>
            <a href="https://www.instagram.com/joyyaelman/" className="button secondary" target="_blank">Visit Instagram</a>
          </div>
        </div>
        <div className="heroArt" aria-label="Featured Joy Yaelman artwork collage">
          {works.slice(0, 3).map((work) => (
            <img key={work.image} src={work.image} alt={work.title} />
          ))}
        </div>
      </section>

      <section className="statement">
        <p>
          “The Art of Joy” feels intimate and handmade: lines that keep their human pulse, poetic fragments, organic textures, and artwork that moves between sketchbook, surface pattern, and emotional illustration.
        </p>
      </section>

      <section id="gallery" className="gallerySection">
        <div className="sectionHeader">
          <p className="eyebrow">Public artwork references</p>
          <h2>A first visual wall</h2>
          <p>These are externally linked public images from Joy&apos;s Tumblr archive, used here as an initial concept mockup with source links.</p>
        </div>
        <div className="gallery">
          {works.map((work) => (
            <a className="card" href={work.source} target="_blank" key={work.image}>
              <img src={work.image} alt={work.title} />
              <span>{work.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="aboutGrid">
        <div>
          <p className="eyebrow">Positioning draft</p>
          <h2>Illustration, poetry, patterns, feeling.</h2>
        </div>
        <div className="aboutCopy">
          <p>
            The site can frame Joy as a multidisciplinary artist whose work bridges personal drawing, poetic image-text, botanical motifs, and repeat-pattern design for textile and home surfaces.
          </p>
          <p>
            Next iteration should confirm biography, preferred language, commercial goals, image permissions, commission flow, and which works should become the official portfolio set.
          </p>
        </div>
      </section>

      <section className="linksSection">
        <p className="eyebrow">Found online</p>
        <h2>Public links</h2>
        <div className="linksGrid">
          {links.map((link) => (
            <a href={link.href} target="_blank" className="linkCard" key={link.href}>
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
