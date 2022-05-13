import classes from "./SnakeGame.module.css";
import {GAME_STATES} from "./SnakeGame";

export function startGame($gameContainer, endGame) {
    const {width, height} = $gameContainer.getBoundingClientRect();
    const $game = $gameContainer.querySelector("." + classes.game);
    const CELL_SIZE = 8;
    let gameInfo;
    const MAX_X = Math.floor(width / CELL_SIZE) - 1;
    const MAX_Y = Math.floor(height / CELL_SIZE) - 1;
    $game.style.cssText = `--cell-size: ${CELL_SIZE}px`;

    const DIRECTIONS = {TOP: {dx: 0, dy: -1}, BOTTOM: {dx: 0, dy: 1}, LEFT: {dx: -1, dy: 0}, RIGHT: {dx: 1, dy: 0}};

    const onKeyDown = e => {
        switch (e.code) {
            case "KeyW":
                if(direction === DIRECTIONS.BOTTOM) break;
                direction = DIRECTIONS.TOP;
                break;
            case "KeyS":
                if(direction === DIRECTIONS.TOP) break;
                direction = DIRECTIONS.BOTTOM;
                break;
            case "KeyA":
                if(direction === DIRECTIONS.RIGHT) break;
                direction = DIRECTIONS.LEFT;
                break;
            case "KeyD":
                if(direction === DIRECTIONS.LEFT) break;
                direction = DIRECTIONS.RIGHT;
                break;
        }
    };
    window.addEventListener("keydown", onKeyDown);

    let direction = DIRECTIONS.BOTTOM;
    let snakeCells = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}];
    let $apple = document.createElement("div");
    $apple.classList.add(classes.apple);
    setRandomPositionToApple();

    const gameLoop = createLoop();

    return {gameLoop: gameLoop}

    function update() {
        $game.innerHTML = "";
        renderSnake(snakeCells);
        renderApple($apple);

        const headCell = snakeCells[snakeCells.length - 1];

        const isHeadInsideApple = defineIsHeadInsideApple(headCell, $apple);
        if(isHeadInsideApple) {
            const newCell = {...headCell};
            newCell.x += direction.dx;
            newCell.y += direction.dy;
            snakeCells.push(newCell);
            if(snakeCells.length > 4) return _endGame({result: GAME_STATES.WIN});
            $apple = setRandomPositionToApple();
        } else {
            const tailCell = snakeCells.shift();
            tailCell.x = headCell.x + direction.dx;
            tailCell.y = headCell.y + direction.dy;
            snakeCells.push(tailCell);
        }

        const isSnakeCollide = defineIsSnakeCollide(snakeCells);
        if(isSnakeCollide) return _endGame({result: GAME_STATES.LOSE});
    }

    function createLoop() {
        let isGameOn = true;

        function tick() {
            if(!isGameOn) {
                endGame(gameInfo);
                return;
            }
            update();
            setTimeout(tick, 35)
        }

        tick();

        return {
            setIsGameOn: (value) => isGameOn = value
        }
    }

    function renderSnake(snakeCells) {
        for (let snakeCell of snakeCells) {
            if(snakeCell.x > MAX_X) snakeCell.x = 0;
            if(snakeCell.x < 0) snakeCell.x = MAX_X;
            if(snakeCell.y > MAX_Y) snakeCell.y = 0;
            if(snakeCell.y < 0) snakeCell.y = MAX_Y;

            const $snakeCell = document.createElement("div");
            $snakeCell.classList.add(classes.snakeCell);
            $snakeCell.style.left = snakeCell.x * CELL_SIZE + "px";
            $snakeCell.style.top = snakeCell.y * CELL_SIZE + "px";
            $game.append($snakeCell);
        }
    }
    
    function renderApple($apple) {
        $apple.style.left = $apple.x * CELL_SIZE + "px";
        $apple.style.top = $apple.y * CELL_SIZE + "px";
    }

    function setRandomPositionToApple() {
        const x = Math.ceil(Math.random() * (MAX_X - 1));
        const y = Math.ceil(Math.random() * (MAX_Y - 1));
        $apple.dataset.x = x;
        $apple.dataset.y = y;
    }

    function defineIsHeadInsideApple(head, apple) {
        const dx = head.x - apple.x;
        const dy = head.y - apple.y;
        return dx <= 1 && dx >= 0 && dy <= 1 && dy >= 0;
    }

    function defineIsSnakeCollide(snakeCells) {
        const headCell = snakeCells[snakeCells.length - 1];

        for(let snakeCell of snakeCells.slice(0, -1)) {
            if(headCell.x === snakeCell.x && headCell.y === snakeCell.y) return true;
        }

        return false;
    }

    function _endGame(_gameInfo) {
        gameInfo = _gameInfo;
        gameLoop.setIsGameOn(false);
    }
}