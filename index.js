class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "a espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroiMago = new Heroi("Gandalf", 1500, "mago");
const heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");
const heroiMonge = new Heroi("Bruce Lee", 32, "monge");
const heroiNinja = new Heroi("Naruto", 28, "ninja");

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();
