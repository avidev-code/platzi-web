function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Platzi-host</h1>
        <nav>
          <a href="#">Alojamientos</a>
          <a href="#">Experiencias</a>
          <a href="#">Anfitriones</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <div>
            <p className="eyebrow">Clon educativo estilo Platzi-host</p>
            <h2>Encuentra tu próximo alojamiento</h2>
            <p>Explora departamentos, casas y cabañas para tu próxima aventura.</p>
          </div>
        </section>

        <section className="search-box">
          <label>
            Ciudad
            <input type="text" placeholder="Santiago, Chile" />
          </label>
          <label>
            Tipo
            <input type="text" placeholder="Apartamento" />
          </label>
          <label>
            Huéspedes
            <input type="number" placeholder="2" />
          </label>
          <button>Buscar</button>
        </section>

        <section className="properties-section">
          <div className="section-title">
            <h3>Alojamientos disponibles</h3>
            <p>Primeros pasos con React: estructura visual en JSX.</p>
          </div>

          <div className="properties-grid">
            <article className="property-card">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                alt="Apartamento moderno"
              />
              <div className="property-card-content">
                <h4>Apartamento moderno</h4>
                <p>Santiago, Chile</p>
                <strong>$75 / noche</strong>
              </div>
            </article>

            <article className="property-card">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Casa frente al lago"
              />
              <div className="property-card-content">
                <h4>Casa frente al lago</h4>
                <p>Bariloche, Argentina</p>
                <strong>$120 / noche</strong>
              </div>
            </article>

            <article className="property-card">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                alt="Loft urbano"
              />
              <div className="property-card-content">
                <h4>Loft urbano</h4>
                <p>Ciudad de México, México</p>
                <strong>$90 / noche</strong>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;