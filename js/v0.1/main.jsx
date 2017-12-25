/* ============================================ */
/* | GAME ENGINE 							  | */
/* ============================================ */

class StatisticsEngine {

	cookies : int;
	achievements : int;

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


class AchievementEngine {

	Earn(achievement) {
		alert("You earned the `"+achievement+"`-Achievement!");
	}
}

class GameEngine {

	Achievements = new AchievementEngine();
	Statistics = new StatisticsEngine();

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

/* ============================================ */
/* | INTERFACE CONTROLLER 					  | */
/* ============================================ */

class Cookie extends React.Component {
	
	handleClick() {
		Game.Statistics.AddCookies(1);
	}

	render() {
		return (
			<div class="cookie">
				<img src="img/mm-cookie.png" onClick={this.handleClick} alt="I am the cookie!" />
			</div>
		);
	}

	
}
/* */


Game.Launch();
Game.RuinTheFun();
