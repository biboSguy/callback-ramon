function pegarUsuario(){
    return new Promise((resolve, reject)=>{
        setTimeout(
            ()=>{
                // gerem um numero aleatorio entre 0 e 10
                // se este numero for maior que 5 retonar um resolve
                // se este numero for menor ou igual a 5, retorna um reject
            }, 2000)
    })
}
// const result = pegarUsuario()
// result.then(msg => console.log(msg))
async function mostrarUsuario(){
    try{
        const usuario = await pegarUsuario()
        console.log(usuario)
    }catch(err){
        console.log(err)
    }
}
mostrarUsuario()