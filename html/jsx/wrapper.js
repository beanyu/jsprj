import React from 'react';

class Header extends React.Component{
	render(){
		return pug`
            header#header( class='alt' )
            	a( href='index.html', class='logo' ) #[strong KRP Demo] #[span by Bean]
            	nav 
            		a( href='#menu' ) menu
        `;
	}
}

class Menu extends React.Component{  //react-pug not support interpolation syntax
	render(){
		return (
			<nav id="menu">
				<ul>
					{this.props.menu.map((items) =>
						<li key={items.title}>{items.title}</li>
					)}
				</ul>
			</nav>
		);
	}
}

let menu_array = [
	{title:'Home', url: 'index.html'},
	{title:'Landing', url: 'landing.html'},
	{title:'Generic', url: 'generic.html'},
	{title:'Elements', url: 'elements.html'}
];

let log_array = {
	'Get Started': 'button special fit',
	'Log In': 'button fit'
};

class Wrapper extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Menu menu={menu_array} login={log_array} />
			</div>
		)
	}
};

export default Wrapper;