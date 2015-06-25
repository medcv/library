//get all authors
exports.authorList = function(req, res){
var db=req.db;	
db.query('select * from tbl_author;', function(err, authoresults, fields) {
		  if (err) throw err;
		  res.render('author', { title: 'AUTHORS',
              authors: authoresults});
		  
		  //console.log({ title: 'BOOKS',
                        //books: results});
		});

};

// fetch author by name
exports.authorByName = function(req, res){
	var db=req.db;	
	var authname = req.param("authorName");
	console.log(authname);
	
	var query= 'select * from tbl_book join tbl_author on tbl_book.authId=tbl_author.authorId join tbl_publisher on tbl_book.pubId=tbl_publisher.publisherId where authorName= "'+ authname +'";';
	db.query(query, function(err, results, fields) {
			  if (err) throw err;
			 
			  res.render('author_details', { authorName:authname,
				                          authorDetails: results});
			  
			  console.log(results);
			});

	};