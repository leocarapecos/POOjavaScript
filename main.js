
//Definindo classe construtora

function Animal(nome,som) {
    
    this.nome = nome;
    this.som = som;
    this.fazerSom = function(){
        console.log(`${this.nome} faz ${this.som} `);
    }
}

//Classes herdeiras
function Cachorro(nome,som){

    this.abanarRabo = function(){
        console.log(`${this.nome} está abanando o rabo `)
    }

    Animal.call(this, nome, "Woof");
}

function Gato(nome,som){
    this.ronronar = function(){
        console.log(`${this.nome} está ronrosnando`)
    }

    Animal.call(this, nome, "Meow");
}


  // Criando instancias

const leao = new Animal('Leão', 'Roar');
const labrador = new Cachorro('Thor');
const gatoSiames = new Gato('Nefera');

 console.log(labrador);
 console.log(gatoSiames);
 console.log(leao);
