module.exports = {
    post: function (req,res) {
        var rowData = req.body;
        req.oracleMobile.database.insert('Industries', rowData).then(
            function success(result){
                res.status(result.statusCode).send(result.result);
            },
            function failure(error){
                res.status(error.statusCode).send(error.error);
            }
        );
    },
    
    getAll: function (req,res) {
        req.oracleMobile.database.getAll('Industries').then(
            function success(result){
                res.status(result.statusCode).send(result.result);
            },
            function failure(error) {
                res.status(error.statusCode).send(error.error);
            }
        );
    },

    getId: function(req,res){
		var id = req.params.id;
		req.oracleMobile.database.get('Industries', id).then(
			function(result){
				res.status(result.statusCode).send(result.result);
			},
			function(error){
				res.status(error.statusCode).send(error.error);
			}
		);
    },
    
    update: function(req, res){
        var rowData = req.body;
        req.oracleMobile.database.merge('Industries', rowData).then(
            function success(result){
                res.status(result.statusCode).send(result.result);
            },
            function failure(error){
                res.status(error.statusCode).send(error.error);
            }
        );
    },

    delete: function(req, res){
        var id = req.params.id;
        req.oracleMobile.database.delete('Industries', id).then(
            function success(result){
                res.status(result.statusCode).send(result.result);
            },
            function failure(error){
                res.status(error.statusCode).send(error.error);
            }
        );
    }
}