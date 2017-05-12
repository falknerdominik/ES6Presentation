function startGame() {
  this.lives = 0;
  this.addLives = () => {
    this.oneUp = setTimeout(() => {
      console.log(++this.lives);
    });
  }
}

let game = new startGame();
