class Funcionario {
    constructor(nome, salario) {
        this._nome = nome
        this._salario = salario
    }

    get nome() {
        return this._nome
    }

    get salario() {
        return this._salario
    }

    set nome(nome) {
        this._nome = nome
    }

    set salario(salario) {
        this._salario = salario
    }

    reajuste() {
        return this._salario * 1.10
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario)
    }

    reajuste() {
        return this._salario * 1.5
    }
}

let func = new Funcionario('Ana', 2000)
console.log(func.nome, func.salario, func.reajuste())

func.nome = 'Rita'
func.salario = 3000
console.log(func.nome, func.salario, func.reajuste().toFixed(2))

let ger = new Gerente('Pedro', 4000)
console.log(ger.nome, ger.salario, ger.reajuste())





















   


















