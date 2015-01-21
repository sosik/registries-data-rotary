
var universalDaoModule = require('./../../../registries/build/server/UniversalDao.js');
var mongoDriver = require('./../../../registries/build/server/mongoDriver.js');
var config = require('./../../../registries/build/server/config.js');



console.log('initializing data');

mongoDriver.init(config.mongoDbURI, function(err) {
	if (err) {
		throw err;
	}

	console.log(mongoDriver.getDb);

	var _dao_portalMenu = new universalDaoModule.UniversalDao(mongoDriver, {
		collectionName : "portalMenu"
	});
	
	//console.log(_dao_portalMenu.find({}));
	//_dao_portalMenu.drop();

	var menu = { //"_id" : ObjectId("54b7ba4a88f3ae5f58701db2"), 
			"index" :
				{ "name" : "ROOT", "transCode" : null, "tags" : [ "homepage" ],
					"subElements" : [
						{ "name" : "O Rotary", "transCode" : null, "tags" : [ "about_rotary" ],
							"subElements" : [
								{ "name" : "O spoločenstve rotary", "transCode" : null, "tags" : [ "about_us" ], "subElements" : [ ] }, 
								{ "name" : "Rotary International", "transCode" : null, "tags" : [ "rotary_international" ], "subElements" : [ ] },
								{ "name" : "Rotary District 2240", "transCode" : null, "tags" : [ "rotary_district" ], "subElements" : [ ] }, 
								{ "name" : "Rotary Good News", "transCode" : null, "tags" : [ "rotary_good_news" ], "subElements" : [ ] } 
							]
						},
						{ "name" : "O klube", "transCode" : null, "tags" : [ "about_club" ],
							"subElements" : [
								{ "name" : "Vedenie klubu", "transCode" : null, "tags" : [ "management" ], "subElements" : [ ] },
								{ "name" : "Kontakt", "transCode" : null, "tags" : [ "contact" ], "subElements" : [ ] },
								{ "name" : "História klubu", "transCode" : null, "tags" : [ "historia" ], "subElements" : [ ] },
								{ "name" : "Schôdzky", "transCode" : null, "tags" : [ "meetings" ], "subElements" : [ ] }
							]
						},
						{ "name" : "Zoznam členov", "transCode" : null, "tags" : [ "members_list" ],
							"subElements" : [
								{ "name" : "Čestní členovia", "transCode" : null, "tags" : [ "special_members" ], "subElements" : [ ] }, 
								{ "name" : "Ako sa stať členom", "transCode" : null, "tags" : [ "membership" ], "subElements" : [ ] }
							]
						}, 
						{ "name" : "Projekty", "transCode" : null, "tags" : [ ], "subElements" : [ "projects" ] }, 
						{ "name" : "Fotogaleria", "transCode" : null, "tags" : [ ], "subElements" : [ "photogallery" ] },
						{ "name" : "Na stiahnutie", "transCode" : null, "tags" : [ ], "subElements" : [ "download" ] }
					]
				}
			}

	_dao_portalMenu.save(menu,function (err,data){

		console.log ('Menu saved');

		mongoDriver.close();
		});

});


