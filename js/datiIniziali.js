const iconList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
// 2 creo un riferimento per i colori da creare per ogni type
const coloriPerFamiglia =
{
	animal: "blue",
	vegetable: "orange",
	user: "purple"
};

const cardsContainer = document.querySelector(".cards-container");
const selectFiltro = document.getElementById("select-filtro");

// 4 creo una funzione che mi selezioni il type di ogni oggetto per selezionarli nel select
function gruppoPerTipo(arrayDiOggetti) {
	// 5 creo un oggetto vuoto per raggrupare tutti i type disponibili (che in primis possono essere 3 
	// come in questo caso come possono essere 100)
	const listaDiGruppi = {};
	for (let i = 0; i < arrayDiOggetti.length; i++) {
		// in questo caso mi prendo il type di questo oggetto usando il destructuring 
		const { type, name, family, prefix } = arrayDiOggetti[i];
		// 6 se non esiste il gruppo all'interno della lista dei gruppi vado a creare un altro gruppo
		if (!listaDiGruppi[type]) {
			//  6.1 in questa maniera creo un array dentro l'oggetto
			// sto usando le chiavi dinamiche
			listaDiGruppi[type] = [];
		}
		// 6.1 non utilizzo l'array originale perchè se mai dovessi modificare un elemento all'interno di quell'array
		//  andrebbe a cambiare l'oggetto originale, invece facciamo lo spread operator ovvero ...iconList[] per clonarlo
		// listaDiGruppi[type].push(arrayDiOggetti[i]);
		listaDiGruppi[type].push({
			// ...arrayDiOggetti[i] non prendo tutte le chiavi ma solo alcune che mi interessano
			name,
			prefix,
			family,
			color: coloriPerFamiglia[type]
		});
	}
	return listaDiGruppi;
}
// mi salvo il risultato della funzione con l'array gia incluso
const iconeRaggrupate = gruppoPerTipo(iconList);

// iconeRaggrupate.animal[0].name = "alfre";
console.log(iconList);
console.log(iconeRaggrupate);


stampaCategoria(iconeRaggrupate);

function stampaCategoria(categoria) {
	for (let i = 0; i < categoria.length; i++) {
		const iconaSingola = categoria[i];
		// 1 posso utilizzare il destructuring
		// 2.1 aggiungo anche il type dell'oggetto per capire a quale appartiene
		const { name, prefix, family, color } = iconaSingola; //oppure di iconList[i]
		// const color = coloriPerFamiglia[type];
		cardsContainer.innerHTML +=
			// 1 dentro l'inner anziche scrivere iconaSingola.family 
			// 1 dopo il destructuring utilizzo soltanto la propietà presa col destructuring
			`
				<div class="card">
					<div class="card-icon" style="color: ${color}">
						<i class="${family} ${prefix + name}"></i>
					</div>
					<div class="card-text">
						<h6 style="margin: 10px;">${name}</h6>
					</div>
				</div> 
		`;
	}
}

function stampaMultipleCategorie(...daStampare) {
	cardsContainer.innerHTML = "";
	for (let i = 0; i < daStampare.length; i++) {
		const category = daStampare[i];
		stampaCategoria(iconeRaggrupate[category], category);

	}
}

stampaMultipleCategorie("animal", "vegetable", "user");
// creo una funzione per stampare in base al select del html
// uso iconaRaggrupate
function stampaPerSelect(listaDiGruppi) {
	let namesList = [];
	for (const key in listaDiGruppi) {
		namesList.push(key);
	}
	console.log(namesList);
	return namesList;
}
stampaPerSelect(iconeRaggrupate);

function creaHtmlOptions(gruppi) {
	for (let i = 0; i < gruppi.length; i++) {
		const nomeGruppo = gruppi[i];
		selectFiltro.innerHTML += `<option value='${nomeGruppo}'>${nomeGruppo}</option>`;
	}
}

const listaGruppi = stampaPerSelect(iconeRaggrupate);
creaHtmlOptions(listaGruppi);


selectFiltro.addEventListener("change", function () {
	const value = this.value;
	if (value === "all") {
		stampaMultipleCategorie(...listaGruppi);
	} else {
		stampaMultipleCategorie(value);
	}
});