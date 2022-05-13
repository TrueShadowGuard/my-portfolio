import classes from "./SnakeGame.module.css";
import {GAME_STATES} from "./SnakeGame";

export function startGame($gameContainer, endGame, setApplesLeft, applesLeft) {
    const {width, height} = $gameContainer.getBoundingClientRect();
    const CELL_SIZE = 8;
    const MAX_X = Math.floor(width / CELL_SIZE) - 1;
    const MAX_Y = Math.floor(height / CELL_SIZE) - 1;
    const DIRECTIONS = {TOP: {dx: 0, dy: -1}, BOTTOM: {dx: 0, dy: 1}, LEFT: {dx: -1, dy: 0}, RIGHT: {dx: 1, dy: 0}};

    const $game = $gameContainer.querySelector("." + classes.game);
    $game.innerHTML = "";
    $game.style.cssText = `--cell-size: ${CELL_SIZE}px`;
    let gameInfo = null;

    let [snakeCells, direction] = createSnakeCells();
    const $snake = document.createElement("div");
    $snake.classList.add("snake")
    $game.append($snake);

    let $apple = document.createElement("div");
    $apple.classList.add(classes.apple);
    $game.append($apple);
    setRandomPositionToApple();

    const gameLoop = createLoop();
    window.addEventListener("keydown", onKeyDown);

    return {gameLoop}

    function update() {
        $snake.innerHTML = "";
        renderSnake(snakeCells);
        renderApple($apple);

        const headCell = snakeCells[snakeCells.length - 1];

        const isHeadInsideApple = defineIsHeadInsideApple(headCell, $apple);
        if(isHeadInsideApple) {
            const newCell = {...headCell};
            newCell.x += direction.dx;
            newCell.y += direction.dy;
            snakeCells.push(newCell);
            setRandomPositionToApple();
            applesLeft--;
            setApplesLeft(applesLeft);
            if(applesLeft <= 0) return _endGame({result: GAME_STATES.WIN});
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
            setIsGameOn: (value) => isGameOn = value,
            _endGame
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
            $snake.append($snakeCell);
        }
    }
    
    function renderApple($apple) {
        $apple.style.left = $apple.dataset.x * CELL_SIZE + "px";
        $apple.style.top = $apple.dataset.y * CELL_SIZE + "px";
    }

    function setRandomPositionToApple() {
        const x = Math.ceil(Math.random() * (MAX_X - 1));
        const y = Math.ceil(Math.random() * (MAX_Y - 1));
        $apple.dataset.x = x;
        $apple.dataset.y = y;
    }

    function defineIsHeadInsideApple(head, $apple) {
        const dx = head.x - $apple.dataset.x;
        const dy = head.y - $apple.dataset.y;
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
        window.removeEventListener("keydown", onKeyDown);
    }

    function createSnakeCells() {
        const startX = Math.floor(Math.random() * MAX_X);
        const startY = Math.floor(Math.random() * MAX_Y);
        const snakeCells = [];
        const direction = Object.values(DIRECTIONS)[Math.floor(Math.random() * 4)];
        snakeCells.push({x: startX, y: startY});
        for(let i = 0; i < 3; i++) {
            const head = snakeCells[snakeCells.length - 1];
            snakeCells.push({x: head.x + direction.dx, y: head.y + direction.dy});
        }
        return [snakeCells, direction];
    }

    function onKeyDown(e) {
        if(e.code.startsWith("Arrow")) e.preventDefault();

        switch (e.code) {
            case "KeyW":
            case "ArrowUp":
                if(direction === DIRECTIONS.BOTTOM) break;
                direction = DIRECTIONS.TOP;
                break;
            case "KeyS":
            case "ArrowDown":
                if(direction === DIRECTIONS.TOP) break;
                direction = DIRECTIONS.BOTTOM;
                break;
            case "KeyA":
            case "ArrowLeft":
                if(direction === DIRECTIONS.RIGHT) break;
                direction = DIRECTIONS.LEFT;
                break;
            case "KeyD":
            case "ArrowRight":
                if(direction === DIRECTIONS.LEFT) break;
                direction = DIRECTIONS.RIGHT;
                break;
        }
    }
}