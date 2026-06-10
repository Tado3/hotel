import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgWrap}>
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=85&auto=format&fit=crop"
          alt="Serenova Hotel exterior"
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.tag}>Boutique Hotel &amp; Retreat</p>
        <h1 className={styles.title}>
          Where Luxury<br />Meets <em>Serenity</em>
        </h1>
        <p className={styles.desc}>
          A refined sanctuary where every detail is crafted to offer an exceptional stay.
          Experience timeless elegance, world-class service, and unparalleled comfort.
        </p>
        <div className={styles.actions}>
          <a href="#rooms" className="btn-gold"><span>Explore Rooms</span></a>
          <a href="#contact" className="btn-ghost">Reserve a Stay →</a>
        </div>
      </div>

      <div className={styles.badge}>
        <div className={styles.badgeNum}>★ 5</div>
        <div className={styles.badgeText}>Star Excellence</div>
      </div>

      <div className={styles.scroll}>
        <span />
        <p>Scroll to explore</p>
      </div>
    </section>
  )
}
