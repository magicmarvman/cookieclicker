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


var AlertID = 0;
class GameEngine {

	Achievements = new AchievementEngine();
	Statistics = new StatisticsEngine();
	Gameplay = new GamePlayEngine();
	NewestAlertId : int = 1;

	Log(wtl : string) {
		console.log(wtl);
	}

	ShowAlert(al : string) {
		AlertID = AlertID+1;
		$('.alertFrame').append("<div id=\"alert"+AlertID+"\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>Holy guacamole!</strong> "+al+"</div>");
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


class GameBootstrap {
	constructor() {

	}

	LOAD() {
		Game.Launch();
		Game.ShowAlert('Game launched!');
	}


}

var Bootstrap = new GameBootstrap();
Bootstrap.LOAD();
