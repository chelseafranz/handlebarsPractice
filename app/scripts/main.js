var library = {
  books : [
    { book: 'Moby Dick', author: 'Herman Melville' },
    { book: 'Great Expectations', author: 'Charles Dickens'},
    { book: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
  ]
};

// var source=$('#books').html();
// var template= Handlebars.compile(source);
// $'.books').html(template(data));

//grabbing the template string
// var template= $('#book').html();
//create handlebars function
// var rendered = Handlebars.templates['books'];
// $('#books').append(rendered(library));

//name of template is name of the tamplate file

//takes what is inside of our template, and creates a function that we can pass an object into

//append to my books elemet
// 
var music2 = {
songs: [
{song: 'Take Me to Church', artist: 'Hozier'},
{song: 'Thnks fr th Mmrs', artist: "Fall Out Boy"},
{song: 'Back in Black', artist: 'ACDC'}
]
};


var rendered= Handlebars.templates['music'];
$('.music').append(rendered(music2));



