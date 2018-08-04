var guests = require('../test.json');
var charactersJSON = require('../characters.json');
var theDevJSON = require('../theDev.json');


exports.home = function(req, res){
	var posts = guests;
	var cast = charactersJSON;
	res.render('home', {
		title: "Stranger Things",
		guests: guests.sample,
		characters: cast.params
	});
};

exports.characters =  function(req,res){
	var char_id = req.params.id;
	var cast = charactersJSON.params;

	if(char_id >=1 && char_id <=6){
		var char = cast[char_id -1];
		var name = char.characterName;
		res.render('char_info',{
		characters : cast,
		title : name,
		char: char
	});
	} else {
		res.render('notFound',{
			characters : cast,
			title : "Page not found!"
		});
	}

	
};

exports.about =  function(req,res){
	var info = theDevJSON.params[0];
	var char_id = req.params.id;
	var cast = charactersJSON.params;
	var name = info.fullname;
	var role = info.roles;
	var proj = info.project;
	var social = info.social;
	console.log(social);
	res.render('about', {
		characters : cast,
		title : name,
		info : info,
		roles: role,
		project : proj,
		social : social
	});
	
};

exports.notFound = function(req, res){
	var cast = charactersJSON.params;
	res.render('notFound',{
			characters : cast,
			title : "Page not found!"
	});
};
