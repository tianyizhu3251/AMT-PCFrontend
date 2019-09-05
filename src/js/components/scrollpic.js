import React from 'react';
import {Card} from 'antd';
import {Tabs, Carousel} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
export default class ScrollPic extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
			type:''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&apiKey=09f38fd0817948539d840bd426f92294&q=&page=1", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json.articles}));
	};

  componentWillReceiveProps(nextProps){

      var myFetchOptions = {
        method: 'GET'
      };
      fetch("https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&apiKey=09f38fd0817948539d840bd426f92294&q=&page=1", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json.articles}));

  }


  render() {


		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (


					<img alt="" src={newsItem.urlToImage}/>



			))
			: 'We are loading...';
		return (
    <div>
  	<Carousel>
				{newsList}
  	</Carousel>
    </div>
		);
	};
}
