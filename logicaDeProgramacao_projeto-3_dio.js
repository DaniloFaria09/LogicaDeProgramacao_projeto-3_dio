class Heroi {
    constructor(tipo) {
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('guerreiro');
const heroi2 = new Heroi('mago');
const heroi3 = new Heroi('monge');
const heroi4 = new Heroi('ninja');

heroi1.atacar(); 
heroi2.atacar();  
heroi3.atacar(); 
heroi4.atacar();  