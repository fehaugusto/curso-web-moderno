// minha tentativa
function criarPessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`meu nome é ${this.nome}`)
    } 
}

const p1 = new criarPessoa('felipe')
p1.falar()