import Footer from "../comps/Footer";

export default function Home() {
  return(
    <>
      <header>
        <h1>Bienvenido a Mi Sitio</h1>
      </header>

      <section class="main-content">
        <h2>Explora lo que ofrecemos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ex vel libero fringilla dapibus.</p>
        <a href="#productos" class="btn">Ver productos</a>
      </section>

      <Footer />
    </>
  );
}
