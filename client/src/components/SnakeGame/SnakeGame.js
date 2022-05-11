import React, {useEffect, useRef, useState} from 'react';
import classes from "./SnakeGame.module.css";
import classNames from "classnames";
import {startGame} from "./startGame.js";

const SnakeGame = (props) => {
    const gameContainerRef = useRef();
    const [isGameStarted, setIsGameStarted] = useState(false);

    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={classes.gameContainer} ref={gameContainerRef}>
                <div className={classes.game}></div>
                {!isGameStarted && <button className={classes.startGameButton} onClick={onStartGameClick}>start-game</button>}
            </div>
            <GameInfo/>
            <div>
                <div className={classes.bolt}>x</div>
                <div className={classes.bolt}>x</div>
                <div className={classes.bolt}>x</div>
                <div className={classes.bolt}>x</div>
            </div>
        </div>
    );

    function onStartGameClick() {
        startGame(gameContainerRef.current);
        setIsGameStarted(true);
    }
};

const GameInfo = () => (
    <div className={classes.gameInfo}>
        <div className={classes.controls}>
            <div className={classes.code}>
                // use keyboard <br/>
                // arrows to play
            </div>
            <div className={classes.arrows}>
                <div className={classNames(classes.arrow, classes.top)}><span className={classes.triangle}>&#9650;</span></div>
                <div className="width100"></div>
                <div className={classNames(classes.arrow, classes.left)}><span className={classes.triangle}>&#9650;</span></div>
                <div className={classNames(classes.arrow, classes.bottom)}><span className={classes.triangle}>&#9650;</span></div>
                <div className={classNames(classes.arrow, classes.right)}><span className={classes.triangle}>&#9650;</span></div>
            </div>
        </div>
    </div>
);


export default SnakeGame;