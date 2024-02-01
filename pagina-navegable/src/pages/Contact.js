import Footer from "../comps/Footer";

export default function Home() {
  return(
    <>
        <header>
            <h1>Bienvenido a Mi Sitio</h1>
        </header>

        <section class="main-content">
            <p>Contacta conmigo a través de este formulario.</p>

            <form action="submit_form.php">
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" required></input>

                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required></input>

                <label for="message">Mensaje</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Enviar Mensaje</button>
            </form>
        </section>

        <Footer />
    </>
  );
}
