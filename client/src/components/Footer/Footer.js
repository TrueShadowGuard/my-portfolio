import React from 'react';
import classes from "./Footer.module.css";
import classNames from "classnames";
import vk from "../../images/vk.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

const Footer = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <p className={classes.findMe}>find me in:</p>
            <div className={classes.link}>
                <a href="https://vk.com/vadimpopkov2003" target={"_blank"}>
                    <img src={vk} alt="vk" width={25}/>
                </a>
            </div>
            <div className={classes.link}>
                <a href="https://linkedin.com/in/vadim-popkov-8a6749207/" target={"_blank"}>
                    <img src={linkedin} alt="linkedin" width={25}/>
                </a>
            </div>
            <div className={classNames(classes.link, classes.githubLink)}>
                <a href="https://github.com/TrueShadowGuard" target={"_blank"}>
                    @TrueShadowGuard
                    <img style={{marginLeft: 7}} src={github} alt="github" width={20}/>
                </a>
            </div>
        </div>
    );
};

export default Footer;