export class GameArea {
    #area
    #items

    constructor() {
        this.#area = document.createElement('div')
        this.#items = this.#createAreaItems()
    }

    #createAreaItems() {
        const items = []
        for (let i = 1; i <= 9; i++) {
            const item = document.createElement('div')
            item.classList.add('area-item')
            item.dataset.id = i
            items.push(item)
        }

        return items
    }

    #areaConfigHandler() {
        this.#area.classList.add('game-area')
        this.#items.forEach((item) => {
            this.#area.append(item)
        })
    }

    run() {
        this.#areaConfigHandler()
        return this.#area
    }
}
