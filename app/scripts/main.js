
var music2 = {
songs: [
{song: 'Take Me to Church', artist: 'Hozier'},
{song: 'Thnks fr th Mmrs', artist: "Fall Out Boy"},
{song: 'Rude', artist: 'Who The Hell Cares?'},
{song: '1000 Miles', artist: 'Vanessa Carlton'},
{song: 'Shake It', artist: 'Taylor Swift'},
{song: 'Jurassic Park Theme Song', artist: 'Melodica Cover'},


]
};


var rendered= Handlebars.templates['music'];
$('.music').append(rendered(music2));



