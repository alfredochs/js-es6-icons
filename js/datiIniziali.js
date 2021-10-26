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

for (let i = 0; i < iconList.length; i++) {
	const iconaSingola = iconList[i];
	// 1 posso utilizzare il destructuring
	// 2.1 aggiungo anche il type dell'oggetto per capire a quale appartiene
	const { name, prefix, family, type } = iconaSingola; //oppure di iconList[i]
	const color = coloriPerFamiglia[type];
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
// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone