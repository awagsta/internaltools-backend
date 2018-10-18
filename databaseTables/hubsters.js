module.exports = {
    post: function(req,res) {
			var rowData = req.body;
			req.oracleMobile.database.insert('Hubsters', rowData).then(
			function success(result){
				res.status(result.statusCode).send(result.result);
			},
			function failure(error){
				res.status(error.statusCode).send(error.error);
			}
		);
  },
    
    getAll: function(req,res) {
			req.oracleMobile.database.getAll('Hubsters', {fields: 'name'}).then(
			function success(result){
				res.status(result.statusCode).send(result.result);
			},
			function failure(error) {
				res.status(error.statusCode).send(error.error);
			}
		);
  },
    
     getId: function(req, res){
			var id = req.params.id;
			req.oracleMobile.database.get('Hubsters', id).then(
			function success(result){
				res.status(result.statusCode).send(result.result);
			},
			function failure(error){
				res.status(error.statusCode).send(error.error);
			}
		);
	},

	update: function(req, res){
        var rowData = req.body;
        req.oracleMobile.database.merge('Hubsters', rowData).then(
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
        req.oracleMobile.database.delete('Hubsters', id).then(
            function success(result){
                res.status(result.statusCode).send(result.result);
            },
            function failure(error){
                res.status(error.statusCode).send(error.error);
            }
        );
    }
}