📓 Aula 04

# API

Um local onde conseguimos consumir informações de determinado banco de dados.  
Responde com as rotas daquilo que queremos usar.  

# JSON

Arquivo usado para poder transitar informações. 

  ## Sintax

  A sintaxe utulizada é muito semelhante ao de um objeto no javascrit, o que difere é que as propriedades precisam de aspas.
  ```JSON
  {
    "prop": "valor",
    "stirng": "texting",
    "number": 100,
    "boolean": true,
    "array": [],
    "object": {},
    "last-prop": "can't coma in last",
  }
  ```

## fetch( )

É uma função no javascrit responsável por buscar as respostas de determinada url. Essas informações ficam armazenadas em um objeto.  
Após fazer essa busca, aciona-se a promise com a resposta, em caso de satisfatório, a reposta deve ir para o `.then( )` e aí ser transformado de objeto para .json

## Arrow Functions

*função extensa*

  ```JS
    function funcName(argument){
      //code
    }
  ```
  ```JS
    /* sem argumento*/
    () => {/*code*/}

    /* com um argumento */
    argument=>{/*code*/}

    /* com dois argumentos */
    (arg1, arg2) => {/*code*/}
  ```