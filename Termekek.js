import Termek from "./Termek.js";
import { termekLista } from "./adatok.js";

class Termekek {
  #kedvencek = [];
  constructor() {
    const szuloElem = $("article");
    for (let index = 0; index < termekLista.length; index++) {
      const t1 = new Termek(szuloElem, termekLista[index]);
    }

    $(window).on("kedvenc", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek)
    });
  }
}

export default Termekek;
