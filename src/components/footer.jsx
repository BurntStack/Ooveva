import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="container footer-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div>
          <h2 className="footer-logo">OOVEVA</h2>
          <p>
            The In-House Cafe — Eat, Sip & Indulge.
            Indian & continental cuisine in Hanamkonda, Warangal.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Visit</h3>
          <p>Subedari, Hanamkonda</p>
          <p>Telangana 506001</p>
          <p>+91 89773 95454</p>
        </div>

        <div>
          <h3>Follow</h3>
          <a
            href="https://www.instagram.com/cafe_ooveva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cafe_ooveva
          </a>
        </div>
      </motion.div>

      <div className="container footer-bottom">
        © 2026 Ooveva Cafe. All rights reserved.
      </div>
    </motion.footer>
  );
}
