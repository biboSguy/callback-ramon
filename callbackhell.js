console.log("PrepararMacarrao")
function passo1(callback){
    setTimeout(()=>{
        console.log('FerverAgua')
        callback()
    }, 2000)
}
function passo2(callback){
    setTimeout(()=>{
        console.log('CozinharMacarrao')
        callback()
    }, 2000)
}
function passo3(callback){
    setTimeout(()=>{
        console.log('EscorrerAgua')
        callback()
    }, 3000)
}
function passo3(callback){
    setTimeout(()=>{
        console.log('ServirPrato')
        callback()
    }, 3000)
}
passo1(()=>{
    passo2(()=>{
        passo3(()=>{console.log("Prato servido")})
    })
})