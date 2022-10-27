import React from "react";
import classes from "./Footer.module.css";
import classNames from "classnames";
import vk from "../../../assets/vk.svg";
import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";

const Footer = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <p className={classes.findMe}>find me in:</p>
            <div className={classes.link}>
                <a href="https://vk.com/vadimpopkov2003" target={"_blank"} rel="noreferrer">
                    <img src={vk} alt="vk" width={25}/>
                </a>
            </div>
            <div className={classes.link}>
                <a href="client/src/components/special/Footer/Footer" target={"_blank"} rel="noreferrer">
                    <img src={linkedin} alt="linkedin" width={25}/>
                </a>
            </div>
            <div className={classNames(classes.link, classes.githubLink)}>
                <a href="https://github.com/TrueShadowGuard" target={"_blank"} rel="noreferrer">
                    @TrueShadowGuard
                    <img style={{marginLeft: 7}} src={github} alt="github" width={20}/>
                </a>
            </div>
        </div>
    );
};

export default Footer;