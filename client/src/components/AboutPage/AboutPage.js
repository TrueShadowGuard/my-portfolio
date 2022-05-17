import React from 'react';
import classes from "./AboutPage.module.css";
import classNames from "classnames";
import TwoColumns from "../TwoColumns/TwoColumns";
import Details from "../Details/Details";
import DetailsHeader from "../Details/DetailsHeader";

import mail from "../../images/mail-icon.svg";
import phone from "../../images/phone-icon.svg";

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

function Categories() {
    return (
        <div className={classes.firstColumn}>
            <Details summary={<DetailsHeader header={"personal-info"}/>} defaultOpen>
                personal info
            </Details>
            <Details summary={<DetailsHeader header={"contacts"}/>}>
                <Contacts />
            </Details>
        </div>
    );
}

const AboutPage = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <TwoColumns>
                <Categories/>
            </TwoColumns>
        </div>
    );
};

export default AboutPage;