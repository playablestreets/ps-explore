//TODO
//for further UI
// https://github.com/loneboarder/p5.experience.js
//https://github.com/bitcraftlab/p5.gui
//https://github.com/generative-light/p5.scribble.js

//TOUCH GUI
//https://github.com/L05/p5.touchgui
// early work but good to look at for touch interactions on mobile
//it works great actually
//https://editor.p5js.org/L05/sketches/LWfA8lGwe

// TODO
// interface to synths
// hue, alpha, normx, normy, duration
// interface to synth indexed by hue:
// alpha, normx, normy, duration;
// manually start audioContext.  Perhaps use an instructional splash screen...

'use strict';





	
	
getApi(this);

let dump = '';
//data is set from calling getApi() API
function setKidstruments(data) {
	let instruments = data;
	let i = 1;
	instruments.forEach((inst) => {
		inst.index = i++;
	} );
	
	// console.log(instruments);
	
	instruments.forEach(item => addItem(item));
	// console.log(dump);
}

function addItem(item){

	const colours = ["#3c0db0", "#f66174", "#ff8dc0", "#4db975", "#ffd259", "#ba89e0"	];

	// document.getElementById('info').innerHTML = instruments[currentInstrument].data.title[0].text + '\nby\n' + instruments[currentInstrument].data.name + ' \n(' + instruments[currentInstrument].index + ' of ' + instruments.length + ')';
	const div  = document.createElement('div');
	div.style.backgroundImage = 'url(' + item.data.instrumentimage.url + ')';
	// div.style.backgroundColor = colours[ Math.random() * colours.length];
	// console.log( colours[ Math.random() * colours.length()] );
	div.style.backgroundColor = colours[parseInt(Math.random() * colours.length)];
	div.className = 'item';
	// div.innerHTML = item.data.title[0].text + ', ' + item.data.name + ', ' + item.data.age + ', ' + item.data.postcode  ;
	div.innerHTML = (item.data.title[0].text).toUpperCase();
	dump = dump.concat(item.data.title[0].text + ', ' + item.data.name + ', ' + item.data.age + ', ' + item.data.postcode + '\n');
	
	const link = document.createElement('a');
	link.appendChild(div);
	
	link.href = 'http://kidstruments.playableweb.com/?' + item.uid;
	
	// div.appendChild(link);
	
	
	
	document.getElementById('items').appendChild(link);
}

function dumpLog(){
	console.log(dump);
}