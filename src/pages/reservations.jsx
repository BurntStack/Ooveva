import { motion } from "framer-motion";
import ScrollReveal from "../components/scroll-reveal";
import TextReveal from "../components/text-reveal";

export default function Reservations() {
  return (
    <section className="page reservations-page">
      <ScrollReveal className="page-header">
        <span className="eyebrow">Ooveva Cafe</span>
        <h1>Make room for a good moment.</h1>
        <p>Tell us when you are coming and we will have a comfortable table ready.</p>
      </ScrollReveal>

      <motion.form
        className="reservation-form"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        onSubmit={(event) => event.preventDefault()}
      >
        <TextReveal className="reservation-fields">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="Phone number" required />
          </label>
          <div className="reservation-row">
            <label>
              Date
              <input type="date" name="date" required />
            </label>
            <label>
              Time
              <input type="time" name="time" required />
            </label>
          </div>
          <label>
            Guests
            <select name="guests" defaultValue="2">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </label>
          <label>
            Note
            <textarea name="note" placeholder="Anything we should know?" />
          </label>
          <button className="dark-button" type="submit">Request my table</button>
        </TextReveal>
      </motion.form>
    </section>
  );
}