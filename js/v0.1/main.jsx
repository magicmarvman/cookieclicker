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
		
	}
}

var StatisticData = {"ruin_the_fun":{"title":"Ruin the fun!","icon":"","description":"You ruined the fun by cheating ingame!"}};


class AchievementEngine {

	Earn(achievement) {
		alert("You earned the `"+StatisticData[achievement]["title"]+"`-Achievement!");
	}
}

class CookieSkinManager {

	skinUrl : string;

	Reload() {
		var cookies = Game.Statistics.GetCookies();
	}

	GetSkinUrl() {

	}
}

class GamePlayEngine {

	Earn(cooks : int) {
		Game.Statistics.AddCookies(cooks);
		$('#cooks').html('<b>'+Game.Statistics.GetCookies()+'</b>');
	}



	RuinTheFun() {
		Game.Gameplay.Earn(99999999999999);
		Game.Achievements.Earn("ruin_the_fun");
	} 
}

class GameEngine {

	Achievements = new AchievementEngine();
	Statistics = new StatisticsEngine();
	Gameplay = new GamePlayEngine();

	Log(wtl : string) {
		console.log(wtl);
	}

	Launch() {

		ReactDOM.render(
			<Console />,
			document.getElementById('consoleField')
		);
		this.Log("Game launched!");
		this.Log("Test");
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

class Console extends React.Component {

	render() {
		return(
			<textarea id="console" disabled="disabled"></textarea>
		);
	}
}

//
//

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
		Game.Gameplay.Earn(1);
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


class Bootstrap {
	constructor() {

	}

	LOAD() {
		Game.Launch();
	}


}

var Bootstrap = new Bootstrap();
Bootstrap.LOAD();
