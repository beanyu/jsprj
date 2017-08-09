import React from 'react';

const article_array = [
	{img: "images/pic01.jpg", url: "landing.html", title: "Aliquam", description: "Ipsum dolor sit amet" },
	{img: "images/pic02.jpg", url: "landing.html", title: "Tempus", description: "feugiat amet tempus" },
	{img: "images/pic03.jpg", url: "landing.html", title: "Magna", description: "Lorem etiam nullam" },
	{img: "images/pic04.jpg", url: "landing.html", title: "Ipsum", description: "Nisl sed aliquam" },
	{img: "images/pic05.jpg", url: "landing.html", title: "Consequat", description: "Ipsum dolor sit amet" },
	{img: "images/pic06.jpg", url: "landing.html", title: "Etiam", description: "Feugiat amet tempus" }
];

class SpanHeadView extends React.Component{
	render(){
		return (
			<article>
				<span className="image">
					<img src={this.props.article.img} alt="" />
				</span>
				<header className="major">
					<h3><a href={this.props.article.url} className="link">{this.props.article.title}</a></h3>
					<p>{this.props.article.description}</p>
				</header>
			</article>
		);
	}
}

class ScopeOne extends React.Component{
	render(){
		let uints = [];
		this.props.article.forEach( (item) => {
			uints.push( <SpanHeadView article={item} key={item.title} /> );
		});

		return (
			<section id="one" className="tiles">
				{uints}
			</section>
		);
	}
};

class ScopeTwo extends React.Component{
	render(){
		return pug`
            section#two
                div(className="inner")
                    header(className="major")
                        h2 Warriors of the night, assemble!
                    p Storm, Earth, and the air, heed my call!Storm, Earth, and the air, heed my call!Storm, Earth, and the air, heed my call!Storm, Earth, and the air, heed my call!
                    ul(className="actions")
                        li #[a( href="landing.html", className="button next" ) Get Started]
        `;
	}
}

class Main extends React.Component{
	render(){
		return (
			<div id="main">
				<ScopeOne article={article_array} />
				<ScopeTwo />
			</div>
		);
	}
}

export default Main;