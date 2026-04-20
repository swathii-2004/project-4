import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero__bg" />
        <div className="home-hero__overlay" />
        <div className="container">
          <div className="home-hero__content animate-fadeUp">
            <span className="tag">🐾 Premium Pet Care</span>
            <h1>
              Everything Your<br />
              <span className="gradient-text">Furry Friend</span><br />
              Deserves
            </h1>
            <p>
              From nutritious food to trusted veterinary care — PawLife is your
              one-stop companion for happy, healthy pets.
            </p>
            <div className="home-hero__btns">
              <Link to="/store" className="btn btn-primary">Shop Products →</Link>
              <Link to="/vet" className="btn btn-outline">Find a Vet</Link>
            </div>
            <div className="home-hero__stats">
              <div className="home-hero__stats-item">
                <div className="home-hero__stats-num">500+</div>
                <div className="home-hero__stats-label">Premium Products</div>
              </div>
              <div className="home-hero__stats-item">
                <div className="home-hero__stats-num">120+</div>
                <div className="home-hero__stats-label">Trusted Vets</div>
              </div>
              <div className="home-hero__stats-item">
                <div className="home-hero__stats-num">50K+</div>
                <div className="home-hero__stats-label">Happy Pet Owners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading animate-fadeUp">
            <p style={{ color: 'var(--accent-teal)', fontWeight: 600, marginBottom: 8 }}>WHY PAWLIFE?</p>
            <h2>Built for pet lovers,<br />by pet lovers</h2>
          </div>
          <div className="features-grid">
            <div className="glass-card feature-card animate-fadeUp delay-1">
              <div className="feature-card__icon feature-card__icon-purple">🛍️</div>
              <h3>Premium Store</h3>
              <p>Curated selection of high-quality food, toys, and accessories for dogs, cats, and more.</p>
            </div>
            <div className="glass-card feature-card animate-fadeUp delay-2">
              <div className="feature-card__icon feature-card__icon-teal">👨‍⚕️</div>
              <h3>Trusted Vets</h3>
              <p>Connect with certified veterinarians near you. Book appointments in seconds, 24/7.</p>
            </div>
            <div className="glass-card feature-card animate-fadeUp delay-3">
              <div className="feature-card__icon feature-card__icon-pink">❤️</div>
              <h3>Pet Health Tracker</h3>
              <p>Keep detailed logs of feeding, walks, medicines, and vet visits — all in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section-sm">
        <div className="container">
          <div className="booking-banner animate-fadeUp">
            <div>
              <h2>Ready to give your pet<br /><span className="gradient-text">the best care?</span></h2>
              <p>Join 50,000+ pet owners who trust PawLife every day.</p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/store" className="btn btn-primary">Browse Store</Link>
              <Link to="/vet" className="btn btn-outline">Book a Vet</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading animate-fadeUp">
            <h2>What pet owners say</h2>
            <p>Real stories from our community</p>
          </div>
          <div className="features-grid">
            {[
              {
                quote: "PawLife has completely transformed how I care for my dog. The food quality is incredible and delivery is always on time!",
                name: "Sarah M.",
                pet: "Dog mom 🐶",
                avatar: "https://i.pravatar.cc/60?img=47",
              },
              {
                quote: "Found an amazing vet through PawLife within 5 minutes. My cat was seen the same day. Absolutely lifesaving.",
                name: "James K.",
                pet: "Cat dad 🐱",
                avatar: "https://i.pravatar.cc/60?img=12",
              },
              {
                quote: "The health tracking feature keeps me organized. My vet was impressed that I had all of Biscuit's logs ready.",
                name: "Priya R.",
                pet: "Bunny parent 🐰",
                avatar: "https://i.pravatar.cc/60?img=32",
              },
            ].map((t, i) => (
              <div key={i} className={`glass-card feature-card animate-fadeUp delay-${i + 1}`} style={{ cursor: 'default' }}>
                <div className="stars">★★★★★</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: '14px 0', fontStyle: 'italic', fontSize: 14 }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                  <img src={t.avatar} alt={t.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.pet}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
