import React from 'react';
import classes from "./MainPage.module.css";
import classNames from "classnames";
import SnakeGame from "../SnakeGame/SnakeGame.js";

const MainPage = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={classes.text}>
                <p className={classes.hi}>Hi all. I am</p>
                <h1 className={classes.name}>Vadim Popkov</h1>
                <p className={classes.who}>> Front-end developer</p>
                <p className={classNames(classes.code, "code")}>
                    <span className="comment">// complete the game to continue</span><br/>
                    <span className="comment">// you can also see it on my Github page</span><br/>
                    <span className="blue">const </span>
                    <span className="cyan">githubLink </span>
                    <span className="white"> = (</span> <br/>
                    <span className="string">&nbsp;&nbsp;&nbsp;&nbsp;“https://github.com/TrueShadowGuard/my-portfolio”</span> <br/>
                    <span className="white">)</span>
                    <span className="orange">;</span>
                </p>
            </div>
            <SnakeGame />
        </div>
    );
};

export default MainPage;