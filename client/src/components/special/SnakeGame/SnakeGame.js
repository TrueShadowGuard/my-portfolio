import React, {useEffect, useRef, useState} from "react";
import classes from "./SnakeGame.module.css";
import classNames from "classnames";
import {startGame} from "./startGame.js";

import bgBlurs from "../../../assets/Background Blurs.svg";

const APPLES_COUNT = 10;

export const GAME_STATES = {
    WIN: "win",
    LOSE: "lose",
    DID_NOT_STARTED: "did not started",
    STARTED: "started"
}

const SnakeGame = (props) => {
    const gameContainerRef = useRef();
    const gameInstanceRef = useRef();
    const [gameState, setGameState] = useState(GAME_STATES.DID_NOT_STARTED);
    const [applesLeft, setApplesLeft] = useState(APPLES_COUNT);

    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={classes.gameContainer} ref={gameContainerRef}>
                <div className={classes.game}></div>
                {gameState === GAME_STATES.DID_NOT_STARTED && <button className={classes.startGameButton} onClick={onStartGameClick}>start-game</button>}
                {gameState === GAME_STATES.WIN && <WinScreen restartGame={onStartGameClick}/>}
                {gameState === GAME_STATES.LOSE && <LoseScreen restartGame={onStartGameClick}/>}
            </div>
            <GameInfo applesLeft={applesLeft}/>
            <div className={classes.bolts}>
                <div className={classes.bolt}>x</div>
                <div className={classes.bolt}>x</div>
                <div className={classes.bolt}>x</div>
                <div className={classes.bolt}>x</div>
            </div>
            {gameState === GAME_STATES.STARTED &&
                <button className={classes.skipButton}
                        onClick={() => endGame({result: GAME_STATES.DID_NOT_STARTED})}
                >
                    skip
                </button>
            }
            <img className={classes.blurs} src={bgBlurs} alt="blur"/>
        </div>
    );

    function onStartGameClick() {
        gameInstanceRef.current = startGame(gameContainerRef.current, endGame, setApplesLeft, APPLES_COUNT);
        setApplesLeft(APPLES_COUNT);
        setGameState(GAME_STATES.STARTED);
    }

    function endGame({result}) {
        setGameState(result);
        gameInstanceRef.current.gameLoop._endGame({result: GAME_STATES.DID_NOT_STARTED});
    }
};

const GameInfo = ({applesLeft}) => (
    <div className={classes.gameInfo}>
        <div className={classes.controls}>
            <div className={classes.code}>
                // use keyboard <br/>
                // arrows to play <br/>
            </div>
            <div className={classes.arrows}>
                <div className={classNames(classes.arrow, classes.top)}><span className={classes.triangle}>&#9650;</span></div>
                <div className="width100"></div>
                <div className={classNames(classes.arrow, classes.left)}><span className={classes.triangle}>&#9650;</span></div>
                <div className={classNames(classes.arrow, classes.bottom)}><span className={classes.triangle}>&#9650;</span></div>
                <div className={classNames(classes.arrow, classes.right)}><span className={classes.triangle}>&#9650;</span></div>
            </div>
        </div>
        <div className={classNames("white", classes.foodLeft)}>
            // food left
        </div>
        <div className={classes.applesLeft}>
            {[...new Array(APPLES_COUNT)]
                .map((apple, i) => i + 1 <= applesLeft ?
                    <div className={classNames(classes.apple)} key={i}/> :
                    <div className={classNames(classes.apple, classes.transparent)} key={i}/>
                )}
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