import classes from "./SnakeGame.module.css";

export function startGame($gameContainer) {
    const {width, height} = $gameContainer.getBoundingClientRect();
    const $game = $gameContainer.querySelector("." + classes.game);
    const CELL_SIZE = 8;
    const MAX_X = width / CELL_SIZE - 1;
    const MAX_Y = height / CELL_SIZE - 1;
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
    let apple = createApple();
    console.log(apple)

    const gameTimerId = setInterval(tick, 50);

    return {gameTimerId}

    function tick() {
        $game.innerHTML = "";
        const tailCell = snakeCells.shift();
        const headCell = snakeCells[snakeCells.length - 1];

        tailCell.x = headCell.x + direction.dx;
        tailCell.y = headCell.y + direction.dy;
        snakeCells.push(tailCell);

        renderSnake(snakeCells);
        renderApple(apple);
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
    
    function renderApple(apple) {
        const $apple = document.createElement("div");
        $apple.classList.add(classes.apple);
        $apple.style.left = apple.x * CELL_SIZE + "px";
        $apple.style.top = apple.y * CELL_SIZE + "px";
        $game.append($apple);
    }

    function createApple() {
        const x = Math.ceil(Math.random() * (MAX_X - 1));
        const y = Math.ceil(Math.random() * (MAX_Y - 1));
        return {x, y};
    }
}