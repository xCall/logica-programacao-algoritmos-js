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
    * [Desafios-cap2](#Desafios-cap2)
    * [Desafios-Finais-cap2](#Desafios-Finais-cap2)
* [Condições](#Condições)
    * [if... else](#if...else)
    * [Switch... Case](#Switch...Case)
    * [Operador Ternário](#Operador-Ternário)
    * [Operadores Condicionais](#Operadores-relacionais)
    * [Operadores Lógicos](#Operadores-Lógicos)
    * [Desafios-cap3](#Desafios-cap3)
    * [Desafios-Finais-cap3](#Desafios-Finais-cap3)


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


#### Desafios-cap2

1. *Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.*
    [Link da resolução do desafio](./IntegracaoHTML-cap2/ex2_2.html)
    
2. *Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.*
    [Link da resolução do desafio](./IntegracaoHTML-cap2/ex2_3.html)

3. *Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago.*
    [Link da resolução do desafio](./IntegracaoHTMl-cap2/ex2_4.html)

#### Desafios-Finais-cap2

a. *Uma farmacia está com uma promoção - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção.*
    [Link da resolução do desafio](./IntegracaoHTMl-cap2/ex2_5.html)

b. *Elaborar um programa para uma lan house de um aeroporto - O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.*
    [Link da resolução do desafio](./IntegracaoHTMl-cap2/ex2_6.html)


c. *Um supermecado está com uma promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia a descrição e preço de um produto. Após, apresente as mensagens indicando a promoção.*
    [Link da resolução do desafio](./IntegracaoHTMl-cap2/ex2_6.html)

### Condições

#### if...else

Uma das representações tradicionalmente utilizadas para o ensino de Algoritmos e Lógica de Programação são os fluxogramas. Eles são úteis para facilitar o aprendizado.
As setas no início e no final do fluxograma indicam que há comandos antes e após a estrutura condicional. Ou seja, uma condição é parte de um programa. Ela pode ser criada para controlar apenas oa saída de dados poderiam não pertencer a estrutura condicional.

![Fluxograma](https://github.com/xCall/logica-programacao-algoritmos-js/blob/main/assets/Figura-18-Fluxograma-e-sintaxe-Instrucao-decisao-se-entao-senao.png)

Para criar uma estrutura clássica, utilizamos os comandos if... else (se... senão).
Eles possuem algumas variações. É possível utilizar apenas o if (para apresentar uma mensagem caso o cliente seja menor de idade, por exemplo). E também criar vários comandos else (para verificar a classificação etária de um aluno de natação, que poderia ser infantil, juvenil ou adulto).

***Exemplos:***

~~~Javascript
//define uma condição simples
if(condicao) {
    comando;
}

//define uma condição de if... else
if (condicao) {
    comando v;
} else {
    comando x;
}

//define múltiplas condições
if (codicao 1) {
    comandos 1;
} else if (condicao 2) {
    comando 2;
} else {
    comando 3;
}
~~~

Quando houver apenas um comando que pertence à condição, o uso das chaves não é obrigatório. Contudo, para facilitar a compreensão, recomenda-se utilizar as *{}* em todas as ocorrências das estruturas condicionais de um programa.

#### Switch...Case

Existe nas linguagens de programação uma outra estrutura de tomada de decisões, que permite criar condições, estamos falando do comando *switch...case*, muito útil para quando existir várias alternativas já definidas a partir do conteúdo de uma variável.

~~~JavaScript
    var bairro = prompt('Bairro de entrega: ');
    var taxaEntrega;
    
    switch (bairro) {
        case "Centro":
            taxaEntrega = 5;
        break;
        case "Fragata":
        case "Três Vendas":
            taxaEntrega = 7;
        break;
        case "Laranjal":
            taxaEntrega = 10;
        break;
        default:
            taxaEntrega = 8;
    }
    alert(`Taxa R$${taxaEntrega.toFixed(2)}`);
~~~

O comando inicia com o *switch*, que usa como definição a variável que escolhe a condição a ser executada. Cada instrução deve contar um valor que é usado para comparação (seguida de ":"). Os comandos tem que ser finalizados pela palavra chave *break*, caso não encontrado no fim da condição fluxo tende a continuar a procurar mesmo que a condição seja satisfeita. No final encontramos o comando *default*, que serve para caso nenhuma das condições seja satisfeitas ele tem um valor padrão a ser executado e ele é finalizado.

#### Operador-Ternário

Existe uma outra maneira de se criar instruções if...else em JavaScript, que são conhecidas por operador ternário (três operandos) ou operador condicional. Ele consiste na realização de uma atribuição para uma variável com base na análise de uma condição.
Observer o exemplo:

```var categoria = idade >= 18 ? "Adulto" : "Juvenil;"```

A condição usada no exemplo acima, deve ser inserida após o sinal de atribuição (=). O primeiro valor após a interrogação (?) é atribuido à variável caso a condição seja verdadeira. e o segundo valor, após o ":", caso a condição seja falsa. A instrução anterior equivale à seguinte estrutura if...else:

~~~JavaScript
    if (idade >= 18) {
        var categoria = "Adulto";
    } else {
        var categoria = "Juvenil";
    }
~~~

Por ser considerado muito simples, o operador ternário é bastante utilizado e está disponível na maioria das linguagens de programação da atualidade.
#### Operadores-relacionais

Para definir as condições utilizadas nas estruturas condicionais, deve-se fazer uso dos operadores relacionais. Quando inseridos em um programa, cada comparação deve retornar *true* (verdadeiro) ou *false* (falso).

|**Símbolo**|**Significado**|
|-------|-----------|
|*==*|Igual. Retorna verdadeiro caso os dados contenham o mesmo conteúdo.|
|*!=*|Diferente. Retorna verdadeiro caso os dados contenham conteúdos diferentes.|
|*>*|Maior. Pode ser utilizado para comparar números ou palavras. Na comparação de palavras, a classificação alfabética é avaliada.|
|*<*|Menor. Também podem ser realizados comparações de número ou palavras.|
|*>=*|Maior ou igual. Os símbolos devem estar nesta ordem (>=).|
|*<=*|Menor ou igual. Tenha cuidado com a ordem dos símbolos (<=).|

Existem ainda os símbolos de *===* (estritamente igual) e *!==* (estritamente diferente).
Eles comparam também o tipo de dado em análise. Assim, `'5' === 5` retorna falso; e `'5' !== 5` retorna verdadeiro.



#### Operadores-Lógicos

|*Símbolo*|*Significado*|
|---------|-------------|
|*!*|Not. Indica negação. Inverte o resultado de uma comparação.|
|*&&*|And. Indica conjunção. Retorna verdadeiro quando todas as forem verdadeiras.|
|*||*|Or. Indica disjunção. Retorna verdadeiro se, no mínimo, uma das condições definidas for verdadeira.|

Vamos comparar os operadores lógicos utilizando tabelas que indicam os valores que cada comparação pode assumir, a fim de relacionar esses operadores. Para isso, faremos uso de uma tabela verdade - que é uma tabela com todas as possíveis combinações dos valores lógicos (verdadeiro ou falso) das proposições e dos conectivos (operadores lógicos) utilizados. A seguir, temos a representação de duas variáveis, cor e ano, e um valor que ela pode assumir na execução do programa.
Nas tabelas verdade, utilizamos uma letra, geralmente p e q, para representar uma proposição ("o carro é da cor azul", "o ano do carro é 2017").

~~~JavaScript
    var cor = "azul"; //(p)
    var ano = 2017; // (q)
~~~

A tabela abaixo representa a tabela verdade da negação, representada pelo símbolo *!*.

|**p**|**!p**|
|-----|------|
|V|F|
|F|V|

A negação é o mais simples dos operadores relacionais. Ela inverte o resultado (verdadeiro ou falso) de uma condição. Equivale ao sinal de diferente (!=) quando puder ser aplicada. Por exemplo, os testes a seguir realizam a mesma verificação.

~~~JavaScript
    if (!cor == "azul") {...}
    if (cor != "azul") {...}
~~~

A conjunção, representada pelos símbolos *&&*, reflete a ideia da simultaneidade.
A tabela abaixo expressa os valores resultantes para a proposiçoes p e q, usando a conjunção.

|**p**|**q**|**p&&q**|
|-----|-----|--------|
|V|V|V|
|V|F|F|
|F|V|F|
|F|F|F|

Na conjução, como observado na tabela, a expressão só retorna verdadeiro se todas as comparações forem verdadeiras. Se um cliente quer um carro azul e de 2017, ele só será atendido se as duas condições forem satisfeitas. São exemplos de condições utilizando *&&*.

~~~JavaScript
    if (cor == "azul" && ano == 2017) {...}
    if (cor == "cinza" && ano < 2017) {...}
    if (ano >= 2012 && ano <= 2017) {...}
    if (cor != "azul" && cor != "vermelho") {...}
~~~

Observe a sintaxe dos dois últimos exemplos. Quando uma mesma variável é utilizada na condição, ela deve ser repetida em cada comparação.
Já a disjunção (||) reflete uma noção de que pelo menos uma das condições deve ser verdadeira, para que o resultado seja verdadeiro. A tabela abaixo representa a disjunção.

|**p**|**q**|**p//q**|
|-----|-----|--------|
|V|V|V|
|V|F|V|
|F|V|V|
|F|F|F|

Nas condições, no mínimo uma das condições deve ser verdadeira. Agora, nosso cliente do exemplo quer um carro de cor azul ou de 2017. Qualquer carro em que uma dessas condições for verdadeira serva para esse cliente. Para criar a disjunção, utilize dois símbolos *||*.
São exemplos de condições que utilizam o operador *||*.

~~~JavaScript
    if (cor == "azul" || ano == 2017) {...}
    if (cor == "azul" || cor "branco") {...}
    if ((cor == "azul"|| cor == "branco") && ano == 2017) {...}
    if (cor == "azul" && (ano == 2016 || ano == 2017)) {...}
~~~


#### Desafios-cap3

1. *Elaborar um programa para uma escola que receba de um aluno duas notas e calcule a média, retorne para o aluno se ele foi reprovado ou aprovado*
    [Link da resolução do desafio](./Condicoes-cap3/ex3_1.html)

2. *Elaborar um programa para que receba os dados do usuário e retorne se ele está acima do peso ou dentro do peso para o seu biotipo a partir dos dados selecionados no fórmulario.*
    [Link da resolução do desafio](./Condicoes-cap3/ex3_2.html)

3. *Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas (no horário de verão na França), elaborar um programa que leia a hora no Brasil e informe a hora na França.*
    [Link da resolução do desafio](./Condicoes-cap3/ex3_4.html)

4. *Elaborar um programa que leia um número e calcule sua raiz quadrada. Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário, informe: "Não há raiz exata para..."*
    [Link da resolução do desafio](./Condicoes-cap3/ex3_5.html)

5. *Em um determinado momento do dia, apenas notas de 10, 50, 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50, 10 necessárias para pagar esse saque.*
[Link da resolução do desafio](./Condicoes-cap3/ex3_6.html)

#### Desafios-Finais-cap3

a. *Elaborar um programa que leia um número. Informe se ele é par ou ímpar.*
[Link da resolução do desafio](./Condicoes-cap3/resp3_a.html)

b. *Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa". Se a velocidade for de até 20% maior que a permitida, exiba "Multa leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave".*
[Link da resolução do desafio](./Condicoes-cap3/resp3_b.html)

c. *Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir).*
[Link da resolução do desafio](./Condicoes-cap3/resp3_c.html)

d. *Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triangulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2 lados iguals) e Escaleno (3 lados diferentes).*
[Link da resolução do desafio](./Condicoes-cap3/resp3_d.html)