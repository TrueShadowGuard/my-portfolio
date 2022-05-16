import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

import './main.css';
import {BrowserRouter} from "react-router-dom";
import {makeAutoObservable} from "mobx";
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
