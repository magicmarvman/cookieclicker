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

	RenderCookieCounter() {
		$('#cooks').html('<b>'+this.GetCookies()+'</b>');
	}
}

var StatisticData = {"ruin_the_fun":{"title":"Ruin the fun!","icon":"","description":"You ruined the fun by cheating ingame!"}};


class AchievementEngine {

	Earn(achievement) {
		alert("You earned the `"+StatisticData[achievement]["title"]+"`-Achievement!");
	}
}

class GamePlayEngine {

	Earn(cooks : int) {
		Game.Statistics.AddCookies(cooks);
	}



	RuinTheFun() {
		this.Achievements.Earn("ruin_the_fun");
	} 
}

class GameEngine {

	Achievements = new AchievementEngine();
	Statistics = new StatisticsEngine();
	Gameplay = new GamePlayEngine();

	Launch() {
		ReactDOM.render(
			<Cookie />,
			document.getElementById('cookie')
		);
	}
}

var Game = new GameEngine();

/* ============================================ */
/* | INTERFACE CONTROLLER 					  | */
/* ============================================ */

class CookieCounter extends React.Component {
	render() {
		return (
			<div class="cookie-counter">
				You clicked <span id="cooks"><b>0</b></span> cookies.
			</div>
		);
	}

	updateCounter() {
		this.forceUpdate();
	}
}

//

ReactDOM.render(
	<CookieCounter />,
	document.getElementById('cookiecounter')
);

//


class Cookie extends React.Component {

	handleClick() {
		Game.Statistics.AddCookies(1);
		CookieCounter.updateCounter;
		Game.Statistics.RenderCookieCounter();
	}

	render() {
		return (
			<div class="cookie">
				<img src="img/mm-cookie.png" onClick={this.handleClick} alt="I am the cookie!" />
			</div>
		);
	}

	
}
//


Game.Launch();
Game.RuinTheFun();
