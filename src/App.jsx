import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: "2rem" }}
        >
          Learn React
        </a>
        <ImageComponent
          src="https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3R8ZW58MHx8MHx8fDA%3D"
          alt="img"
        />
        <ButtonComponent id="button1" text="Aggiungi Una Nuova Pagina" />
        <ButtonComponent id="button2" text="Elimina Una Pagina" />
      </header>
    </div>
  );
}

export default App;
