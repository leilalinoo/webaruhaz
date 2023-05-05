class Asszinkron{
    constructor(){
        
    }

    adatBetolt(vegpont, callbackFv) {
        fetch(vegpont, {method: "get", headers:{"Content-Type":"application.json"}})
          .then((response) => response.json())
          .then((data) => {
            callbackFv(data);
          })
          .catch((error) => console.log(error));
    }

    adatTorol(vegpont, id){
        //ezt az id-jú elemet kell törölni
        vegpont = vegpont+"/"+id
        fetch(vegpont, {method: "delete", headers:{"Content-Type":"application.json"}})
          .then((response) => response.json())
          .then((data) => {
            
          })
          .catch((error) => console.log(error));

        
    }
}
export default Asszinkron