import { MapPin, Phone, Clock, Camera } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { reveal, transition } from "../components/scroll-reveal";

export default function Contact() {
  return (
    <section className="page contact-page">
      <ScrollReveal className="page-header">
        <span className="eyebrow">Find Us</span>
        <h1>Find your next favourite table.</h1>
        <p>
          Visit Ooveva for specialty coffee, generous plates and a space made
          for easy afternoons and warm evenings.
        </p>
      </ScrollReveal>

      <div className="contact-layout">
        <motion.div
          className="contact-details"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div className="contact-item" variants={reveal} transition={transition}>
            <MapPin size={20} />
            <h3>Location</h3>
            <p>
              Ooveva — The In-House Cafe
              <br />
              Back of Woodland, Beside D-Mart
              <br />
              Subedari, Hanamkonda
              <br />
              Telangana 506001
            </p>
          </motion.div>

          <motion.div className="contact-item" variants={reveal} transition={transition}>
            <Clock size={20} />
            <h3>Opening Hours</h3>
            <p>
              Monday – Sunday
              <br />
              11:30 AM – 10:30 PM
            </p>
          </motion.div>

          <motion.div className="contact-item" variants={reveal} transition={transition}>
            <Phone size={20} />
            <h3>Contact</h3>
            <p>
              <a href="tel:+918977395454">+91 89773 95454</a>
            </p>
          </motion.div>

          <motion.div className="contact-item" variants={reveal} transition={transition}>
            <Camera size={20} />
            <h3>Instagram</h3>
            <p>
              <a
                href="https://www.instagram.com/cafe_ooveva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cafe_ooveva
              </a>
            </p>
          </motion.div>
        </motion.div>

        <ScrollReveal className="map" delay={0.18}>
          <iframe
            title="Ooveva Cafe Location"
            src="https://maps.google.com/maps?q=Ooveva+Cafe+Subedari+Hanamkonda+Warangal&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
