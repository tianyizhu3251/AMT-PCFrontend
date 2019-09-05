import React from 'react';
import {Card} from 'antd';
import {Tabs, Carousel} from 'antd';
import { Button } from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
export default class PCNewsBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
			type:'',
			adv: 6,
			page:1,
			more_news:true
		};
	}
 // 这里就是点击以后加载更多新闻 用contact链接上之前的list news
	handleClick(e) {
		console.log('this is loading more');
		this.state.page++;
		console.log(this.state.page);
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&apiKey=6070e4ba6b7240408127abf342fc2d88&q=&page="+this.state.page, myFetchOptions).then(response => response.json())
		.then(json => {
			var tmp_news= json.articles  // tmp_news存放新加入的新闻
			console.log(tmp_news.length);
			if (tmp_news.length==0) {
				this.setState({more_news: false});

			}
			this.setState({news: this.state.news.concat(tmp_news)})

		});


	};
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&apiKey=6070e4ba6b7240408127abf342fc2d88&q=&page=1", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json.articles}));
//  // 09f38fd0817948539d840bd426f92294
	};
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true,
		};
	const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "75px",
			width: "100px",

		};
		const picStyle = {
				float: "left"
			};

		{/* react里面写style 必须用驼峰 原来的font-size改为fontSize */}




		const titleLink = {
			width: "20px",


				};
	console.log(this.state.news);
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
				<div class="custom-image" style={picStyle}>
					<img alt="" style={styleImage} src={newsItem.urlToImage}/>
				</div>
				<div className="titleLink">
					<div className="m_article_title">
					 <a href={newsItem.url}  >
					 	{newsItem.title}
					 </a>
					</div>

					<div className="m_article_desc clearfix">
						<div className="m_article_desc_l">
							<span className="m_article_channel">{newsItem.author}</span>
							<span className="m_article_time">{newsItem.publishedAt}</span>
						</div>
					</div>
				</div>

				<div class="carousel-adv1"   style={{"display":  (index+1)%5==0? 'block':'none'}}>




					<Carousel {...settings}>
						<div><img src="./src/images/carousel_1.jpg"/></div>
						<div><img src="./src/images/carousel_2.jpg"/></div>
						<div><img src="./src/images/carousel_3.jpg"/></div>
						<div><img src="./src/images/carousel_4.jpg"/></div>
					</Carousel>
				</div>
				</li>





			))
			: 'We are loading...';
		return (
			<div class="topNewsList">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>
				{
//这里如果有下一页。就显示由下一页的按钮。没有显示为空
		this.state.more_news
		? <Button type="primary" 		onClick={this.handleClick.bind(this)}>Click me to load more news	</Button>
		: <Button type="primary" disabled> We have showed all the latest news	</Button>
}


			</div>
		);
	};
}
