class Cookie extends React.Component {
	render() {
		return(
			<div class="cookie">
				<h1>Cookie {this.props.cookieName}</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<Cookie />,
	document.getElementById('root')
);