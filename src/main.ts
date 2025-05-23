// Escreva seu código aqui!
import readlineSync from 'readline-sync';


let janelas: number = 4;
console.log('Há ' + janelas + ' janelas no laboratório.');

let arCondicionado: string = "frio";
console.log(`O ar-condicionado do laboratório é ${arCondicionado}.`);

let entradasLab;
console.log(entradasLab); // Isso se refere as entradas laterais do laboratório, entre as portas, do lado contrário as janelas que, para mim, não fazem sentido algum

let tickets: boolean = false;
console.log(`Os tickets de acompanhamento da Lana são em vermelho, amarelo e azul.\n ${tickets}`);

type poteDeMarmita = {
    cor: string;
    formato: string;
    reparticoesInternas: number;
    talheres: boolean;
}
let poteDeMarmita = {
    cor: "laranja",
    formato: "retangular",
    reparticoesInternas: 2,
    talheres: true,
};
console.log(`O pote de marmita da Myllene é ${poteDeMarmita.cor}, 
possui um formato ${poteDeMarmita.formato},\ntem ${poteDeMarmita.reparticoesInternas} 
repartições internas e possui talheres (${poteDeMarmita.talheres}).`);

