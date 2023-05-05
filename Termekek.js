import Termek from "./Termek.js";
import Asszinkron from "./Asszinkron.js";

class Termekek {
  #kedvencek = [];
  constructor() {
    const asszinkron = new Asszinkron();
    let vegpont = "http://localhost:3000/termekLista";
    asszinkron.adatBetolt(vegpont, this.megjelenit);

    $(window).on("kedvenc", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek);
    });

    $(window).on("torol", (event) => {
      console.log("torol", event.detail.id);
      asszinkron.adatTorol
    });

  }
  megjelenit(adat) {
    let termekLista = adat;
    const szuloElem = $("article");
    for (let index = 0; index < termekLista.length; index++) {
      const t1 = new Termek(szuloElem, termekLista[index]);
    }
  }
}

export default Termekek;
