class View {
    renderGrid(grid, generationCount) {
        const gameContainer = document.getElementById('game-container');
        gameContainer.innerHTML = '';
        for (let i = 0; i < grid.length; i++) {
            for (let ii = 0; ii < grid[i].length; ii++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.style.backgroundColor = grid[i][ii] === 1 ? 'black' : 'white';
                gameContainer.appendChild(cell);
            }
        }
        document.getElementById('generation-counter').textContent = generationCount;
    }
}

export default View