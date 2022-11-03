import contato from './Assets/contact.png';
import lupa from './Assets/lupa.png'
import Popup from './componets/popup';
import { useState } from "react";
import './css/global.css';
import './css/header.css';
import './css/back.css';
import './css/title-data.css';
import './css/data.css';
import './css/foot.css';

const App = () => {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <main>
      <header>
        <div className="title-contact">
          <img src={contato} alt="" />
          <h1>Contact +</h1>
        </div>
        <div className="new-contact-button">
        <button onClick={() => setButtonPopup(true)}>Novo Contato</button>
        <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}></Popup>
        </div>
      </header>
      <body>
        <div className="formulario">
          <form action="">
            <input type="text" placeholder='Digite o nome do contato' />
          </form>
          <div className="img-search">
            <img src={lupa} alt="" />
            <h2>Buscar</h2>
          </div>
        </div>

        <div className="title-data">
          <h3>Nome</h3>
          <div className="title-data-E-N">
            <h4>Email</h4>
            <h5>Telefone</h5>
          </div>
        </div>

        <section>
          <div className="data">

            <div className="data-1">
              <h3>Antenor Lorenzutti</h3>
              <h4>antenorl@gmail.com</h4>
              <h5>91280-6161</h5>
            </div>

            <div className="data-2">
              <h3>Bruno Botelho</h3>
              <h4>brunob@mail.com</h4>
              <h5>91270-5252</h5>
            </div>

            <div className="data-3">
              <h3>Carlos Eduardo</h3>
              <h4>carlosc@gmail.com</h4>
              <h5>91260-4463</h5>
            </div>

            <div className="data-4">
              <h3>Eduardo Costa</h3>
              <h4>eduardoc@mail.com</h4>
              <h5>91250-2164</h5>
            </div>

            <div className="data-5">
              <h3>Fred Mercury</h3>
              <h4>fredm@gmail.com</h4>
              <h5>91240-1165</h5>
            </div>

            <div className="data-6">
              <h3>Giovana Moura</h3>
              <h4>giovanam@mail.com</h4>
              <h5>91230-1165</h5>
            </div>

            <div className="data-7">
              <h3>Ivan Rosolen</h3>
              <h4>ivanr@gmail.com</h4>
              <h5>91220-8167</h5>
            </div>

            <div className="data-8">
              <h3>Lilian Batista</h3>
              <h4>lilianb@mail.com</h4>
              <h5>91211-6138</h5>
            </div>

            <div className="data-9">
              <h3>Manoel Rezende</h3>
              <h4>manoelr@mail.com</h4>
              <h5>91222-6469</h5>
            </div>

            <div className="data-10">
              <h3>Pedro Henrique</h3>
              <h4>pedrohb@mail.com</h4>
              <h5>91230-5160</h5>
            </div>

          </div>
        </section>
      </body>
      <footer>
        <div className="foot">
          <hr />
          <h6>Developed by Pixel Wave</h6>
        </div>
      </footer>
    </main>
  );
}

export default App;


