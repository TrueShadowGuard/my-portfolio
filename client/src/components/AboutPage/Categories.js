import React from "react"
import classes from "./AboutPage.module.css"

import Details from "../Details/Details"
import DetailsHeader from "../Details/DetailsHeader"
import PersonalInfo from "./PersonalInfo/PersonalInfo"
import Contacts from "./Contacts"

function Categories() {
  return (
    <div className={classes.firstColumn}>
      <Details summary={<DetailsHeader header={"personal-info"}/>} defaultOpen>
        <PersonalInfo />
      </Details>
      <Details summary={<DetailsHeader header={"contacts"}/>}>
        <Contacts />
      </Details>
    </div>
  );
}

export default Categories;
