import  { helloWorld } from "./hello";
import { RandomNumber, phi, pi, returnPI, calcularMedia} from "./math";


function caucularArea(){
    const obj = {width: 20,heigth: 30};

    const area = obj.width * obj.heigth;

    return area;
}

function usuario(){
    const usuario = {
        nome: "Rafael",
        idade: 15
    }
}

function calculo(){
    return Math.random() < 5;
}

function validacao(){
    const valor = Math.random() < 0.5 ? 'a' : 'b';

    if (valor !== 'a'){
        //..
    } else if(valor === 'a') {
        //...
    }
}

function exibirMensagem(pessoa: string, data: string){
    console.log(`Olá ${pessoa}, hoje é ${data}`);
}

exibirMensagem('Rafael', '21/09/24');

let mensagem:string = 'hello-world';
let mensagem2 = 'hello-world';

let number:number = 13;
let number2 = 12;

let obj:any = {x: 4}
obj.nome;

let isso:boolean = true;

function olaMundo(mensagem:string){
    return `olá mundo ${mensagem}`;
}

function exibirCoordenadas(pt: {x: number, y: number}){
    return `${pt.x} ${pt.y}`;
}

exibirCoordenadas({x:4, y:7});

function exibirNome(obj: {nome: string, sobrenome?: string}){
    let mensagem = '';

    if(obj.sobrenome === undefined){
        mensagem = `seu nome é ${obj.nome}`;
    }
    else {
        mensagem = `seu nome é ${obj.nome} e o seu sobrenome é ${obj.sobrenome}`;
    }

    return mensagem;
}

exibirNome({nome: 'Rafael', sobrenome: 'Alves'});

exibirNome({nome: 'Rafael'});

function exibirIds(id: number | string){

    let mensagem = '';
    
    if (typeof id === 'number'){
        mensagem = `seu Id numerico é ${id}.`
    }
    else{
        mensagem = id.toUpperCase();
    }

    return mensagem;
}

exibirIds(43);
exibirIds('43');

type ponto = {
    x: number;
    y: number;
}

// ou

interface ponto2 {
    x: number;
    y: number;
}

function inserirPonto(p: ponto){
    return `seu ponto é ${p.x} ${p.y}`;
}

inserirPonto({x: 3, y: 6});

function imprimirTexto(texto: string, alinhamentos : 'left' | 'right' | 'center'){

}

imprimirTexto('texto', 'left');

//null e undefined

var teste = null;

console.log(teste);

var teste2;

console.log(teste2);

//fazer o typescript ignorar algum erro

function vivendoPerigosamente(x?: number | null){
    console.log(x!.toFixed());//quando se coloca a exclamação na frente do X eu digo ao typescript pra ignorar um erro(so usar se souber oq esta fazendo)
}

vivendoPerigosamente();

//usar arrays em funções

function fazerAlgo(lista: Array<string>){

}

function fazerAlgoTambém(lista: string[]){

}

fazerAlgo(new Array('hello', 'world'));

fazerAlgoTambém(['hello', 'world']);

class point {
    x: number = 0;
    y: number = 0;
}

let p = new point();
p.x = 4;
p.y = 5;

console.log(`${p.x} ${p.y}`)

class BoasVindas {
    mensagem: string;

    constructor(){
        this.mensagem = 'Bem-vindo!';
    }
}

let m = new BoasVindas();

console.log(m.mensagem);

class Saudacoes {
    readonly mensagem: string;

    constructor(){
        this.mensagem = 'muito bem-vindo!';
    }

    dizerOla(){
        console.log(this.mensagem);
    }
}

let s = new Saudacoes();

//s.mensagem = 'teste'; isso daria erro pq a propriedade mensagem é readonly ou seja somente o construtor pode defini-la

class C {
    private _length = 0;

    get lenghth(): number {

        //executa quando alguem obtem o valor dessa propriedade

        if (this.length > 0)
            return 100;
        else
            return this._length;
    }

    set length(value: number){

        //executa quando alguem atribui valor a essa propriedade

        if (value > 10)
            this._length = value;
    }
}

let c = new C();

c.length = 13; 
console.log(C.length);

interface Pingavel {
    ping(): void;
}

class Sonar implements Pingavel{
    ping(){
        console.log('ping!');
    }
}

class Ball implements Pingavel{
    ping(){
        console.log('ping!')
    }
}

class Animal {
    andar(){
        console.log('o animal andou!');
    }
}

class Cachorro extends Animal {
    latir(){
        console.log('au au!')
    }
}

let viraLata = new Cachorro();

viraLata.andar();
viraLata.latir();

//quando um metodo é public qualquer um pode acssar
//quando um metodo é protected somente pode acessar-lo quem estiver dentro da classe ou herdando dela
//quando um metodo é private somente pode acessar-lo quem estiver dentro da classe

helloWorld();

let random = new RandomNumber();

console.log(pi);