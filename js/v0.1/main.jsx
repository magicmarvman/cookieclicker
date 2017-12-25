/* ============================================ */
/* | GAME ENGINE 							  | */
/* ============================================ */

class AchievementEngine {

	Earn(achievement) {
		alert("You earned the `"+achievement+"`-Achievement!");
	}
}

var Achievements = new AchievementEngine();

class GameEngine {

	Launch() {
		ReactDOM.render(
			<Cookie />,
			document.getElementById('cookie')
		);
	}

	RuinTheFun() {
		Achievements.Earn("You ruined the fun!");
	}
}

var Game = new GameEngine();

/* ============================================ */
/* | INTERFACE CONTROLLER 					  | */
/* ============================================ */

class Cookie extends React.Component {
	render() {
		return (
			<div class="cookie">
				<img src="img/mm-cookie.png" alt="I am the cookie!" />
			</div>
		);
	}
}
/* */


Game.Launch();
Game.RuinTheFun();
