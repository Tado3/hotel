import styles from './Dining.module.css'

export default function Dining() {
  return (
    <section className="section-alt" id="dining">
      <div className={styles.grid}>

        <div className={styles.imgCol}>
          <div className={styles.imgFrame}>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85&auto=format&fit=crop"
              alt="The Amber Table restaurant"
              loading="lazy"
            />
          </div>
          <div className={styles.floatCard}>
            <div className={styles.floatTitle}>Farm to Table</div>
            <div className={styles.floatSub}>Cuisine Philosophy</div>
          </div>
        </div>

        <div className={styles.textCol}>
          <div className="section-tag">Restaurant &amp; Bar</div>
          <h2 className="section-title">Dining as an <em>Experience</em></h2>
          <p className={styles.para}>
            The Amber Table celebrates the finest local produce, guided by our award-winning
            chef whose passion for seasonal ingredients creates menus that change with the
            rhythm of nature.
          </p>
          <p className={styles.para}>
            Paired with an exceptional wine cellar and craft cocktail programme, every
            meal becomes an occasion worth remembering.
          </p>
          <a href="#contact" className="btn-gold" style={{ marginBottom: '2.5rem' }}>
            <span>Reserve a Table</span>
          </a>

          <div className={styles.hours}>
            {[
              { meal: 'Breakfast', time: '7:00 — 10:30' },
              { meal: 'Lunch',     time: '12:00 — 15:00' },
              { meal: 'Dinner',    time: '18:30 — 22:30' },
              { meal: 'Bar',       time: '11:00 — Late' },
            ].map((h) => (
              <div key={h.meal} className={styles.hoursItem}>
                <div className={styles.hoursMeal}>{h.meal}</div>
                <div className={styles.hoursTime}>{h.time}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
