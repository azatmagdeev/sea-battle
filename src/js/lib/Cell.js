export class Cell {

  /**
   * @param x
   * @param y
   * @param state
   */
  constructor(x,y, state = "🌊" ) {
    this.x = x
    this.y = y
    this.state = state
  }

  render(){
    return `
      <td>${this.state}</td>
    `
  }

}
