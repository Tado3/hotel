import styles from './Booking.module.css'

export default function Booking() {
  return (
    <div className={styles.bar}>
      <div className={styles.field}>
        <label>Check In</label>
        <input type="date" />
      </div>
      <div className={styles.divider} />
      <div className={styles.field}>
        <label>Check Out</label>
        <input type="date" />
      </div>
      <div className={styles.divider} />
      <div className={styles.field}>
        <label>Guests</label>
        <select>
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
          <option>5+ Guests</option>
        </select>
      </div>
      <div className={styles.divider} />
      <div className={styles.field}>
        <label>Room Type</label>
        <select>
          <option>Any Room</option>
          <option>Deluxe Room</option>
          <option>Junior Suite</option>
          <option>Presidential Suite</option>
        </select>
      </div>
      <button className={styles.btn}>Check Availability</button>
    </div>
  )
}
