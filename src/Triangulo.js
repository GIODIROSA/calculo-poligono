import Poligono from './Poligono'//import poligono

//object triangulo, formula de calculo
const triangulo = {
  // method area
  area() {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return base * altura / 2
  },
  //method perimetro
  perimetro(){
    let lado = Poligono.valores()[1]
    return lado * 3
  }
}




//export of triangulo
export default triangulo



