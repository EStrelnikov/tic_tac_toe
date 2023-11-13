import { WINNER_VARIANTS } from "./costants.js";

export function checkWinner(cells) {
  const variantsUser1 = cells
    .filter((cell) => cell.textContent === "X")
    .reduce((acc, item) => (acc += item.dataset.id), "");
  const variantsUser2 = cells
    .filter((cell) => cell.textContent === "O")
    .reduce((acc, item) => (acc += item.dataset.id), "");

  const winnnerUser1 = WINNER_VARIANTS.filter((variant) =>
    variant.split("").every((item) => variantsUser1.includes(item))
  )[0];

  const winnnerUser2 = WINNER_VARIANTS.filter((variant) =>
    variant.split("").every((item) => variantsUser2.includes(item))
  )[0];

  if (winnnerUser1) {
    winnnerUser1.split("").forEach((item) => {
      cells.forEach((cell) => {
        if (cell.dataset.id === item) {
          cell.classList.add("winner");
        }
      });
    });

    return 1;
  }

  if (winnnerUser2) {
    winnnerUser2.split("").forEach((item) => {
      cells.forEach((cell) => {
        if (cell.dataset.id === item) {
          cell.classList.add("winner");
        }
      });
    });

    return 2;
  }
}

export function checkDraw(cells) {
  return cells.every((cell) => cell.textContent !== "");
}

export function fillBlankCells(cells) {
  cells.forEach((cell) => {
    if (cell.textContent === "") {
      cell.textContent = "*";
    }
  });
}
