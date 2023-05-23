class View {
  constructor(game, el) {
    this.setupBoard(el);
    this.game = game;
    this.value = "X";
  }
  
  setupBoard(el) {
    const ul = document.createElement('ul');
    ul.classList.add("square-list");
    // const figure = document.querySelector('figure.ttt');
    el.appendChild(ul);
    // figure.appendChild(ul);

    for (let i = 0; i < 9; i++) {
      const li = document.createElement('li');
      li.setAttribute("data-pos", i);
      ul.appendChild(li);
      li.innerText = "N"
    }

    ul.addEventListener("click", event => {
      this.handleClick(event.target);
      if (this.game.isOver()) {
        this.handleGameOver()
      }
    })
  }
  
  handleClick(e) {
    const x = Math.floor(e.getAttribute("data-pos")/3);
    const y = e.getAttribute("data-pos") % 3;
    this.game.playMove([x, y]);
    e.innerText = this.value;
    this.value = (this.value === "X") ? "O" : "X";
    e.classList.add("selected");
  }

  makeMove(square) {  
  }
  
  handleGameOver() {
    this.value = (this.value === "X") ? "O" : "X";
    const winningSquares = document.querySelectorAll(".selected");
    for (let i = 0; i < winningSquares.length; i++) { 
      const element = winningSquares[i];
      if (element.innerText === this.value) {
        element.classList.remove("selected");
        element.classList.add("completed");
      } else {
        element.classList.remove("selected");
        element.classList.add("wrong");
      }
    }
  }
}

export default View;
