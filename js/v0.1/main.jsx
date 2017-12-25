/* ============================================ */
/* | GAME ENGINE 							  | */
/* ============================================ */

class Achievements {

	Earn(achievement) {
		alert("You earned the `"+achievement+"`-Achievement!");
	}
}

class GameEngine {

	this.Achievements = new Achievements();

	Launch() {
		ReactDOM.render(
			<Cookie />,
			document.getElementById('cookie')
		);
	}

	RuinTheFun() {
		this.Achievements.Earn("You ruined the fun!");
	}
}

var Game = new GameEngine();
Game.Launch();
Game.RuinTheFun();

/* ============================================ */
/* | INTERFACE CONTROLLER 					  | */
/* ============================================ */

class Cookie extends React.Component {
	render() {
		return (
			<div class="cookie">
				<img src="img/cookie.png" alt="I'm the cookie!' />
			</div>
		);
	}
}