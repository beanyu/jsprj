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

class Menu extends React.Component{
	constructor(props){
		super(props);
		this.menu = this.props.menu;
		this.login = this.props.login
	}

	render(){
		return pug`
            nav#menu
                ul( class="links" )
                    li txt
        `;
	}
}

let menu_array = {
	'Home': 'index.html',
	'Landing': 'landing.html',
	'Generic': 'generic.html',
	'Elements': 'elements.html' 
};

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