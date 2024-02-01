import patito from "../img/patito.png"
import robotin from "../img/robotin.jpg"
import Footer from "../comps/Footer";

export default function Products() {
  return(
    <>
      <header>
        <h1>Productos</h1>
      </header>

      <section id="productos" class="products">
        <div class="product">
            <img src={patito} alt="Producto 1"></img>
            <h3>Producto 1</h3>
            <p>Descripción del Producto 1.</p>
        </div>

        <div class="product">
            <img src={robotin} alt="Producto 2"></img>
            <h3>Producto 2</h3>
            <p>Descripción del Producto 2.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
