import React from 'react';

class Wrapper extends React.Component{
	render(){
		return pug`
            header#header( class='alt' )
            	a( href='index.html', class='logo' ) #[strong KRP Demo] #[span by Bean]
            	nav 
            		a( href='#menu' ) menu
        `;
	}
};

export default Wrapper;