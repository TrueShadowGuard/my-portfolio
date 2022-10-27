import React from "react"
import { Routes, Route } from "react-router-dom"
import MainPage from "../MainPage/MainPage.js"
import AboutPage from "../AboutPage/AboutPage.js"
import ProjectsPage from "../ProjectsPage/ProjectsPage.js"
import ContactPage from "../ContactPage/ContactPage"

const Main = (props) => {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage/>}/>
      <Route path={"/about-me"} element={<AboutPage/>}/>
      <Route path={"/projects"} element={<ProjectsPage/>}/>
      <Route path={"/contact-me"} element={<ContactPage/>}/>
    </Routes>
  )
}

export default Main
