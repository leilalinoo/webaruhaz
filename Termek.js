import { termekLista } from "./adatok.js";


class Termek {
  constructor(szuloElem, elem) {
    this.szuloElem = szuloElem;
    this.elem = elem;
    szuloElem.append(
      `<div class="card"><div class="card-header">${elem.iro}</div><div class="card-body">${elem.cim}</div> <div class="card-body">${elem.ar} Ft</div><button type="button" class="kedvenc">Kedvenc</button><button type="button" class="torles">Törlés</button></div>`
    );

    const favBTTN = $(`div:last-child button`);
    const deleteBTTN = $(`div:last-child button`);

    favBTTN.on("click", () => {
      this.esemenyTrigger();
    });

    deleteBTTN.on("click", () => {
      this.esemenyTrigger2();
    });
  }

  esemenyTrigger() {
    const esemeny = new CustomEvent("kedvenc", {
      detail: this.elem,
    });
    window.dispatchEvent(esemeny);
  }

  esemenyTrigger2() {
    const esemeny = new CustomEvent("torol", {
      detail: this.elem,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Termek;
