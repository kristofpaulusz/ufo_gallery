class Model {
  #current;
  constructor(def) {
    this.#current = def;
  }
  getCurrent() {
    return this.#current;
  }
  setCurrent(newC) {
    this.#current = newC;
  }
}
export default Model;
