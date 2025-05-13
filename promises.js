/*
function login(usuario, senha){
    return new Promise((resolve, reject)=>{
        //executar função assincrona
        setTimeout(()=>{
            if(usuario == 'tigrinho' && senha == 'aposta123'){
                resolve('logado com sucesso')
            }else{
                reject('erro no login')
            }
        }, 2000)
    })
}   
const result = login('tigrinho', 'aposta123')
result.then(msg => console.log(msg)).catch(err => console.log(err))
*/


const tarefa1 = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        resolve('tarefa1')
    }, 2000);
})
const tarefa2 = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        resolve('tarefa2')
    }, 3000);
})
const tarefa3 = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        resolve('tarefa3')
    }, 4000);
})
Promise.all([tarefa1, tarefa2, tarefa3]).then(
    resutlados => console.log('Tudo finalizado')
)
Promise.race([tarefa1, tarefa2, tarefa3]).then(
    resultado => console.log('a primeira a terminar foi: ', resultado)
)




