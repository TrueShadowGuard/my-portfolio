import React from "react";

import classes from "./AboutPage.module.css";
import utils from "../../utils.module.css";
import classNames from "classnames";

import Details from "../Details/Details";
import DetailsHeader from "../Details/DetailsHeader";

import mail from "../../images/mail-icon.svg";
import phone from "../../images/phone-icon.svg";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const AboutPage = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={utils.twoColumns}>
                <Categories/>
            </div>
        </div>
    );
};

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

function Contacts() {
    return (
        <div className={classes.contacts}>
            <ul>
                <li>
                    <img className={classes.contactIcon} src={mail} alt="mail"/>
                    <a href="mailto:playvarian@gmail.com">playvarian@gmail.com</a>
                </li>
                <li>
                    <img className={classes.contactIcon} src={phone} alt="phone"/>
                    <a href="tel:375333930022">+375-33-393-00-22</a>
                </li>
            </ul>
        </div>
    )
}

export default AboutPage;
