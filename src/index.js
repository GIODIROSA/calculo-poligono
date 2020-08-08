//import formula

import poligonos from './Poligono'
import circulo from './Circulo'
import decagono from './Decagono'
import octagono from './Octagono'
import rectangulo from './Rectangulo'
import triangulo from './Triangulo'


// value condicional data

document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  console.log(poligonos.getValues())
  let poligono = e.target.value
  if (poligono === 'circulo') {
    console.log(`Perimetro del Circulo ===> ${circulo.perimetro()}`)
    console.log(`Area del Circulo ===> ${circulo.area()}`)
  }
  if (poligono === 'triangulo') {
    console.log(`Perimetro del Triangulo ===> ${triangulo.perimetro()}`)
    console.log(`Area del Triangulo ===> ${triangulo.area()}`)
  }
  if (poligono === 'rectangulo') {
    console.log(`Perimetro del Rectangulo ===> ${rectangulo.perimetro()}`)
    console.log(`Area del Rectangulo ===> ${rectangulo.area()}`)
  }
  if (poligono === 'decagono') {
    console.log(`Perimetro del Decagono ===> ${decagono.perimetro()}`)
    console.log(`Area del Decagono ===> ${decagono.area()}`)
  }
  if (poligono === 'octagono') {
    console.log(`Perimetro del Decagono ===> ${octagono.perimetro()}`)
    console.log(`Area del Decagono ===> ${octagono.area()}`)
  }
  
  



})
