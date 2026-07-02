const App = () => {
  const phone = "17275310048"

  return (
    <div className="container">

      {/* HERO */}
      <header className="hero">
  <h1>24/7 Emergency Towing & Private Property Impounds in Clearwater, FL</h1>

  <p className="hero-subtitle">
    Black Jack Towing & Recovery provides fast, professional towing,
    roadside assistance, medium-duty towing, accident recovery, and
    private property impound services throughout Clearwater and
    surrounding Pinellas County.
  </p>

  <div className="hero-badges">
    <span className="badge">24/7 Dispatch</span>
    <span className="badge">Fast Response</span>
    <span className="badge">Licensed & Insured</span>
    <span className="badge">Property Managers Welcome</span>
    <span className="badge">Medium Duty Available</span>
  </div>

  <a className="cta" href={`tel:${phone}`}>
    📞 Call Now (727) 531-0048
  </a>

  <div className="subcta-row">
    <a
      className="subcta"
      href="/blackjack-impound-contract.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Property Manager Impound Contracts
    </a>
  </div>

  <div className="eta">
    Average Response Time: 20–30 Minutes*
  </div>

 <p className="muted">
  Proudly serving Clearwater, Largo, Dunedin, Safety Harbor,
  St. Petersburg, and surrounding Pinellas County.
</p>

<div className="hero-trust">
  <div>✔ Fast Response Throughout Pinellas County</div>
  <div>✔ Licensed & Insured Professional Operators</div>
  <div>✔ Trusted by Property Managers, Businesses & Drivers</div>
</div>

</header>
      <main className="main">

        {/* SERVICES */}
        <section className="card">
          <h2>Our Services</h2>

          <div className="grid">
            <div className="item">🚛 Emergency Towing</div>
            <div className="item">🛞 Roadside Assistance</div>
            <div className="item">🔋 Jump Starts</div>
            <div className="item">🧰 Flat Tire Changes</div>
            <div className="item">
              🚚 Medium Duty Available
              <div className="muted">Forklifts • Motorhomes • Box Trucks</div>
            </div>
            <div className="item">🏢 Specialized in Impounds</div>
            <div className="item">🔑 Lockouts</div>
            <div className="item">⚠️ Accident Recovery</div>
          </div>
        </section>

        {/* GOOGLE MAP – ONLY ONE MAP */}
        <section className="card">
          <h2>Serving Clearwater & Nearby Areas</h2>
          <p>Downtown Clearwater • Largo • Dunedin • Safety Harbor • St. Petersburg</p>

          <div className="map">
            <iframe
              src="https://www.google.com/maps?q=Black+Jack+Towing+%26+Recovery+Clearwater+FL&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Black Jack Towing Clearwater FL"
            />
          </div>
        </section>

        {/* PHOTOS */}
        <section className="card">
          <h2>Photos</h2>
          <p className="muted">A look at our fleet and recent jobs.</p>

          <div className="photo-grid">
            <img src="/photos/photo-1.jpg" className="photo" alt="Tow truck 1" />
            <img src="/photos/photo-2.jpg" className="photo" alt="Tow truck 2" />
            <img src="/photos/photo-3.jpg" className="photo" alt="Tow truck 3" />
          </div>
        </section>

      </main>

      {/* STICKY CALL BUTTON */}
      <div className="sticky">
        <a className="call" href={`tel:${phone}`}>Call Now</a>
      </div>

    </div>
  )
}

export default App
