import Termek from "./Termek.js";
import { termekLista } from "./adatok.js";
class Termekek {
  constructor() {
    const szuloElem = $("article");
    for (let index = 0; index < termekLista.length; index++) {
        const t1 = new Termek(szuloElem, termekLista[index]);
    }
  }
}

export default Termekek