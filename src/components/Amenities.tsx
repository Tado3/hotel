import { AMENITIES } from '../data'
import styles from './Amenities.module.css'

const ICONS: Record<string, JSX.Element> = {
  pool: <><path d="M2 12h2a2 2 0 0 1 4 0h2a2 2 0 0 1 4 0h2a2 2 0 0 1 4 0h2"/><path d="M2 17h2a2 2 0 0 1 4 0h2a2 2 0 0 1 4 0h2a2 2 0 0 1 4 0h2"/><path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/></>,
  spa: <><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M12 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/><path d="M20 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/></>,
  fitness: <><circle cx="12" cy="12" r="3"/><path d="M2 12h3m14 0h3M12 2v3m0 14v3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1"/></>,
  concierge: <><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M12 3a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7z"/></>,
  business: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
  parking: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></>,
  yoga: <><path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/><path d="M6 22v-2a6 6 0 0 1 12 0v2"/></>,
  transfer: <><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></>,
}

export default function Amenities() {
  return (
    <section className="section" id="amenities">
      <div className="section-tag">Facilities</div>
      <h2 className="section-title">Crafted for Your <em>Wellbeing</em></h2>
      <p className="section-subtitle">
        Every amenity has been thoughtfully curated to ensure your stay is as restorative as it is indulgent.
      </p>

      <div className={styles.grid}>
        {AMENITIES.map((amenity) => (
          <div className={styles.card} key={amenity.name}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[amenity.icon]}
              </svg>
            </div>
            <h3 className={styles.name}>{amenity.name}</h3>
            <p className={styles.desc}>{amenity.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
