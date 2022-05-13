import React, {useEffect, useRef, useState} from 'react';
import classes from "./SnakeGame.module.css";
import classNames from "classnames";
import {startGame} from "./startGame.js";

export const GAME_STATES = {
    WIN: "win",
    LOSE: "lose",
    DID_NOT_STARTED: "did not started"
}

const SnakeGame = (props) => {
    const gameContainerRef = useRef();
    const [gameState, setGameState] = useState(GAME_STATES.DID_NOT_STARTED);

    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={classes.gameContainer} ref={gameContainerRef}>
                <div className={classes.game}></div>
                {gameState === GAME_STATES.DID_NOT_STARTED && <button className={classes.startGameButton} onClick={onStartGameClick}>start-game</button>}
                {gameState === GAME_STATES.WIN && <WinScreen restartGame={onStartGameClick}/>}
                {gameState === GAME_STATES.LOSE && <LoseScreen restartGame={onStartGameClick}/>}
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
        startGame(gameContainerRef.current, endGame);
        setGameState(true);
    }

    function endGame({result}) {
        setGameState(result);
    }
};

const GameInfo = () => (
    <div className={classes.gameInfo}>
        <div className={classes.controls}>
            <div className={classes.code}>
                // use keyboard <br/>
                // arrows to play <br/>
                // reach length 40 <br/>
                // to win
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

const LoseScreen = ({restartGame}) => (
    <div className={classes.gameResult}>
        <p className={classes.gameResultText}>GAME OVER!</p>
        <button className={classes.restartButton} onClick={restartGame}>start-again</button>
    </div>
);

const WinScreen = ({restartGame}) => (
    <div className={classes.gameResult}>
        <p className={classes.gameResultText}>WELL DONE!</p>
        <button className={classes.restartButton} onClick={restartGame}>play-again</button>
    </div>
);



export default SnakeGame;