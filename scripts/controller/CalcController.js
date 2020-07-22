class CalcController {
  constructor() {
    //atributo ao invés de variável
    //permite usar em todo lugar dentro da classe
    //encapsulamento, geralmente public, protected, private
    this._displayCalc = "0"; // underline por convenção como private
    this._currentDate; // toda vez que ver o underline, não usar fora da classe

    this.initialize();
  }

  //
  initialize() {
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#date");
    let timeEl = document.querySelector("#hour");

    displayCalcEl.innerHTML = "4567";
    dateEl.innerHTML = "4567";
    timeEl.innerHTML = "4567";
  }

  //métodos getters e setters

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(value) {
    this._displayCalc = value;
  }

  // getter and setter dataAtual
  get dataAtual() {
    return this._currentDate;
  }

  set dataAtual(value) {
    this._currentDate = value;
  }
}
