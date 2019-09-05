import React from 'react';
import {Card} from 'antd';
import {Tabs, Carousel} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
export default class PCSportsBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
			type:'',
			adv: 6
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://api.isportsapi.com/sport/free/"+this.props.type+"/livescores?api_key=lmZo8vUlWe9EZW8C", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json.data}));
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
	console.log("sports score")
	console.log(this.state.news);
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
          <div class="score_info">

          <div>
          {newsItem.leagueName}
          </div>

          <div class="team_name">
          <a href="https://sports.yahoo.com/mlb/san-francisco-giants-chicago-cubs-390822116/"  >

           <div>{newsItem.homeName}</div>
           <div class="score_away">{newsItem.awayName} </div>
          </a>
          </div>

          <div>
           <div> {newsItem.homeScore} </div>
           <div class="score_away"> {newsItem.awayScore} </div>
          </div>


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
			</div>
		);
	};
}
