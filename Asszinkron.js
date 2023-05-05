class Asszinkron{


    constructor(){
        
    }

    adatBetolt(vegpont, callbackFv) {
        fetch(vegpont, {method: "get", headers:{"Content-Type":"applicaton.json"}})
          .then((response) => response.json())
          .then((data) => {
            callbackFv(data);
          })
          .catch((error) => console.log(error));
      }
      


}
export default Asszinkron