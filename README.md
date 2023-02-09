# Gerador e validador de CPF

Este código implementa três funções em TypeScript que manipulam CPFs (Cadastro de Pessoa Física), que é um número identificador de pessoas físicas no Brasil.
# Função CalcularDigitos:
A função CalcularDigitos recebe dois argumentos: cpf, uma string que representa um CPF, e pulos, um número que indica quantos dígitos do CPF serão utilizados para calcular o dígito verificador.

A função primeiro inicializa uma variável CalcularDigitos para armazenar o resultado parcial da soma dos dígitos multiplicados por suas respectivas posições (1 para o primeiro dígito, 2 para o segundo, etc.). Em seguida, usa um loop for para iterar sobre cada dígito do CPF e calcular a soma parcial.

Ao final da iteração, o resultado da soma é armazenado em CalcularDigitos, que é então usado para calcular o dígito verificador modulo 11. Se o dígito verificador for igual a 10, ele é redefinido para 0. Por fim, a função retorna o dígito verificador.
# Função ValidarCPF:
A função ValidarCPF recebe um argumento cpf, uma string que representa um CPF, e usa a função CalcularDigitos para calcular os dois dígitos verificadores do CPF. Em seguida, compara os dígitos verificadores calculados com os dígitos no final da string cpf. Se eles são iguais, a função retorna true, indicando que o CPF é válido. Caso contrário, a função retorna false.
# Função GerarCPF
A função GerarCPF não recebe nenhum argumento. Ela gera um CPF aleatório e o retorna como string. Primeiro, inicializa uma string vazia cpf e uma matriz numeros com todos os dígitos de 0 a 9. Em seguida, usa um loop for para gerar aleatoriamente 9 dígitos e adicioná-los à string cpf.

Ao final do loop, a função usa a função CalcularDigitos para calcular os dois dígitos verificadores e adicioná-los à string cpf, retornando o CPF completo como
string.

No final do código, uma variável CPFGerado é inicializada com o resultado da função GerarCPF, e uma variável Validado é inicializada com o resultado da função ValidarCPF aplicada a CPFGerado. Em seguida, o resultado é exibido na saída de console, mostrando se o CPF gerado é válido ou não.