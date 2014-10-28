(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['books'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li> I am currently reading "
    + escapeExpression(((helper = (helper = helpers.book || (depth0 != null ? depth0.book : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"book","hash":{},"data":data}) : helper)))
    + " by "
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + " and it is awful </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.books : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['music'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.song || (depth0 != null ? depth0.song : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"song","hash":{},"data":data}) : helper)))
    + " by "
    + escapeExpression(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"artist","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.songs : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n\n";
},"useData":true});
})();
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
var music = {
songs: [
{song: 'Take Me to Church', artist: 'Hozier'},
{song: 'Thnks fr th Mmrs', artist: "Fall Out Boy"},
{song: 'Back in Black', artist: 'ACDC'}
]
};


var rendered= Handlebars.templates['music'];
$('.music').append(rendered(music));