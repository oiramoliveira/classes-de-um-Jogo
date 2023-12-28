class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "No ecxiste";
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplo de uso
const heroiMago = new Heroi("Merlin", 100, "mago");
heroiMago.atacar();

const heroiGuerreiro = new Heroi("Conan", 30, "guerreiro");
heroiGuerreiro.atacar();

const heroiMonge = new Heroi("Lee", 40, "monge");
heroiMonge.atacar();

const heroiNinja = new Heroi("Hanzo", 25, "ninja");
heroiNinja.atacar();
