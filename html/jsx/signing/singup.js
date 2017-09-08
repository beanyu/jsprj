"use strict"
import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component{
	render(){
		return(
				<div className="inner">
					<header className="major">
						<h1> Sign Up </h1>
					</header>
				</div>
			);
	}
}

const div = document.getElementById('signup');
ReactDOM.render(
	<Header />, div
);