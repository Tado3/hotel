import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    checkin: '', checkout: '', room: 'Deluxe Room', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Reservation Enquiry — ${form.room}`
    const body = `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nRoom: ${form.room}\n\n${form.message}`
    window.open(`mailto:reservations@serenova.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
  }

  return (
    <section className="section" id="contact">
      <div className="section-tag">Get in Touch</div>
      <h2 className="section-title">Plan Your <em>Stay</em></h2>
      <p className="section-subtitle">
        Our reservations team is available around the clock to craft the perfect itinerary for your visit.
      </p>

      <div className={styles.grid}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>First Name</label>
              <input name="firstName" placeholder="Your first name" value={form.firstName} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label>Last Name</label>
              <input name="lastName" placeholder="Your last name" value={form.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className={styles.field}>
            <label>Email Address</label>
            <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Check In</label>
              <input name="checkin" type="date" value={form.checkin} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label>Check Out</label>
              <input name="checkout" type="date" value={form.checkout} onChange={handleChange} />
            </div>
          </div>
          <div className={styles.field}>
            <label>Room Preference</label>
            <select name="room" value={form.room} onChange={handleChange}>
              <option>Deluxe Room</option>
              <option>Junior Suite</option>
              <option>Presidential Suite</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Special Requests</label>
            <textarea name="message" placeholder="Let us know how we can make your stay extraordinary…" value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn-gold">Send Enquiry</button>
        </form>

        <div className={styles.info}>
          {[
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              label: 'Address',
              val: '12 Serenova Boulevard\nYour City, Country',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8a2 2 0 0 1 1.98-2.185h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9 16.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/></svg>,
              label: 'Reservations',
              val: '+1 (000) 000-0000',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              label: 'Email',
              val: 'reservations@serenova.com',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
              label: 'Reception',
              val: 'Open 24 Hours, Every Day',
            },
          ].map((item) => (
            <div key={item.label} className={styles.infoItem}>
              <div className={styles.infoIcon}>{item.icon}</div>
              <div>
                <div className={styles.infoLabel}>{item.label}</div>
                <div className={styles.infoVal}>{item.val}</div>
              </div>
            </div>
          ))}

          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=80&auto=format&fit=crop"
              alt="Hotel lobby"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
