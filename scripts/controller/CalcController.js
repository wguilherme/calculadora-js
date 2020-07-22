class CalcController {
  constructor() {
    //atributo ao invés de variável
    //permite usar em todo lugar dentro da classe
    //encapsulamento, geralmente public, protected, private
    this._displayCalc = "0"; // underline por convenção como private
    this._dataAtual; // toda vez que ver o underline, não usar fora da classe
  }
  //métodos getters e setters

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }

  // getter and setter dataAtual
  get dataAtual() {
    return this._dataAtual;
  }

  set dataAtual(valor) {
    this._dataAtual = valor;
  }
}
