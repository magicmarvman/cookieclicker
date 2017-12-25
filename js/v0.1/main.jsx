/* ============================================ */
/* | GAME ENGINE 							  | */
/* ============================================ */

class StatisticsEngine {

	var cookies : int;
	var achievements : int;

	constructor() {
		this.cookies = 0;
		this.achievements = 0;
	}

	GetCookies() {
		return this.cookies;
	}

	SetCookies(cooks : int) {
		this.cookies = cooks;
	}

	AddCookies(cooks : int) {
		this.SetCookies(this.GetCookies()+cooks);
	}

	GetAchievements() {
		return this.achievements;
	}

	SetAchievements(cooks : int) {
		this.achievements = cooks;
	}

	AddAchievement(cooks : int) {
		this.SetAchievements(this.GetAchievements()+cooks);
	}
}

var Statistics = new StatisticsEngine();

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

	handleClick() {

	}
}
/* */


Game.Launch();
Game.RuinTheFun();
