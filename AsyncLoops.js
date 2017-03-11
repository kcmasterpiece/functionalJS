function loadUsers(userIds, load, done) {
	var users = []
	//for (var i = 0; i < userIds.length; i++) {
		//users.push(load(userIds[i]))
	//}
	function usersCB(user) {
		if (user) users.push(user);
		if (element == userIds[userIds.length-1]) return done(users); 

	}

	userIds.forEach(function (element) { 
		load(element, usersCb);
	
	});
	


	//return done(users)
}
module.exports = loadUsers

