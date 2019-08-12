var prueba = "prueba";
var loading = document.getElementById("loading");
var selectmoviebox = document.getElementById("selectmoviebox");
var selectmovie = document.getElementById("selectmovie");
var databox = document.getElementById("data-box");
var error_fetch = "Error. Intente mas Tarde...";
var error = document.getElementById("error");

var swapi = `https://swapi.co/api/`;

async function fetch_some_json(request){
	let data_return;
	data_return = await fetch(request)
		.then(function(response){
			return response.json();
		})
		.then(function(myjson) {
			console.log("el json es:")
			console.log(myjson);
			let datos = myjson;
			console.log("datos de fetch some json:");
			console.log(datos);

			return datos;

		})
		.catch(function(error) {
			console.log("Error en fetch");
			console.log(error);
			return error_fetch;
		})

		return data_return;
}


async function fetch_movie_list(){
	let request = swapi +`films/`;
	let datos = await fetch_some_json(request);
	console.log("datos de fetch movie list:")
	console.log(datos);
	return datos.results;
}


async function fetch_something_with_url(url){
	let request = url;
	let datos = await fetch_some_json(request);
	console.log("datos del fetch_something_with_url");
	console.log(datos);

	return datos;

}













async function load_movie_list(){
	let movie_list = await fetch_movie_list();
	console.log(movie_list);
	if(movie_list == error_fetch){
		error.textContent = movie_list;
	}
	else{
	movie_list.forEach(function(movie, i){
		console.log(movie);
		option = document.createElement("option");
		option.setAttribute('value', movie.url);
		console.log(i+1);
		option.appendChild(document.createTextNode(movie.title));
		selectmovie.appendChild(option);
	});	
	loading.classList.add("hidden");
	selectmoviebox.classList.remove("hidden");
	}
}


async function search_film(){
	/*revisar value select*/
	let indice = selectmovie.selectedIndex;
 	let value = selectmovie.options[indice].value;
	/*Buscar pelicula*/
	loading.classList.remove("hidden");

	let databoxfix = document.getElementById("data-box");
	if(databox.classList.contains("hidden")){
	}
	else{
		databoxfix.classList.add("hidden");
	}

	let movie = await fetch_something_with_url(value);
	/*cargar/mostrar datos resultado*/
	show_results(movie);
	loading.classList.add("hidden");
	databox.classList.remove("hidden");	
	

}

function show_results(movie){
	/*limpiar datos anteriores*/
	/*cargar datos de la pelicula en los campos correspondiendes*/
	show_results_movie_data(movie);
	show_results_characters_data(movie.characters);

}

function show_results_movie_data(movie){
	let moviebox = document.getElementById("movie-box");

	while(moviebox.firstChild) {
		moviebox.removeChild(moviebox.firstChild);
	}

	title_h2 = document.createElement("h2");
	title_h2.textContent = movie.title;
	moviebox.appendChild(title_h2);


}

function show_results_characters_data(characters_list){
	let characterbox = document.getElementById("character-box");
	while(characterbox.firstChild){
		characterbox.removeChild(characterbox.firstChild);
	}

	title_h2 = document.createElement("h2");
	title_h2.textContent = "Characters";
	characterbox.appendChild(title_h2);

	characters_list.forEach(async function(url_character){
		let character_item = await fetch_something_with_url(url_character);
		render_only_character(character_item, characterbox);
	});
}



function render_only_character(character, node_html){
	let text_name = document.createElement("h3");
	let text_height = document.createElement("p");
	let text_mass = document.createElement("p");
	let text_hair_color = document.createElement("p");
	let text_skin_color = document.createElement("p");
	let text_eye_color = document.createElement("p");
	let text_birth_year = document.createElement("p");
	let text_gender = document.createElement("p");

	text_name.textContent = character.name;
	node_html.appendChild(text_name);
	text_height.textContent = character.height;
	node_html.appendChild(text_height);
	text_mass.textContent = character.mass;
	node_html.appendChild(text_mass);
	text_hair_color.textContent = character.hair_color;
	node_html.appendChild(text_hair_color);
	text_skin_color.textContent = character.skin_color;
	node_html.appendChild(text_skin_color);
	text_eye_color.textContent = character.eye_color;
	node_html.appendChild(text_eye_color);
	text_birth_year.textContent = character.birth_year;
	node_html.appendChild(text_birth_year);
	text_gender.textContent = character.gender;
	node_html.appendChild(text_gender);
}