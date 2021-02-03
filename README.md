# Estudos do Livro - Lógica de Programação e Algoritmos com JavaScript

## Uma introdução à programação de computadores usando JavaScript

-----
<!--ts-->
* [Introdução](#Introdução)
    * [Variáveis](#Variável)
    * [Constantes](#Const)
    * [Desafios](#Desafios)
    * [Desafios-Finais](#Desafios-Finais)
    * [Considerações Finais](#Considerações_Finais)
* [Integração com HTML](#Integração_com_HTML)
    * [Estrutura básica de um documento HTML](#Estrutura_básica_de_um_documento_HTML)
    * [Exercícios](#Exercícios)
* [Comandos](#Comandos)    

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

Outro detalhe importante sobre as variáveis é que elas têm um "escopo" de abrangência (de validade no programa). As variáveis declaradas dentro de uma função são denominadas variáveis locais e, como o nome sugere, só têm validade nesse local (nessa função). Já as variáveis declaradas fora das funções são consideradas variávies globais, e valem para todo o programa. Sempre que possível, dê preferência por utilizar variáveis locais, pois o espaço alocado por uma variável local é liberado após a conclusão da função. Além disso, diversos outros problemas podem ser evitados, como a redefinição na função do valor de uma variável global já existente.
Um cuidado com relação à declaração das variáveis JavaScript: não se esqueça de utilizar a palavra *var* antes do nome da variável. Declarar variáveis sem a palavra *var* faz com que ela seja entendida como uma variável global, mesmo se declarada dentro de uma função. As boas práticas de programação recomendam o uso de *var* antes do nome da variável, e devemos segui essa recomendação.
###### Declarando uma variável em JavaScript:

```var nome; var idade = 18; var soma = 10 + 10;```

#### Const

Diferente das variáveis, uma constante não pode ter o seu conteúdo alterado no decorrer do programa.
A declaração **const** cria uma variável cuja o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.
Para declarar uma constante em um programa, utilize a palavra reservada **const** seguido pelo nome da constante e da atribuição de valor a ela. É padrão utilizar letras maiúsculas para renomear as constantes.

###### Declarando uma constante em JavaScript:

```const NOME = carlos; const IDADE = 18;```



### Comandos

O método `Window.alert()` mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado e um botão `OK` referencia

```alert(`mensagem`);```

* mensagem é uma strig opcional com o texto que vocẽ quer exibir na caixa de diálogo, ou, ainda, um objeto a ser convertido em string e exibido.

--------

O método `Window.prompt()` exibe uma caixa de dialógo com uma mensagem opcional solicitando ao usuário a entrada de algum texto.

**prompt()**:

```var resultado = prompt("Insira o resultado");```

* é possível mostrar uma mensagem ou fazer uma pergunta ao usuário, sendo retornado algum valor que vai ser atribuido a variável *resultado* e pode ser usado na sua lógica, podendo ser esse valor passado também como nulo.

-------

O objeto JavaScript `Number()` é um objeto encapsulado que permite você trabalhar com valores numéricos. Um objeto *Number* é criado utilizando o construtor `Number()`.

**Number()**

```new Number(value); var numero = Number(prompt("infome um numero: "));```

* Você passa como parâmetro o que vai ser convertido

-------

O `toFixed()` é um metodo que formata o número usando a notação de ponto fixo.

**toFixed()**

```alert(`o seu salario é de: R$${salario.toFixed(2)}`); //Retorna => "o seu salario é de R$***,00"```

* É possível passar um parâmetro que informa a quantidade de casas decimais depois do ponto.

-------

Para referenciar um elemento HTML identificado no documento pelo id, deve-se utilizar o método `getElementById()`. Esse método permite referenciar qualquer elemento da página, como um campo de formulário, um parágrafo, um botão, uma imagem, entre outros. Para que um elemento HTML seja referenciado, ele precisa conter um atributo id.

**getElementById()**

```var inputNome = document.getElementById("nome");```
```var nome = inputNome.value;```

Ou, então, utilizar um único comando, acessando diretamente a propriedade que queremos obter ou alterar, como asseguir:

```var nome = document.getElementById("nome").value;```

-------

A propriedade `****.value;` obtém ou altera o conteúdo de um campo de formulário HTML. 
A propriedade `****.textContent` serve para alterar ou obter o conteúdo de elementos de texto do documento identificados no código HTML. É possível, portanto alterar o texto de qualquer parágrafo ou texto de cabeçalho em uma página web utilizando essa propriedade.
A propriedade `****.innerHTML`, semelhante a `textContent` quanto aos elementos em que atua, porém renderiza os códigos HTML existentes no seu conteúdo.

----
|Método|Explicação|
|------|----------|
|`Math.abs(num)`|Retorna o valor absoluto de um número, ou seja, se o valor for negativo, ele será convertido para positivo. Se positivo, o valor permanece o mesmo. *Exemplo*: `Math.abs(-3)` => 3|
|`Math.ceil(num)`|Arredonda o valor para cima. Dessa forma, se o valor possuir decimais, retorna o próximo número inteiro do valor analisado. *Exemplo*: `Match.ceil(4.2)` => 5|
|`Math.floor(num)`|Arredonda o valor para baixo, retornando a parte inteira do número. *Exemplo*: `Math.floor(7.9)` => 7|
|`Math.pow(base, exp)`|Retorna a base elevada ao expoente. *Exemplo*: `Math.pow(3,2)` => 9|
|`Math.random()`|Retorna um número aleatório entre 0 e 1, com várias casas decimais. O número aleatório possível inicia em 0 e vai até um valor inferior a 1. *Exemplo*: `Math.random()` => 0.16498685|
|`Math.round(num)`|Arredonda o valor para o inteiro mais próximo. A partir de .5 na parte fracionária, o valor é arredondado para cima. Anterior a .5, é arredondado para baixo. *Exemplo*: `Math.round(2.7)` => 3|
|`Math.sqrt(num)`|Retorna a rais quadrada do número (square root). *Exemplo*: `Math.sqrt(16)` => 4|

#### Desafios

1. *Elaborar um programa que leia um número. Calcule e informe o dobro desse número:*
    [Link da resolução do desafio](./Introducao-cap1/desafios/des1_1.html)

2. *Elaborar um programa que leia dois números. Calcule e informe a soma desses números:*
    [Link da resolução do desafio](./Introducao-cap1/desafios/des1_2.html)

3. *Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.*
    [Link da resolução do desafio](./Introducao-cap1/desafios/des1_3.html)

4. *Elaborar um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em número de horas.*
    [Link da resolução do desafio](./Introducao-cap1/desafios/des1_4.html)

#### Desafios-Finais

a. *Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e posterior.*
    [Link da resolução do desafio](./Introducao-cap1/exercicio-final/resp1_a.html)


b. *Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.*
    [Link da resolução do desafio](./Introducao-cap1/exercicio-final/resp1_b.html)

c. *Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de deconto e o valor em 3x.*
    [Link da resolução do desafio](./Introducao-cap1/exercicio-final/resp1_c.html)

D. *Elaborar um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe a média das notas.*
    [Link da resolução do desafio](./Introducao-cap1/exercicio-final/resp1_d.html)


--------------------------------------

#### Considerações_Finais

**Contém partes escritas pelo autor retirados do livro**

O capitulo estudado no texto foi dedicado a destacar o estudo básico de alguns pontos essenciais da lógica, focado no aprendizado de programação com JavaScript, os quais são:
    
* Para se tornar um programador, deve ser persistente e cuidadoso com os detalhes da codificação. Sua organização lógica do programa pode estar correta, mas, se um pequeno erro de grafia (sintaxe) existir no código, ele não é executado.
* Lógica de programação é algo que se aprende com treinamento. Ao criar um algoritmo, vamos "ensinar" o computador a realizar uma tarefa. Com a compreensão e a prática dos exercícios, passamos a assimilar a forma como as estruturas de um programa devem estar organizadas. Usamos a lógica para montar corretamente essas estrututas.
* Uma boa regra a seguir para resolver os primeiros exercícios de programação é que todo o programa tem três etapas: entrada, processamento e saída. Ou seja, ele recebe alguns dados, executa algumas operações sobre esses dados e apresenta a resposta.
* JavaScpript é uma linguagem de destaque no cenário atual. É muito valorizada por empresas de desenvolvimento Web pela capacidade de adicionar inúmeros recursos nas páginas, visando, por exemplo, à interação com os usuários e à criação de layouts profissionais.
* Existem diversas opções de editores de código JavaScript. Alguns estão disponíveis e são úteis para realizarmos pequenos testes. Para criar progamas maiores, instale um editor profissional que contém diversos recursos visando auxiliar o trabalho do progamador. Há ótimas alternativas de editores gratuitos na internet. O visual Studio Code é um deles.
* A linguagem JavaScript dispõe dos comandos (métodos) `prompt()` e `alert()` para realizar pequenas interações com os usuários. Eles nos permitem praticar as etapas de entrada e saída de dados de um algoritmo.
* Variável é um conceito fundamental para a criação de programas. São as variáveis que permitem guardar os dados de entrada, armazenar um cálculo ou outro processamento e, a partir delas, exibir dados de saída personalizados para cada interação de um usuário do sistema.

### Integração_com_HTML
#### Estrutura_básica_de_um_documento_HTML

As tag em HTML geralmente são declaradas em pares. Há ```<html></html>, <head></head>, <body></body>```. As tags `<head>` e `<body>` são responsaveis por definirem as seções principais de uma página. Na seção de cabeçalho, foram são inseridas algumas metatags e o titulo de documento que você pode alterar conforme a necessidade. Já no corpo da página fica as tags de marcação responsáveis por criar o "esqueleto" da página, que tem como principal prioridade dar a forma a página que vai ser construída.
Existem também algumas tags que não necessitam de fechamento, que se abrem e se fecham nelas mesmas como por exmplo a tag `<br/>`, pois ela não tem sentido semantico e não necessita de ter uma tag para fechamento.

> **Objeto** - representa uma instância de uma classe.
----
> **Método** - representa uma instrução ou um conjunto de instruções que executam uma tarefa.
----
> **Propriedade** - representa uma característica (atributo) de um objeto.
----


### Exercícios

a. *Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.*
    [Link da resolução do desafio](./IntegracaoHTML-cap2/ex2_2.html)
    
b. *Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.*
    [Link da resolução do desafio](./IntegracaoHTML-cap2/ex2_3.html)

c. *Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago.*
    [Link da resolução do desafio](./IntegracaoHTMl-cap2/ex2_4.html)

d. *Uma farmacia está com uma promoção - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção.*
    [Link da resolução do desafio](./IntegracaoHTMl-cap2/ex2_5.html)










