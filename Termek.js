import { termekLista } from "./adatok.js";
import { favList } from "./kedvencek.js";

class Termek {
  constructor(szuloElem, elem) {
    this.szuloElem = szuloElem;
    this.elem = elem;
    szuloElem.append(
      `<div><h2>${elem.iro}</h2><h3>${elem.cim}</h3><p>${elem.ar} Ft</p><button type="button">Kedvenc</button></div>`
    );

    const BTTN = $(`div:last-child button`);

    BTTN.on("click", () => {
        favList.push(elem)
    });
  }
}

export default Termek;
