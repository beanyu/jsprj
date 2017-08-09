import React from 'react';

class SectionOne extends React.Component{
	render(){
		return (
			<section>
				<form method="post" action="#" onSubmit="">
					<div className="field half first">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div className="field half">
						<label htmlFor="email">Email</label>
						<input type="text" name="email" id="email" />
					</div>
					<div className="field">
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" rows="6"></textarea>
					</div>
					<ul className="actions">
						<li><input type="submit" value="Send Message" className="special" /></li>
						<li><input type="reset" value="Clear" /></li>
					</ul>
				</form>
			</section>
		);
	}
}

class SectionTwo extends React.Component{
	render(){
		return (
			<section className="split">
				<section>
					<div className="contact-method">
						<span className="icon alt fa-envelope"></span>
						<h3>Email</h3>
						<a href="#">information@untitled.tld</a>
					</div>
				</section>
				<section>
					<div className="contact-method">
						<span className="icon alt fa-phone"></span>
						<h3>Phone</h3>
						<span>(000) 000-0000 x12387</span>
					</div>
				</section>
				<section>
					<div className="contact-method">
						<span className="icon alt fa-home"></span>
						<h3>Address</h3>
						<span>1234 Somewhere Road #5432<br />
						Nashville, TN 00000<br />
						United States of America</span>
					</div>
				</section>
			</section>
		);
	}
}

class Contact extends React.Component{
	render(){
		return (
			<section id="contact">
				<div>
					<SectionOne />
					<SectionTwo />
				</div>
			</section>
		);
	}
}

export default Contact;