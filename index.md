





  *OBSERVAÇÕES NA CONSTRUÇÃO DO CÓD JS*
#VARIÁVEIS (exemplo de 2 tipos em JS)
  1.let ('let it change' = DEIXE MUDAR) - posso alterar o valor
  2.const (constante) - não pode mudar o valor da variável 
  exemplo:
  
  -let estaChovendo = true
  -const meuNome = "Mayk" - exemplo de dado de texto, uma string, uma cadeia   de caracteres

#Tipos de Dados
  1.string (pode conter " " ou ' ')
  2.number
      -integer - números inteiros (+ -) 33 ou -33
      -float - números flutuantes, 'quebrados' (+ -) 12.7 ou -12.7
  3.boolean
      -true ou false
      -undefined - dado INDEFINIDO

#Operadores
  1.atribuição, exemplo: let n1 = 12
                         let n2 = 3
  2.aritiméticos (* / + -) exemplo: console.log (12 * 4) ou (12 / 4)
                                    console.log(true / 4) true= 1
                                    console.log(false / 4) false = 0
                                    ao JS idenficar que há um operador matemático fará atribuição de 1 para TRUE e 0 para FALSE.
  3.concatenação - console.log ("12" + 4) = 124 como resultado.
    essa junção da string "12" + 4 chama-se CONCATENAÇÃO.
    a CONCATENAÇÃO ocorre porque há uma string ("12") e um operador de 
    soma (+)
#Condicionais (if/else)
  const idade = 17
  const maiorDeDezoito = idade >= 18

  if(maiorDeDezoito) {
    alert("Pode tirar a carteira de motorista")
  } 
  else {
  alert("Não pode tirar a carteira")
  }

#Estrura de Dados
  (array/lista) array é uma lista, ex:

     índice do array     0     1    2  3
  const temperaturas = [23.3, 32.2, 1, 5]
  para acessar o(s) arrays -> console.log(temperaturas[1])
                              acessando o índice 1 = 32.2

  (objetos)

  A constante abaixo receberá PROPRIEDADE E VALOR

    const pessoa = {
    nome: "Mayk"
    idade: 38
    filhos: ["K", "E", "T"]
  }
  exemplo de string no array - filho: [João, Maria, Pedro]

  (função) 
  pode-se executar um bloco de códigos várias vezes; reuso de código.

  1º etapa de uma função é sua criação; 
  Palavra-chave + nome da função, exemplo abaixo:

  function nomeDaFuncao() {
    console.log('código detro da função)
  }

  (parâmetros da função)
  a função poderá, ou não, receber parâmetros. Exemplo:

  function soma(a,b) {
    console.log (a + b)
  }
  soma(34, 45) = 79

#Extensões da Linguagem
Math.randon - números randômicos
Math.floor - arredondamento para baixo
Math.ceil - arredondamento para cima

#DOM - Document Object Model
      transforma tudo que é do documento em objeto.

 

  


      
  


