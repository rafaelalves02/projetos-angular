export const pi: number = 3.14;
export const phi: number = 1.61;

export class RandomNumber {
    generateNumber() : number{
        return Math.random();
    }
}

export function returnPI(){
    return pi;
}

export function calcularMedia(listaDeNumeros: Array<number>){
    
    let somaDosNumeros = 0;

    for (let i = 0; i < listaDeNumeros.length;i++){
        let numero = listaDeNumeros[i];
        somaDosNumeros += numero;
    }

    let media = somaDosNumeros / listaDeNumeros.length;

    return media;
}

calcularMedia(new Array(12, 43, 54 ,344, 43, 54));