/* ============================================ */
/* | GAME ENGINE 							  | */
/* ============================================ */

class GameEngine {

	Launch() {
		alert("Game launched!");
	}

	RuinTheFun() {
		alert("You ruined the fun!");
	}
}

var Game = new GameEngine();
Game.Launch();
Game.RuinTheFun();