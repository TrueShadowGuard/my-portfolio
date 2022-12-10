import Header from "./components/special/Header/Header.js"
import Main from "./components/special/Main/Main.js"
import Footer from "./components/special/Footer/Footer.js"

import "./main.css";
import {HashRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
    <HashRouter>
      <div id="window">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </HashRouter>
  );
});

export default App;
