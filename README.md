# Estudos do Livro - Lógica de Programação e Algoritmos com JavaScript

## Uma introdução à programação de computadores usando JavaScript

-----
<!--ts-->
* [Intrução](#introducao)
    * [Variáveis](#Variável)
    * [Constantes](#Const)
<!--te-->

### Introdução

#### Variável

As variáveis são espaços alocados na memória do computador que permitem guardar informações e trabalhar com elas - como o valor que o cliente deseja sacar no terminal do caixa eletrônico. Como o nome sugere, os valores armazenados em uma variável podem ser alterados durante a execução do programa. São exemplos de variáveis manipuladoras em um programa: **descricao, quantidade, preco, produto, nome, salario, altura**.

As variáveis declaradas em um programa devem possuir um nome, seguindo algumas regras de nomeclatura. Em JavaScript, os nomes de variáveis não podem:
        
* Conter espaços.
* Começar por número.
* Conter caracteres especiais, como +, -, *, /, %...
* Utilizar nomes de palavras reservadas da linguagem, como **function, var, new, for ou return**.

Variáveis escritas com letras maiúsculas são diferentes de variáveis escritas com letras minúsculas. O uso do caractere "_" é válido, porém dê preferência para declarar variáveis com o nome de letras minúsculas e o uso de uma letra maiúscula para destacar palavras compostas (padrão denominado *camelcase*). São exemplos de nomes válidos para variáveis: **cidade, nota1, primeiroCliente, novoSalario, precoFinal, dataVenda**.
Em JavaScript, a atribuição de valor para uma variável é feita com o sinal "=". É possível declarar uma variável e atribuir-lhe um valor com o uso da palavra reservada **var** e do sinal de atribuição.
###### Declarando uma variável em JavaScript:

```var nome; var idade = 18; var soma = 10 + 10;```

#### Const

Diferente das variáveis, uma constante não pode ter o seu conteúdo alterado no decorrer do programa.
A declaração **const** cria uma variável cuja o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.
Para declarar uma constante em um programa, utilize a palavra reservada **const** seguido pelo nome da constante e da atribuição de valor a ela. É padrão utilizar letras maiúsculas para renomear as constantes.

###### Declarando uma constante em JavaScript:

```const NOME = carlos; const IDADE = 18;```