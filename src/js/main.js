import { Info } from "./info.js";
import { GameArea } from "./gameArea.js";
import * as Middleware from "./middleware.js";

export class App {
  #wrapp;
  #info;
  #area;
  #cells;
  #stepUser1;
  #reset;

  constructor() {
    this.#wrapp = document.createElement("div");
    this.#info = new Info();
    this.#area = new GameArea();
    this.#cells = this.#area.run().querySelectorAll(".area-item");
    this.#stepUser1 = true;
    this.#reset = document.createElement("button");
  }

  #wrappConfigHandler() {
    this.#wrapp.classList.add("wrapp");
    this.#wrapp.append(this.#info.run(), this.#area.run());
  }

  #changeStep() {
    this.#stepUser1 = !this.#stepUser1;
  }

  #newGame() {
    this.#info.winnerUserText = "";
    this.#info.valueNextMove = this.#stepUser1 ? true : false;
    this.#info.checkNextMove();
    this.#area.run().remove();
    this.#area = new GameArea();
    this.#cells = this.#area.run().querySelectorAll(".area-item");
    this.#wrappConfigHandler();
    this.#checkGame();
  }

  #resetGame() {
    this.#info.winnerUserText = "";
    this.#info.valueNextMove = this.#stepUser1 ? true : false;
    this.#info.winnerUserText = "";
    this.#info.resetCounts();
    this.#area.run().remove();
    this.#area = new GameArea();
    this.#cells = this.#area.run().querySelectorAll(".area-item");
    this.#wrappConfigHandler();
    this.#checkGame();
  }

  #gameDraw() {
    this.#info.winnerUserText = "Ничья";
    setTimeout(() => this.#newGame(), 1500);
  }

  #checkGameResult(check) {
    if (check === 1) {
      this.#info.setCountValue1 = this.#info.getCountValueUser1 + 1;
      this.#info.winnerUserText = "Победил Игрок 1 (х)";
    }

    if (check === 2) {
      this.#info.setCountValue2 = this.#info.getCountValueUser2 + 1;
      this.#info.winnerUserText = "Победил Игрок 2 (о)";
    }

    setTimeout(() => this.#newGame(), 1500);
  }

  #checkGame() {
    this.#cells.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        console.log(this.#stepUser1);
        if (e.target.textContent === "") {
          this.#info.valueNextMove = this.#stepUser1 ? false : true;
          this.#info.checkNextMove();
          e.target.textContent = this.#stepUser1 ? "X" : "O";

          const check = Middleware.checkWinner([...this.#cells]);
          if (check) {
            Middleware.fillBlankCells([...this.#cells]);
            return this.#checkGameResult(check);
          }
          const checkDraw = Middleware.checkDraw([...this.#cells]);
          if (checkDraw) {
            Middleware.fillBlankCells([...this.#cells]);
            return this.#gameDraw();
          }

          this.#changeStep();
        }
      });
    });
  }

  run() {
    this.#wrappConfigHandler();
    this.#reset.textContent = "Сброс игры";
    this.#reset.addEventListener("click", () => this.#resetGame());
    document.body.append(this.#wrapp);
    this.#wrapp.after(this.#reset);
    this.#checkGame();
  }
}

const app = new App();
app.run();
