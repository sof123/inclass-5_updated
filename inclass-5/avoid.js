window.onload = function() {
	var gameWon = false;
	var ctrlPressed = false;
	var btn = document.getElementById('btn')
	var div = document.getElementById('div')

	var gameReset = function() {
		gameWon = false
		div.style.display = 'none'
		btn.value = "Click Me"
		moveButton()
	}

	var winGame = function() {
		gameWon = true
		div.style.display = 'block';
		btn.value = "Play Again"
	}

	gameReset();

	var magicKey = 16;

	function randomDist() {
		return Math.random() * 40 * ( Math.random() > 0.5 ? 1 : -1 )
	}

	var computedStyle = window.getComputedStyle(btn)
	var btnWidth = computedStyle.width.replace('px','')
	var btnHeight = computedStyle.height.replace('px','')

	function moveButton() {
		var x = event.clientX + randomDist() * 10
		var y = event.clientY + randomDist() * 10
		btn.style.left = x + 'px'
		btn.style.top = y + 'px'
	}

	btn.onmouseover = function(event) {
		if (!ctrlPressed && !gameWon) {
			moveButton()
		}
	}

	btn.onclick = function() {
		if (gameWon) {
			gameReset()
		} else {
			winGame()
		}
	}

	document.onkeydown = function(event) {
		if (event.keyCode === magicKey) {
			ctrlPressed = true;
		}
	}

	document.onkeyup = function(event) {
		if (event.keyCode === magicKey) {
			ctrlPressed = false;
		}
	}
}
