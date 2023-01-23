function CalcularDigitos(cpf: string, pulos: number) {
  let CalcularDigitos: number = 0;
  for(let c: number = 0; c < pulos; c++){
    let numero = parseFloat(cpf[c]) * (c+1);
    CalcularDigitos += numero;
  }
  let DigitoVerificador: number = CalcularDigitos % 11;
  if(DigitoVerificador == 10) DigitoVerificador = 0;
  return DigitoVerificador;
}

function ValidarCPF(cpf: string): boolean{
  let primeirodigitoVerificador: number = CalcularDigitos(cpf, 9);
  let segundoDigitoVerificador: number = CalcularDigitos(cpf, 10);
  
  if(+cpf[9] == primeirodigitoVerificador && +cpf[10] == segundoDigitoVerificador) return true;
  else return false;
}
  
function GerarCPF(): string {
  let cpf: string = '';
  let numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i: number = 0; i < 9; i++) {
    let index: number = Math.floor(Math.random() * numeros.length);
    cpf += numeros[index];
  }
  let primeiroDigitoVerificador: number = CalcularDigitos(cpf, 9);
  cpf += primeiroDigitoVerificador.toString();
  let segundoDigitoVerificador: number = CalcularDigitos(cpf, 10);
  cpf += segundoDigitoVerificador.toString();
  return cpf;
}

let CPFGerado: string = GerarCPF();
let Validado: boolean = ValidarCPF(CPFGerado);

console.log(`O CPF ${CPFGerado} é ${Validado}`);
