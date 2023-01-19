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

ValidarCPF('');
