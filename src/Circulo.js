import Poligono from './Poligono' //import poligono


//object circulo, formula de calculo
const circulo = {
  //method area
  area() {
    let radio = Poligono.valores()[4] //function return object poligono
    return Math.pow(radio, 2) * Math.PI
  },
  //method perimetro
  perimetro() {
    let radio = Poligono.valores()[4] //function return object poligono
    return Math.PI * 2 * radio
  }
}

//export of circulo

export default circulo
