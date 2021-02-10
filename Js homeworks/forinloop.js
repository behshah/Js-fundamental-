var cities = {'canada ':'monrral' , 'Iran': 'Tehran' , 'U.S.a': 'washington' , 'Australia' : 'sydney'};
var pets = ['topol', 'Bellesy', 'jigar']
//console.log(cities.length) => we cant use .length method is an OBJECT

for (let props in pets) {
//  console.log(props)
//  console.log(cities[props])
    console.log ( "in" , props, "we have " , pets[props])
} 

for (let props in cities) {

    console.log("in" , props, "we have ",  props[cities])
    }
