import {Cell} from "./Cell.js";

export class Sea {

  rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  cells = []
  ships = []

  constructor() {
    this.init()
  }

  init() {
    this.rows.map(row => {
      this.cols.map(col => {
        this.cells.push(new Cell(col,row, "🔥"))
      })
    })
  }

  vue(){
    return {
      props:['cols','rows','cells'],
      template: `
        <table border="1px">
    <thead>
        <tr>
            <td></td>
            <th v-for="col in cols">{{col}}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="row of rows">
          <th>{{row}}</th>
          <td v-for="col of cols">{{cells.find(c=>c.y === row && c.x === col).state}}</td>
        </tr>
    </tbody>
</table>
      
      `
    }
  }
}
