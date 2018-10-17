module.exports = {
			post: function(req,res) {
			var rowData = req.body;
			req.oracleMobile.database.insert('Cloud-services', rowData).then(
				function success(result){
					res.status(result.statusCode).send(result.result);
				},
				function failure(error){
					res.status(error.statusCode).send(error.error);
				}
			);
		},
			
			getAll: function(req,res) {
			req.oracleMobile.database.getAll('Cloud-services', {fields: 'name'}).then(
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
			req.oracleMobile.database.get('Cloud-services', id).then(
				function success(result){
					res.status(result.statusCode).send(result.result);
				},
				function failure(error){
					res.status(error.statusCode).send(error.error);
				}
			);
		}
}