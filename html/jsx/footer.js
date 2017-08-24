import React from 'react';

const footer_array = [
	{url:"#", style:"icon alt fa-twitter", content: "Twitter"},
	{url:"#", style:"icon alt fa-facebook", content: "Facebook"},
	{url:"#", style:"icon alt fa-instagram", content: "Insgram"},
	{url:"#", style:"icon alt fa-github", content: "Github"},
	{url:"#", style:"icon alt fa-linkedin", content: "LinkedIn"},
];

class VendorList extends React.Component{
	render(){
		const listItems = this.props.vendor.map( (item) => 
				<li key={item.content}>
					<a key={item.content} href={item.url} className={item.style}><span key={item.content} className="label">{item.content}</span></a>
				</li>
			);

		return(
			<ul className="icons">
				{listItems}
			</ul>
		);
	}
}

class Footer extends React.Component{
	render(){
		return (
			<footer id="footer">
				<div className="inner">
					<VendorList vendor={footer_array} />
					<ul className="copyright">
						<li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>
		);
	}
}


export default Footer;