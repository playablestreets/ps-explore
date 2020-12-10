
'use strict';

	
// getApi(this);

let dump = '';
//data is set from calling getApi() API
// function setKidstruments(data) {
// 	let instruments = data;
// 	let i = 1;
// 	instruments.forEach((inst) => {
// 		inst.index = i++;
// 	} );
	
// 	// console.log(instruments);
	
// 	instruments.forEach(item => addItem(item));
// 	// console.log(dump);
// }

let type = getUrlName();

if(type != 'kidstrument' && type != 'faces_and_places'){
	type = 'kidstrument';
}
console.log('type: ', type);
//------------------------------------------------------------------
//GET DYNAMIC DATA
//------------------------------------------------------------------
//CALL PRISMIC API
getFromApi(type, dataCallback); //returns to setKidstruments()

//SET DYNAMIC DATA FROM PRISMIC
function dataCallback(data) {
	console.log('received ', data.length, ' results' );
	// console.log(data);
	data.forEach((item) => {
		console.log(item);
		addItem(item);
	});

	// setState('ready');
}

function addItem(item){

	const colours = ["#3c0db0", "#f66174", "#ff8dc0", "#4db975", "#ffd259", "#ba89e0"	];

	// document.getElementById('info').innerHTML = instruments[currentInstrument].data.title[0].text + '\nby\n' + instruments[currentInstrument].data.name + ' \n(' + instruments[currentInstrument].index + ' of ' + instruments.length + ')';
	const div  = document.createElement('div');

	if(type === 'kidstrument') div.style.backgroundImage = 'url(' + item.data.instrumentimage.url + ')';
	else if(type === 'faces_and_places') div.style.backgroundImage = 'url(' + item.data.face_image.url + ')';
	// div.style.backgroundColor = colours[ Math.random() * colours.length];
	// console.log( colours[ Math.random() * colours.length()] );
	div.style.backgroundColor = colours[parseInt(Math.random() * colours.length)];
	div.className = 'item';
	// div.innerHTML = item.data.title[0].text + ', ' + item.data.name + ', ' + item.data.age + ', ' + item.data.postcode  ;
	div.innerHTML = (item.data.title[0].text).toUpperCase();
	dump = dump.concat(item.data.title[0].text + ', ' + item.data.name + ', ' + item.data.age + ', ' + item.data.postcode + '\n');
	
	const link = document.createElement('a');
	link.appendChild(div);
	
	if(type === 'kidstrument') link.href = 'http://kidstruments.playableweb.com/?' + item.uid;
	else if(type === 'faces_and_places') link.href = 'http://fp.playableweb.com/?' + item.uid;
	
	// div.appendChild(link);
	
	
	
	document.getElementById('items').appendChild(link);
}

function dumpLog(){
	console.log(dump);
}