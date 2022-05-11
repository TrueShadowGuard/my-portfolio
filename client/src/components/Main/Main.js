import React from 'react';
import classes from "./Main.module.css";
import classNames from "classnames";
import {Routes, Route} from "react-router-dom"
import MainPage from "../MainPage/MainPage.js";
import AboutPage from "../AboutPage/AboutPage.js";
import ProjectsPage from "../ProjectsPage/ProjectsPage.js";

const Main = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/about-me"} element={<AboutPage/>}/>
                <Route path={"/projects"} element={<ProjectsPage/>}/>
            </Routes>
        </div>
    );
};

export default Main;