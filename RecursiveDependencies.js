function getDependencies(tree) {
	function getDependenciesRecursive(tree, deps) {
		tree = Object.assign({}, tree);

		//console.log(tree, deps, ++count);
		//(typeof tree === 'undefined') || 
		if ((typeof tree !== 'object') || !tree.dependencies || Object.entries(tree.dependencies).length === 0) {
			return deps;
		}
		var entries = Object.entries(tree.dependencies);

		var firstDepName = entries[0][0];
		var firstDepVal = entries[0][1];
		var currentDep = firstDepName + '@' + firstDepVal.version;

		if (deps.indexOf(currentDep) === -1) deps.push(currentDep);

		if (firstDepVal.dependencies) {
			getDependenciesRecursive(firstDepVal, deps)
		}
		delete tree.dependencies[firstDepName];
		return getDependenciesRecursive(tree, deps);
	}
	var dependents = [];
	try {
	getDependenciesRecursive(tree, dependents);
	} catch (err) {
		console.log(err);
	}

	console.log(JSON.stringify(dependents));
	return dependents; 
}

module.exports = getDependencies;
