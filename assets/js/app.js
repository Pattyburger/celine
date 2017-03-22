var i;

$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:celine%20dion&type=album"
}).done(function(res1){
	console.log(res1);

});

$.ajax({
	url:"https://api.spotify.com/v1/albums/55UPmpHLvZKGgTPUD1woES"
}).done(function(res2){
	console.log(res2);
	let html = `<p><audio controls><source src="${res2.tracks.items[0].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album0').innerHTML = html;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/6Po5zdKMIH5Xk99vjXyQpC"
}).done(function(res3){
	console.log(res3);
	let html2 = `<p><audio controls><source src="${res3.tracks.items[1].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album1').innerHTML = html2;
});

$.ajax({
	url:"https://api.spotify.com/v1/albums/5QN7mdrNquAGx37ixtQnLO"
}).done(function(res4){
	console.log(res4);
	let html3 = `<p><audio controls><source src="${res4.tracks.items[2].preview_url}" type="audio/ogg"><audio></p>`;

	document.querySelector('#album2').innerHTML = html3;
});