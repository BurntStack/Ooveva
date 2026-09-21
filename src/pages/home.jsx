import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import TextReveal from "../components/text-reveal";

const revealTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
};

function RevealSection({ children, className = "", duration }) {
  return (
    <motion.section
      className={`${className} will-change-transform`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.18 }}
      variants={reveal}
      transition={{ ...revealTransition, ...(duration ? { duration } : {}) }}
    >
      {children}
    </motion.section>
  );
}

const IMAGES = {
  about: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  coldCoffee: "/cold-coffee.jpg",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  fudge: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80",
  ambience: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80",
};

const signatures = [
  {
    name: "Ooveva Cold Coffee",
    desc: "Chilled, creamy cold coffee topped with whipped cream.",
    price: "₹249",
    image: IMAGES.coldCoffee,
  },
  {
    name: "Golden Crunch Chicken Burger",
    desc: "Crispy chicken fillet with lettuce and creamy house sauce.",
    price: "₹299",
    image: IMAGES.burger,
  },
  {
    name: "Hot Chocolate Fudge",
    desc: "Warm chocolate sponge topped with silky hot fudge sauce.",
    price: "₹329",
    image: IMAGES.fudge,
  },
];

const reviews = [
  {
    text: "The ambience is something new in Warangal — cozy, modern and perfect for long conversations.",
    author: "Local Guest",
  },
  {
    text: "Best cold brew I've had in Hanamkonda. The pasta and shakes are equally great.",
    author: "Regular Visitor",
  },
  {
    text: "A beautiful in-house cafe beside D-Mart. Ideal for coffee dates and casual dinners.",
    author: "Food Lover",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useSpring(
    useTransform(scrollYProgress, [0, 0.65, 1], [1, 1.14, 1.3]),
    { stiffness: 90, damping: 28, mass: 0.8 }
  );

  return (
    <>
      <div className="hero-scroll-stage" ref={heroRef}>
        <motion.section
          className="hero will-change-transform"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-backdrop"
            style={{ scale: heroScale }}
            aria-hidden="true"
          />
          <div className="container hero-inner">
          <motion.div
            className="hero-text"
            variants={reveal}
            transition={{ ...revealTransition, delay: 0.12 }}
          >
            <span className="hero-badge">Ooveva Cafe · Hanamkonda</span>
            <h1>
              Coffee worth<br />
              <em>slowing down for.</em>
            </h1>
            <p>
              Specialty coffee, comfort food and an easy place to stay awhile.
              Come for the first sip, stay for the conversation.
            </p>
            <div className="hero-meta" aria-label="Cafe details">
              <span>Hanamkonda, Warangal</span>
              <span>Open daily · 11:30–22:30</span>
            </div>
            <div className="hero-buttons">
              <Link to="/menu" className="btn-primary">Explore the menu</Link>
              <Link to="/reservations" className="btn-outline">Reserve a table</Link>
            </div>
          </motion.div>
          </div>
        </motion.section>
      </div>

      <RevealSection className="about-section">
        <div className="container about-grid">
        <div className="about-image">
          <img src={IMAGES.about} alt="Ooveva Cafe interior" />
        </div>
        <div className="about-content">
          <TextReveal delay={0.08}>
            <span className="eyebrow">Our Story</span>
          </TextReveal>
          <TextReveal delay={0.18}>
            <h2>Your table for good coffee and good company.</h2>
          </TextReveal>
          <TextReveal delay={0.28}>
            <p>
              Ooveva is made for the moments between plans: a slow coffee,
              a shared plate, or a conversation that runs a little longer.
            </p>
          </TextReveal>
          <TextReveal delay={0.38}>
            <p>
              Choose from Indian favourites, continental comfort food,
              signature drinks and desserts made for the table.
            </p>
          </TextReveal>
          <TextReveal className="about-stats" delay={0.48}>
            <div>
              <span>4.0</span>
              <p>Guest Rating</p>
            </div>
            <div>
              <span>50+</span>
              <p>Menu Items</p>
            </div>
            <div>
              <span>2026</span>
              <p>Est. Hanamkonda</p>
            </div>
          </TextReveal>
        </div>
        </div>
      </RevealSection>

      <RevealSection className="section container" duration={1.05}>
        <TextReveal className="section-header" duration={1.1}>
          <span className="eyebrow">Best Sellers</span>
          <h2>Start with something special</h2>
          <p>Guest favourites from the kitchen, coffee bar and dessert counter.</p>
        </TextReveal>
        <motion.div
          className="signature-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.12 }}
        >
          {signatures.map((item) => (
            <motion.article
              className="signature-card"
              key={item.name}
              variants={reveal}
              transition={{ ...revealTransition, duration: 1.05 }}
            >
              <div className="signature-card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <TextReveal className="signature-card-copy">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span className="price">{item.price}</span>
              </TextReveal>
            </motion.article>
          ))}
        </motion.div>
      </RevealSection>

      <RevealSection className="experience">
        <img src={IMAGES.ambience} alt="Coffee ambience at Ooveva" />
        <div className="experience-overlay" />
        <motion.div className="experience-content" variants={reveal}>
          <span className="eyebrow">The Experience</span>
          <h2>Where every sip feels like a pause.</h2>
        </motion.div>
      </RevealSection>

      <RevealSection className="section container" duration={1.05}>
        <TextReveal className="section-header" duration={1.1}>
          <span className="eyebrow">Guest Love</span>
          <h2>Made for lingering</h2>
        </TextReveal>
        <motion.div
          className="reviews-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.12 }}
        >
          {reviews.map((review) => (
            <motion.article
              className="review-card"
              key={review.author}
              variants={reveal}
              transition={{ ...revealTransition, duration: 1.05 }}
            >
              <div className="review-stars">★★★★★</div>
              <TextReveal className="review-copy">
                <p>"{review.text}"</p>
                <footer>— {review.author}</footer>
              </TextReveal>
            </motion.article>
          ))}
        </motion.div>
      </RevealSection>

      <RevealSection className="reservation-cta" duration={1.1}>
        <TextReveal className="container" duration={1.15}>
          <span className="eyebrow">Visit Us</span>
          <h2>Make your next coffee moment count.</h2>
          <p>
            Open daily for coffee, comfort food and unhurried evenings.
            Reserve ahead when you want the best table.
          </p>
          <Link to="/reservations" className="btn-primary">Plan your visit</Link>
        </TextReveal>
      </RevealSection>
    </>
  );
}
