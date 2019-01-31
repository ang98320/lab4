exports.viewProject = function(req, res) {
	var name = req.param.name;
	console.log("The project name is: " + name);
	res.render("project", {
		"projectName": name
	});
};
