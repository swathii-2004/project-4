import { useState } from 'react'

type Vet = {
  id: number
  name: string
  specialty: string
  experience: string
  location: string
  rating: number
  reviews: number
  fee: number
  available: boolean
  img: string
  tags: string[]
}

const VETS: Vet[] = [
  {
    id: 1,
    name: 'Dr. Sarah Patel',
    specialty: 'Small Animal Medicine',
    experience: '12 years',
    location: 'Downtown Clinic',
    rating: 5, reviews: 428,
    fee: 60,
    available: true,
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    tags: ['Dogs', 'Cats', 'Rabbits'],
  },
  {
    id: 2,
    name: 'Dr. James Harmon',
    specialty: 'Veterinary Surgery',
    experience: '18 years',
    location: 'Westside Vet Hospital',
    rating: 5, reviews: 892,
    fee: 90,
    available: true,
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    tags: ['Dogs', 'Cats', 'Emergency'],
  },
  {
    id: 3,
    name: 'Dr. Emily Nguyen',
    specialty: 'Exotic & Avian Care',
    experience: '8 years',
    location: 'PetCare Central',
    rating: 4, reviews: 315,
    fee: 75,
    available: false,
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    tags: ['Birds', 'Reptiles', 'Hamsters'],
  },
  {
    id: 4,
    name: 'Dr. Michael Brooks',
    specialty: 'Dermatology & Allergies',
    experience: '14 years',
    location: 'North Bay Clinic',
    rating: 5, reviews: 607,
    fee: 80,
    available: true,
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    tags: ['Dogs', 'Cats', 'Skin'],
  },
  {
    id: 5,
    name: 'Dr. Aisha Kamara',
    specialty: 'Nutrition & Wellness',
    experience: '10 years',
    location: 'Healthy Paws Clinic',
    rating: 4, reviews: 284,
    fee: 55,
    available: true,
    img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80',
    tags: ['Dogs', 'Cats', 'Diet'],
  },
  {
    id: 6,
    name: 'Dr. Lucas Ferreira',
    specialty: 'Dentistry & Oral Care',
    experience: '9 years',
    location: 'SmileVet Clinic',
    rating: 5, reviews: 521,
    fee: 70,
    available: false,
    img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
    tags: ['Dogs', 'Cats', 'Dental'],
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="stars">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  )
}

export default function Vet() {
  const [booked, setBooked] = useState<number | null>(null)

  const handleBook = (id: number) => {
    setBooked(id)
    setTimeout(() => setBooked(null), 2000)
  }

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="tag animate-fadeUp">💉 Veterinary Care</span>
          <h1 className="animate-fadeUp delay-1">
            Find a Trusted Vet<br /><span className="gradient-text">Near You</span>
          </h1>
          <p className="animate-fadeUp delay-2">
            Connect with certified veterinarians. Book same-day appointments and get your pet the care they deserve.
          </p>
        </div>
      </div>

      {/* Clinic Banner */}
      <div className="container animate-fadeUp delay-2" style={{ marginBottom: 48 }}>
        <div style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          height: 300,
          position: 'relative',
          border: '1px solid var(--border)',
        }}>
          <img
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&q=80"
            alt="Veterinary clinic"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', justifyContent: 'flex-end',
            padding: '40px 48px',
            background: 'linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 60%)',
          }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
              <span className="badge badge-green">✓ Certified Vets</span>
              <span className="badge badge-purple">🕐 24/7 Emergency</span>
              <span className="badge badge-pink">⭐ Top Rated</span>
            </div>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>
              Modern clinics, compassionate care
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', maxWidth: 480 }}>
              All our vets are licensed, background-checked, and highly reviewed by the PawLife community.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="container animate-fadeUp" style={{ marginBottom: 60 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {[
            { icon: '👨‍⚕️', num: '120+', label: 'Certified Vets' },
            { icon: '📅', num: '5K+', label: 'Appointments / mo' },
            { icon: '⭐', num: '4.9', label: 'Average Rating' },
            { icon: '🏥', num: '48', label: 'Clinic Locations' },
          ].map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '20px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 24, fontWeight: 800, background: 'var(--gradient-hero)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {s.num}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Vet Cards */}
      <section className="section-sm">
        <div className="container">
          <div className="section-heading animate-fadeUp">
            <h2>Our Veterinary Team</h2>
            <p>Specialists ready to care for your pet</p>
          </div>
          <div className="vets-grid">
            {VETS.map((vet, i) => (
              <div key={vet.id} className={`glass-card vet-card animate-fadeUp delay-${(i % 5) + 1}`}>
                <div style={{ position: 'relative' }}>
                  <img src={vet.img} alt={vet.name} className="vet-card__img" />
                  <span
                    className={`badge ${vet.available ? 'badge-green' : 'badge-pink'}`}
                    style={{ position: 'absolute', top: 12, right: 12 }}
                  >
                    {vet.available ? '✓ Available' : '● Busy'}
                  </span>
                </div>
                <div className="vet-card__body" style={{ padding: '0 16px 16px' }}>
                  <h3 className="vet-card__name">{vet.name}</h3>
                  <p className="vet-card__spec">{vet.specialty}</p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <StarRating rating={vet.rating} />
                    <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                      ({vet.reviews} reviews)
                    </span>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                    {vet.tags.map(tag => (
                      <span key={tag} className="badge badge-purple">{tag}</span>
                    ))}
                  </div>

                  <div className="vet-card__meta">
                    <span className="vet-card__meta-item">📍 {vet.location}</span>
                    <span className="vet-card__meta-item">⏱️ {vet.experience}</span>
                  </div>

                  <div className="vet-card__footer">
                    <div className="vet-card__fee">
                      Consultation
                      <strong>${vet.fee}</strong>
                    </div>
                    <button
                      className={`btn btn-sm ${vet.available ? 'btn-primary' : 'btn-outline'}`}
                      onClick={() => vet.available && handleBook(vet.id)}
                      disabled={!vet.available}
                      style={{ opacity: vet.available ? 1 : 0.5, cursor: vet.available ? 'pointer' : 'not-allowed' }}
                    >
                      {booked === vet.id ? '✓ Booked!' : vet.available ? 'Book Now' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="booking-banner animate-fadeUp" style={{ marginTop: 60 }}>
            <div>
              <h2>Emergency? We're here <span className="gradient-text">24/7</span></h2>
              <p>Our emergency vet line is always open. Don't wait — your pet's health comes first.</p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>Emergency Hotline</div>
                <a href="tel:+18005551234" style={{ fontSize: 22, fontWeight: 800, color: 'var(--accent-teal)' }}>
                  📞 1-800-PAW-LIFE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
