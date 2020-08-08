import Poligono from './Poligono' //import poligono


//object rectangulo, formula de calculo
const rectangulo = {
  // method area
  area () {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return base * altura
  },
  //method perimetro
  perimetro (){
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return 2 * base + 2 * altura
  }

}


// export of rectangulo

export default rectangulo
