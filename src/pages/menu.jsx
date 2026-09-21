import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems } from "../data/menu";
import ScrollReveal, { reveal, transition } from "../components/scroll-reveal";
import TextReveal from "../components/text-reveal";

export default function Menu() {
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems =
    category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === category);
  const items = filteredItems.slice(0, visibleCount);

  const handleCategoryChange = (nextCategory) => {
    setCategory(nextCategory);
    setVisibleCount(12);
  };

  return (
    <section className="page menu-page">
      <ScrollReveal className="container page-header">
        <span className="eyebrow">OOVEVA Cafe</span>
        <h1>Menu</h1>
        <p>Find your next favourite, from the first sip to the last sweet bite.</p>
      </ScrollReveal>

      <ScrollReveal className="categories" delay={0.08}>
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? "category active" : "category"}
            onClick={() => handleCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </ScrollReveal>

      <ScrollReveal className="menu-count" delay={0.14}>
        Showing {items.length} of {filteredItems.length} items
      </ScrollReveal>

      <motion.div
        className="menu-list"
        initial={false}
      >
        {items.map((item) => (
          <motion.article
            className="menu-row"
            key={item.id}
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ ...transition, delay: Math.min((item.id % 12) * 0.04, 0.44) }}
          >
            <div className="menu-row-thumb">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/cold-coffee.jpg";
                }}
              />
            </div>
            <TextReveal className="menu-row-body">
              <div className="menu-row-top">
                <h2>{item.name}</h2>
                <span className="menu-row-price">
                  {item.price ? `₹${item.price}` : "2 options"}
                </span>
              </div>
              {item.description && (
                <p className="menu-row-desc">{item.description}</p>
              )}
              <span className="menu-row-tag">{item.category}</span>
            </TextReveal>
          </motion.article>
        ))}
      </motion.div>

      {visibleCount < filteredItems.length && (
        <motion.div
          className="menu-more"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>More from the Ooveva kitchen</p>
          <motion.div
            className="view-more-float"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.button
              type="button"
              className="view-more-button"
              onClick={() => setVisibleCount((count) => count + 12)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              View more
              <span aria-hidden="true">↓</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
