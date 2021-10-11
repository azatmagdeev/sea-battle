import {Cell} from "./Cell.js";

export class Sea {

    rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    cells = []
    ships = []

    constructor(isEnemy) {
        this.init(isEnemy)
    }

    init(isEnemy) {
        this.rows.map(row => {
            this.cols.map(col => {
                this.cells.push(new Cell(col, row))
            })
        })
    }

    cell(col, row) {
        return this.cells.find(cell => cell.x === col && cell.y === row)
    }

    render() {
        return `
        <table style="border: 1px solid grey">
          <thead>
              <tr>
                  <td></td>
                  ${this.cols.map(col => `<th>${col}</th>`)}
              </tr>
          </thead>
          <tbody>
            ${this.rows.map(row => `
              <tr>
                <th>${row}</th>
                ${this.cols.map(col => `
                  ${this.cell(col, row).render()}`)}
              </tr>
            `)}
          </tbody>
        </table>
      
      `

    }
}


//🔥