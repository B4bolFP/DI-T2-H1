import Footer from "../comps/Footer";

export default function Login() {
  return(
    <>
      <header>
        <h1>Inicia sesion</h1>
      </header>

      <section class="main-content">
            <form action="submit_form.php">
                <label for="name">Usuario</label>
                <input type="text" id="name" name="name" required></input>

                <label for="email">Contraseña</label>
                <input type="password" id="email" name="email" required></input>

                <button type="submit">Iniciar sesion</button>
            </form>
        </section>

      <Footer />
    </>
  );
}


