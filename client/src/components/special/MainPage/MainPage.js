import React from 'react';
import classes from "./MainPage.module.css";
import classNames from "classnames";
import SnakeGame from "../SnakeGame/SnakeGame.js";
import {useWindowSize} from "usehooks-ts";
import {isMobile} from "react-device-detect";

const MIN_WIDTH_FOR_GAME = 520;

const MainPage = (props) => {

  const {width} = useWindowSize();
  const isGameShown = width > MIN_WIDTH_FOR_GAME && !isMobile;


  return (
    <div className={classNames(classes.root, props.className)}>
      <div className={classes.text}>
        <p className={classes.hi}>Hi all. I am</p>
        <h1 className={classes.name}>Vadim Popkov</h1>
        <p className={classes.who}>> Front-end developer</p>
        <p className={classNames(classes.code, "code")}>
          {isGameShown &&
            <>
              <span className="comment">// complete the game to continue</span><br/>
              <span className="comment">// you can also see it on my Github page</span><br/>
            </>
          }
          <span className="blue">const </span>
          <span className="cyan">githubLink </span>
          <span className="white"> = (</span> <br/>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<a className="string" href="https://github.com/TrueShadowGuard/my-portfolio">“https://github.com/TrueShadowGuard/my-portfolio”</a></span>
          <br/>
          <span className="white">)</span>
          <span className="orange">;</span>
        </p>
      </div>
      {isGameShown && <SnakeGame/>}
    </div>
  );
};

export default MainPage;