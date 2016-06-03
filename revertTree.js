function plainJSON(root, node, queue, level) {
	var nodeIndex = -1;

	queue.push({
		level: level,
		self: root
	});
	if (!!root.children) {
		root.children.map((child) => {
			const i = plainJSON(child, node, queue, level + 1);
			if (i >= 0) nodeIndex = i;
		})
	}
	if (root === node) {
		nodeIndex = queue.length - 1;
	}
	return nodeIndex;
}

function removeChildren(parent, child) {
	if (!parent.children) return -1;
	const index = parent.children.indexOf(child);
	(index >= 0) && parent.children.splice(index, 1);
	return index;
}


module.exports = function (data, node) {
	const queue = [];
	const qIndex = plainJSON(data, node, queue, 0);
	if (qIndex < 0) return null;

	const keyNodeLevel = queue[qIndex].level;

	var levelCursor = keyNodeLevel - 1;
	var nodePath = [qIndex];

	for (var i = qIndex - 1; i >= 0; i--) {
		if (queue[i].level === levelCursor) {
			levelCursor--;
			nodePath.push(i);
		}
	}
	for (var i = 0, until = nodePath.length - 1; i < until; i++) {
		debugger
		var parent = queue[nodePath[i + 1]].self,
			  child = queue[nodePath[i]].self;
		removeChildren(parent, child);
		child.children = child.children || [];
		child.children.push(parent);
	}
	return queue[qIndex].self;
}