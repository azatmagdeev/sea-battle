import {Sea} from "./lib/Sea.js";

class App{
  constructor(selector) {
    this.mySea = new Sea()
    this.enemySea = new Sea()
    this.root = document.querySelector(selector)
  }

  init(){
    this.root.innerHTML = `
      ${this.mySea.render()}
    
    `

  }
}

(new App('#app')).init()

