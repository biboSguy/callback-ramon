/*
console.log(1)

setTimeout(() => {console.log(2)}, 2000)

console.log(3)
*/

/*
function pedirPizza(callback, sabor){
    console.log(`Fazendo uma piazza de sabor ${sabor}`)
    setTimeout(()=>{
        console.log(`Pizza Pronta`)
        callback()
    }, 5000)
}
function comerPizza(){
    console.log("Comendo Pizza")
}
pedirPizza(comerPizza, 'calabresa')
*/

/*
function delay(tempo){
    const fim = Date.now() + tempo
    while(Date.now() < fim){
        //esperar
    }
    return
}

console.log(1)
// setTimeout(() => {console.log(2)}, 2000) // "() => {}" isso é uma função anonima.


async function pedirPizza (callback, sabor) {
    console.log(`Fazendo uma pizza de sabor ${sabor}`)
    await delay(5000)
    console.log('Pizza pronta.')
    callback()
}

function comerPizza (){
    console.log('Comendo pizza.')
}

pedirPizza(comerPizza, 'Calabresa.')

console.log(3)
*/

function passo1(callback){
    setTimeout(()=>{
        console.log('passo1')
        callback()
    }, 2000)
}
function passo2(callback){
    setTimeout(()=>{
        console.log('passo2')
        callback()
    }, 2000)
}
function passo3(callback){
    setTimeout(()=>{
        console.log('passo3')
        callback()
    }, 2000)
}
passo1(()=>{
    passo2(()=>{
        passo3(()=>{console.log("fim")})
    })
})
