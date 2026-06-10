import { useState } from 'react'
import { GALLERY } from '../data'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="section-alt" id="gallery">
      <div className="section-tag">Visual Tour</div>
      <h2 className="section-title">A Glimpse of <em>Serenova</em></h2>
      <p className="section-subtitle">
        Moments captured within our walls — where elegance is everywhere you look.
      </p>

      <div className={styles.grid}>
        {GALLERY.map((item) => (
          <div
            key={item.id}
            className={`${styles.item} ${item.span === 'both' ? styles.spanBoth : ''}`}
            onClick={() => setActive(item.id)}
          >
            <img src={item.image} alt={item.label} loading="lazy" />
            <div className={styles.itemOverlay}>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className={styles.lightbox} onClick={() => setActive(null)}>
          <button className={styles.close} onClick={() => setActive(null)} aria-label="Close">✕</button>
          <img
            src={GALLERY.find((g) => g.id === active)?.image}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
