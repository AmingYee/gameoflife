import Model from './model.js';
import View from './view.js';

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.generationCount = 0;
        this.clearBtn = document.getElementById('clear-btn');
        this.randomizeBtn = document.getElementById('randomize-btn');
    }

    initialize() {
        this.clearBtn.addEventListener('click', () => this.clearGrid());
        this.randomizeBtn.addEventListener('click', () => this.randomize());
        this.model.initializeGrid();
        this.view.renderGrid(this.model.grid, this.generationCount);
        this.startGame();
    }

    clearGrid() {
        this.model.initializeGrid();
        this.generationCount = 0;
        this.view.renderGrid(this.model.grid, this.generationCount);
    }

    randomize() {
        const spawnChance = 0.05;
        for (let i = 0; i < this.model.numRows; i++) {
            for (let ii = 0; ii < this.model.numCols; ii++) {
                if (this.model.grid[i][ii] === 0) {
                    this.model.grid[i][ii] = Math.random() < spawnChance ? 1 : 0;
                }
            }
        }
        this.view.renderGrid(this.model.grid, this.generationCount);
    }

    startGame() {
        setInterval(() => {
            this.model.updateGrid();
            this.generationCount++;
            this.view.renderGrid(this.model.grid, this.generationCount);
        }, 250);
    }
}

const controller = new Controller();
controller.initialize();