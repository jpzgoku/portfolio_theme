export default {

	clearBoard() {
		var tds = document.getElementsByTagName('TD');
		for (let i = 0; i < tds.length; i++) {
			for (var arg in arguments) {
				tds[i].classList.remove(arguments[arg]);
			}
		}
	}

}
