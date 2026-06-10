import { ROOMS } from '../data'
import styles from './Rooms.module.css'

export default function Rooms() {
  return (
    <section className="section" id="rooms">
      <div className="section-tag">Accommodations</div>
      <h2 className="section-title">Our <em>Rooms &amp; Suites</em></h2>
      <p className="section-subtitle">
        Each room is a private sanctuary, thoughtfully designed with bespoke furnishings,
        premium linens, and every modern comfort you deserve.
      </p>

      <div className={styles.grid}>
        {ROOMS.map((room) => (
          <div className={styles.card} key={room.id}>
            <div className={styles.imgWrap}>
              <img src={room.image} alt={room.name} loading="lazy" />
              <div className={styles.tag}>{room.tag}</div>
            </div>
            <div className={styles.body}>
              <h3 className={styles.name}>{room.name}</h3>
              <p className={styles.desc}>{room.desc}</p>
              <div className={styles.features}>
                {room.features.map((f) => (
                  <span key={f} className={styles.feature}>{f}</span>
                ))}
              </div>
              <div className={styles.footer}>
                <div className={styles.price}>
                  ${room.price} <span>/ night</span>
                </div>
                <a href="#contact" className={styles.bookLink}>
                  {room.id === 3 ? 'Enquire' : 'Book Now'} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
