export class Info {
  #info;
  #user1;
  #user2;
  #countUser1;
  #countUser2;
  #countValueUser1;
  #countValueUser2;
  #winner;

  constructor() {
    this.nextMove = document.createElement("p");
    this.valueNextMove = true;
    this.#info = document.createElement("div");
    this.#user1 = document.createElement("p");
    this.#user2 = document.createElement("p");
    this.#countUser1 = document.createElement("span");
    this.#countUser2 = document.createElement("span");
    this.#countValueUser1 = 0;
    this.#countValueUser2 = 0;
    this.#winner = document.createElement("p");
  }

  set setCountValue1(value) {
    this.#countValueUser1 = value;
    this.#updateCountUser(1);
  }

  set setCountValue2(value) {
    this.#countValueUser2 = value;
    this.#updateCountUser(2);
  }

  set winnerUserText(value) {
    this.#winner.textContent = value;
  }

  get getCountValueUser1() {
    return this.#countValueUser1;
  }

  get getCountValueUser2() {
    return this.#countValueUser2;
  }

  #updateCountUser(user) {
    if (user === 1) {
      this.#countUser1.textContent = this.#countValueUser1;
    } else if (user === 2) {
      this.#countUser2.textContent = this.#countValueUser2;
    }
  }

  resetCounts() {
    this.#countValueUser1 = 0;
    this.#countValueUser2 = 0;
  }

  #infoConfigHandler() {
    this.#info.classList.add("info");

    this.#user1.classList.add("user");
    this.#user1.textContent = "Игрок 1 (х): ";

    this.#countUser1.classList.add("count");
    this.#updateCountUser(1);
    this.#user1.append(this.#countUser1);

    this.#user2.classList.add("user");
    this.#user2.textContent = "Игрок 2 (о): ";

    this.#countUser2.classList.add("count");
    this.#updateCountUser(2);
    this.#user2.append(this.#countUser2);

    this.#winner.classList.add("user");
    this.#winner.classList.add("win-user");

    this.nextMove.classList.add("nextMove");
    this.nextMove.textContent = `Ход: ${
      this.valueNextMove ? "Игрок 1 (х)" : "Игрок 2 (о)"
    }`;

    this.#info.append(this.#user1, this.#user2, this.nextMove, this.#winner);
  }

  checkNextMove() {
    this.nextMove.textContent = `Ход: ${
      this.valueNextMove ? "Игрок 1 (х)" : "Игрок 2 (о)"
    }`;
  }

  run() {
    this.#infoConfigHandler();
    return this.#info;
  }
}
