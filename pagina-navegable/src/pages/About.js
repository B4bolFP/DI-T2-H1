import Footer from "../comps/Footer";
import yo from "../img/yo.jpg"

export default function About() {
  return(
    <>
      <header>
        <h1>Sobre mi</h1>
      </header>

      <section class="main-content">
        <h2>Nuestra Historia</h2>
        <p>
          Soy un particular apasionado en los productos de bañera. 
          Mi misión es proporcionar productos y servicios que superen las expectativas de los clientes.
        </p>
      </section>

      <h2>Equipo</h2>

      <section class="team">
        <div class="member">
            <img src={ yo } alt="Miembro del Equipo 1"></img>
            <h3>Yo</h3>
            <p>Director y desarrollador</p>
        </div>
      </section>  

      <Footer />
    </>
  );
}
