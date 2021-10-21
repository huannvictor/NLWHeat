📓 Aula 03

# Javascript

- é uma linguagem de programação
  - numa linguagem de programação nós recebemos e passamos dados de um local para outro, através de **variáveis**
  - precisamos informar quais são esses dados
    - string
    - number
    - integer
    - boolean
    - NaN
    - null
  - as variáveis podem ser
    - simples: 
      ```JS
        const = 'valor'
      ```
    - ou em valores estruturados: 
 
      - vetor
      ```JS
        const array = ['valor', true, 12, 1.2, null]
      ```
      - objeto
      ```JS 
        const object = {
            string: 'valor', 
            number: 100,
            data: true,
        }
      ```
  - as boas práticas defendem que nós devemos nomerar os termos de forma descritiva e intuitiva. Além disso, escrevê-los em inglês para que qualquer dev do mundo possa entender nosso código.
  - **const**
    - declara a variável que não muda
  - **let**
    - declara a variável que pode receber noso valores

  ## Fuctions
  
    ```JS
    function nameFunction(){
      //action
    }
    nameFunction()
    ```

  Toda função é uma ação relacionada a algum dado no código do Javascript.

  Quando se declara uma função, é armazenado na memória essa ação e somente quando chamamos a função _*`function()`_ dentro do script, a ação é execututada.

  ## DOM - Document Object Model

  O user agent _(navegador)_ cria um mapeamento dos objetos que existem no site. E através do Javascript conseguimos manipulá-los.

  ## Acessando id

  ```JS
  document.getElementById('nameId').textContent = 'novo valor'
  /* Ou */
  nameId.textContent = 'novo valor'
  ```
  Esse "shorthand" só vai funcionar para id's. Classes e outros seletores, não funciona.

  ## Laço de Repetição

  Uma função nativa do javascrit que repete o código até receber uma instrução, que geralmente é quando algum valor foi dado como satisfatório.

  ## For ( )

  Uma função que repete uma ação na quantidade de vezes que informamos.

  Todo `for( )` precisa de: inicio, final e a ação que vai fazer a cada repetição

  ```JS
    for(let i = 0; i<=10; i++){
      //ação
    }
  ```
    `let 1 = 0;` → primeira instrução, cria o contador/parâmetro inicial.  
    `i <= 10;` → informa a condição de quando parar a repetição, sempre será usado um operador de comparação.  
    `i++` → cria o incremento que será atribuido a cada repetição a fim de atingir a condição como satisfatória.  

  Podemos usar como referência uma tag com um id dentro do código HTML como contador da função ```for()```.  
  Lembrando que o JS consegue identificar [id's](##Acessando-id).

  ```JS
    for(let contItems of idName.children){
      console.log(contItems)
    }
  ```
    `let contItems` → variável que vai receber os dados do elemento HTML a cada look do `for()`. Esá para o `let 1 = 0;`.  
    `of idName.children` → informa o elemento HTML como a referência para o `for()`. Esá para `i<=10; i++`.  
