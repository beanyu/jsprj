import React from 'react';
import Main from './main';
import Contact from './contact'
import Footer from './footer'

const menu_array = [
	{title:'Home', url: 'index.html'},
	{title:'Landing', url: 'landing.html'},
	{title:'Generic', url: 'generic.html'},
	{title:'Elements', url: 'elements.html'}
];

const log_array = {
	'Get Started': 'button special fit',
	'Log In': 'button fit'
};

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
					{this.props.menu.map((items) => {
							<li key={items.title}>{items.title}</li>
						}
					)}
				</ul>
			</nav>
		);
	}
}

class Banner extends React.Component{
	render(){
		return pug`
            section#banner( className="major" )
                div(className="inner")
                    header(className="major")
                        h1 Hi, my name is Bean
                    div(className="content")
                        p A responsive site template designed by HTML5 UP #[br] and released under the Creative Commons.
                        ul(className="actions")
                            li #[a(href="#one", className="button next scrolly") Get Started]
        `;
	}
}

class Wrapper extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Menu menu={menu_array} login={log_array} />
				<Banner />
				<Main />
				<Contact />
				<Footer />
			</div>
		)
	}
};

export default Wrapper;