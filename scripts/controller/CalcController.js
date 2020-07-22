class CalcController {
  constructor() {
    //atributo ao invés de variável
    //permite usar em todo lugar dentro da classe
    //encapsulamento, geralmente public, protected, private
    // underline por convenção como private
    // toda vez que ver o underline, não usar fora da classe
    this._locale = "pt-BR";
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#date");
    this._timeEl = document.querySelector("#hour");

    this._currentDate;
    this.initialize();
  }

  initialize() {
    this.setDisplayDateTime();
    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }

  // vírgula após o locale para personalizar o modelo dos dados
  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    return (this._timeEl.innerHTML = value);
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    return (this._dateEl.innerHTML = value);
  }

  //métodos getters e setters

  get displayCalc() {
    return this._displayCalcEl.innerHTMML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTMML = value;
  }

  // getter and setter dataAtual
  // var dt = new Date();
  // dt.getDate()
  // dt.getMonth()
  // etc
  // para ver todos métodos internos do new Date basta:
  // dir(dt)
  // para data
  // dt.toLocaleDateString('pt-BR', {month: "long"})
  // dt.toLocaleDateString('pt-BR', {month: "short"})
  // para hora
  // dt.toLocaleTimeString('pt-BR')
  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    this._currentDate = value;
  }
}
