import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.brand}>
          <div className={styles.logo}>Sere<span>nova</span></div>
          <p className={styles.tagline}>
            A boutique sanctuary where timeless luxury and heartfelt hospitality come together.
          </p>
          <div className={styles.socials}>
            {['Instagram', 'Facebook', 'TripAdvisor'].map((s) => (
              <a key={s} href="#" className={styles.social}>{s}</a>
            ))}
          </div>
        </div>

        {[
          {
            heading: 'Navigate',
            links: [
              { label: 'Rooms & Suites', href: '#rooms' },
              { label: 'Dining',         href: '#dining' },
              { label: 'Amenities',      href: '#amenities' },
              { label: 'Gallery',        href: '#gallery' },
              { label: 'Contact',        href: '#contact' },
            ],
          },
          {
            heading: 'Services',
            links: [
              { label: 'Spa & Wellness',    href: '#amenities' },
              { label: 'Events & Weddings', href: '#contact' },
              { label: 'Business Travel',   href: '#contact' },
              { label: 'Airport Transfers', href: '#contact' },
              { label: 'Private Dining',    href: '#dining' },
            ],
          },
          {
            heading: 'Legal',
            links: [
              { label: 'Privacy Policy',  href: '#' },
              { label: 'Terms of Use',    href: '#' },
              { label: 'Cookie Policy',   href: '#' },
              { label: 'Accessibility',   href: '#' },
            ],
          },
        ].map((col) => (
          <div key={col.heading}>
            <div className={styles.colHead}>{col.heading}</div>
            <ul className={styles.colLinks}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      <div className={styles.bottom}>
        <p>© 2026 Serenova Boutique Hotel. All rights reserved.</p>
        <p>Built with TypeScript &amp; React</p>
      </div>
    </>
  )
}
