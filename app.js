var autoNumberGenerate = Math.random()
var playerScore = autoNumberGenerate * 6
var playerScore1 = Math.floor(playerScore)
if (playerScore1 == 0) {
    alert("YOU'RE OUT")
}
alert(playerScore1)