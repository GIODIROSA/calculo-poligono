import Poligono from './Poligono' //import poligono

//object decagono, formula de calculo
const decagono = {
  // method area
  area(){
    let lado = Poligono.valores()[1]
    let apotema = Poligono.valores()[3]
    return (10 * lado * apotema)/2
  },
  // method perimetro
  perimetro(){
    let lado = Poligono.valores()[1]
    return(lado * 10)
  }
}

//export of decagono

export default decagono




