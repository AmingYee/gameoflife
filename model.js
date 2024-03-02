class Model {
    constructor() {
        this.grid = [];
        this.numRows = 50;
        this.numCols = 50;
    }

    initializeGrid() {
        this.grid = [];
        for (let i = 0; i < this.numRows; i++) {
            this.grid[i] = new Array(this.numCols).fill(0);
        }
    }

    countNeighbors(row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let ii = -1; ii <= 1; ii++) {
                if (i === 0 && ii === 0) continue;
                const neighborRow = (row + i + this.numRows) % this.numRows;
                const neighborCol = (col + ii + this.numCols) % this.numCols;
                count += this.grid[neighborRow][neighborCol];
            }
        }
        return count;
    }

    updateGrid() {
        const newGrid = [];
        for (let i = 0; i < this.numRows; i++) {
            newGrid[i] = [];
            for (let ii = 0; ii < this.numCols; ii++) {
                const neighbors = this.countNeighbors(i, ii);
                if (this.grid[i][ii] === 1) {
                    newGrid[i][ii] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
                } else {
                    newGrid[i][ii] = (neighbors === 3) ? 1 : 0;
                }
            }
        }
        this.grid = newGrid;
    }
}

export default Model;