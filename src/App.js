import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {" "}
          <Dictionary defaultSearchQuery="book" />
          <footer>
            This project was created by Aleksandra Andrejevic and it is
            completely{" "}
            <a href="https://github.com/A-Andrejevic/dictionary-project">
              open-sourced on GitHub.
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
