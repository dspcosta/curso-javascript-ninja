


let teste1 = function () {
	
	

	let body = document.querySelector('body');
	let p = document.createElement('p');

	body.appendChild(p);
	document.querySelector('p').classList.add('teste');
	let id = document.querySelector('.teste');


	console.log(body);
	console.log("Provando que está functionando.");

	id.innerHTML = `provando que está functionando.
	 olha a table ai:<br>

	 <table>
	 	<thead> 
			<tr>
	 			<td>Head1</td>
	 			<td>head2</td>

	 		</tr>
	 	</thead
	 	<tbody>
	 	
	 	<tr>
	 		<td>Linha 1</td>
	 		<td>Linha 1</td>

	 	</tr>
	 	<tr>
	 		<td>Linha 2</td>
	 		<td>Linha 2</td>

	 	</tr>

	 	</tbody>

	 </table>`;


};

teste1();


