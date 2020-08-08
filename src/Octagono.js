import Poligono from './Poligono' //import poligono


//object octago, formula de calculo
const octagono = {
  // method area
  area(){
    let lado = Poligono.valores()[1] //function return object poligono
    let apotema = Poligono.valores()[3]
    return ((lado * 8) * apotema)/2
  },
  //method perimetro
  perimetro(){
    let lado = Poligono.valores()[1] //function return object poligono
    return lado * 8
  }
}



//export of octagono

export default octagono






