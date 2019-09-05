import React from 'react';
import {Card} from 'antd';
import axios from 'axios';
import {Router, Route, Link, browserHistory} from 'react-router';
import {Tabs, Carousel} from 'antd';
export default class PCNewsImageBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
			type: '111',
			repoName:'',
			repoUrl:''

		};
	}


	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://13.59.129.23:8080/amt-news/api/v1/news?page=1&category="+this.props.type, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json.list}));
// http://13.59.129.23:8080/amt-news/api/v1/news?page=1&category='+this.props.type+'&searchText='+kwd
		console.log(this.state.news);


    }
	componentWillReceiveProps(nextProps){

			var myFetchOptions = {
				method: 'GET'
			};
			fetch("https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&apiKey=6070e4ba6b7240408127abf342fc2d88&q=&page=1", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json.articles}));

	}


	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
		//
		// var myFetchOptions = {
		// 			method: 'GET'
		// 			};
		// 			fetch("https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&apiKey=09f38fd0817948539d840bd426f92294&q=&page=1", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json.articles}));


		const styleImage = {
			display: "block",
			width: "470px",
			height: "250px",
			margin: "0 auto"
		};
		const styeH3 = {
			width: "400px"


		};
		const {news} = this.state;
  	console.log(news);
		const newsList = news.length
			? news.map((newsItem, index) => (
				<div key={index} class="imageblock">
					<a href={newsItem.link} target="_blank">
						<div class="custom-image">
							<img alt="" style={styleImage} src={newsItem.bannerImage}/>
						</div>
						<div class="custom-card">
							<h3 style={styeH3}>{newsItem.headline}</h3>
							<p>{newsItem.updatedDate}</p>

						</div>
					</a>

					<div class="carousel-adv2"   style={{"display":  (index+1)%5==0? 'block':'none'}}>
						<Carousel {...settings}>
							<div><img src="./src/images/carousel_1.jpg"/></div>
							<div><img src="./src/images/carousel_2.jpg"/></div>
							<div><img src="./src/images/carousel_3.jpg"/></div>
							<div><img src="./src/images/carousel_4.jpg"/></div>
						</Carousel>
					</div>
				</div>
			))
			: 'We are loading news...';
		return (
			<div class="topNewsList_center">
				<Card title="American Muslim News" bordered={true} style={{
					width: this.props.width
				}}>

					{newsList}
				</Card>
			</div>
		);
	};





}
