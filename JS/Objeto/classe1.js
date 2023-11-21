class lançamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let ValorConsolidado = 0
        this.lancamentos.forEach(l => {
            ValorConsolidado += l.valor
        })
        return ValorConsolidado
    }
}

const salario = new lançamento('Salario', 45000)
const Divida = new lançamento('Divida', -5000)

const contas = new cicloFinanceiro(11, 2023)
contas.addLancamentos(salario, Divida)
console.log(contas.sumario())