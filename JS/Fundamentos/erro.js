function tratarErroELançar(erro) {
 // throw new error ('...')
 // throw 10
 // throw true
 // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.essage,
    date: new Date
 }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroELançar(e)
  } finally {
    console.log('final')
  }
}

const obj = {name: "roberto"}
imprimirNomeGritado(obj)
