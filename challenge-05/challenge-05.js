/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var array = [5, "Daniel", undefined, 3, true];
console.log(array);
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function recebeArray (array) {
	return array;
}

console.log(recebeArray(array));
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(recebeArray(array)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function arrayPosicao (array, posicao) {
	var posicao = array[posicao];
	return posicao;
}

console.log(arrayPosicao(array, 3));
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var arrayTipos = [5, 'Daniel', true, undefined, NaN];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
for (var i = 0; i < 5; i++) {
	valorArray = arrayPosicao(arrayTipos, i);
	console.log(valorArray);
};
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book (nomeLivro = null) {

	livros = {
		'livro1': {
		quantidadePaginas: 50,
		autor: 'Roberto',
		editora: 'Martin Fontes'}
		, 
		'livro2': {
		quantidadePaginas: 200,
		autor: 'Daniel',
		editora: 'Saraiva'}
		, 
		'livro3': {
		quantidadePaginas: 300,
		autor: 'Carol',
		editora: 'Darkside'}
	}


	console.log(nomeLivro);

	if (nomeLivro == null) {
	return livros;
	}else{
	return livros[nomeLivro];

	}

}

console.log(book());
console.log(book('livro1'));
	
	


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log('O livro livro1 tem ' + book('livro1').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
