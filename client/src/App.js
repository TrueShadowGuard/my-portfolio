import Header from "./components/Header/Header.js";
import ControlPanel from "./components/ControlPanel/ControlPanel.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

import './main.css';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div id="window">
                <Header/>
                <ControlPanel/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
