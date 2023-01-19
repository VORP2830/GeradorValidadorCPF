function ValidarCPF(cpf: string){
  let calcularDigitos: number = 0;
  for(let c: number = 0; c < 9; c++){
    let numero = parseFloat(cpf[c]) * (c+1);
    calcularDigitos += numero;
  }
  let primeirodigitoVerificador: number = calcularDigitos % 11;
  calcularDigitos = 0;
  for(let c: number = 0; c < 10; c++){
    let numero = parseFloat(cpf[c]) * c;
    calcularDigitos += numero;
  }
  let segundoDigitoVerificador: number = calcularDigitos % 11;
  if(parseFloat(cpf[9]) == primeirodigitoVerificador && parseFloat(cpf[10]) == segundoDigitoVerificador){
    console.log(`O CPF ${cpf} é valido!`);
  }
  else{
    console.log(`O CPF ${cpf} é invalido!`);
    }
}
function GerarCPF(): string {
  let cpf: string = '';
  let numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i: number = 0; i < 9; i++) {
    let index: number = Math.floor(Math.random() * numeros.length);
    cpf += numeros[index];
  }
  let calcularDigitos: number = 0;
  for (let c: number = 0; c < 9; c++) {
    calcularDigitos += parseFloat(cpf[c]) * (c + 1);
  }
  let primeiroDigitoVerificador: number = calcularDigitos % 11;
  calcularDigitos = 0;
  cpf += primeiroDigitoVerificador.toString();
  for (let c: number = 0; c < 10; c++) {
    calcularDigitos += parseFloat(cpf[c]) * c;
  }
  let segundoDigitoVerificador: number = calcularDigitos % 11;
  cpf += segundoDigitoVerificador.toString();

  return cpf;
}
console.log(GerarCPF())
ValidarCPF('');
