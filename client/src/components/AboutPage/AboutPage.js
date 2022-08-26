import React from "react"

import classes from "./AboutPage.module.css"
import utils from "../../utils.module.css"
import classNames from "classnames"

import Categories from "./Categories"
import CurrentFile from "./CurrentFile"

const AboutPage = (props) => {
  return (
    <div className={classNames(classes.root, props.className)}>
      <div className={utils.twoColumns}>
        <Categories/>
        <CurrentFile/>
      </div>
    </div>
  )
}

export default AboutPage
