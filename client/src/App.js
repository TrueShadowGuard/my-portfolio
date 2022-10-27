import Header from "./components/special/Header/Header.js";
import Main from "./components/special/Main/Main.js";
import Footer from "./components/special/Footer/Footer.js";

import "./main.css";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    return (
        <BrowserRouter>
            <div id="window">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
});

export default App;
