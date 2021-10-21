- [x] Aula 03

# Javascript

- é uma linguagem de programação
  - numa linguagem de programação nós "recebemos-passamos dados" de um local para outro, através de **variáveis**
  - precisamos informar quais são esses dados
    - string
    - number
    - integer
    - boolean
    - NaN
    - null
  - as variáveis podem ser
    - simples: 
      ```javascript
        const = 'valor'
      ```
    - estruturado: 
 
      - vetor
      ```javascript
        const array = ['valor', true, 12, 1.2, null]
      ```
      - objeto
      ```javascript 
        const object = {
            string: 'valor', 
            number: 100,
            data: true,
        }
      ```
        - funções
        ```javascript
        function nameFunction(){
          //action
        }
        nameFunction()
        ```
  - as boas práticas defendem que nós devemos nomerar os termos de forma descritiva e intuitiva. Além disso, escrevê-los em inglês para que qualquer dev do mundo possa mexer no código.
  - **const**
    - declara a variável que não muda
  - **let**
    - declara a variável que pode receber noso valores

  ## Fuctions
  
  Toda função é uma ação relacionada a algum dado no código do Javascript.

  Quando se declara uma função, é armazenado na memória essa ação e somente quando chamamos a função _*```function()```_ dentro do script, a ação é execututada.

  ## DOM - Document Object Model

  O user agent _(navegador)_ cria um mapeamento dos objetos que existem no site. E através do Javascript conseguimos manipulá-los.

  ## Acessando id's

  ```javascript
  document.getElementById('nameId').textContent = 'novo valor'
  /* Ou */
  nameId.textContent = 'novo valor'
  ```
  Esse "shorthand" só vai funcionar para id's. Classes e outros seletores, não funciona.

## Laço de Repetição

Uma função nativa do javascrit que repete o código até receber uma instrução, que geralmente é quando algum valor foi dado como satisfatório.

## For ( )
```javascritp
  for(let i = 0; i<=10; i++ >){}
```
