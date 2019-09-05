import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
import YouTube from 'react-youtube';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCSportsBlock from './pc_sports_block';
export default class PCSports extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
			type: ''
		};
	}


	componentWillMount() {


	};
	componentWillReceiveProps(nextProps){

	}


	render() {
		const opts = {
			height: '180px',
			width: '320px',
			playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};
		//
		// var myFetchOptions = {
		// 			method: 'GET'
		// 			};
		// 			fetch("https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&apiKey=09f38fd0817948539d840bd426f92294&q=&page=1", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json.articles}));


		const styleImage = {
			display: "block",
			width: "300px",
			height: "159px"
		};
		const styeH3 = {
			width: "300px",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};

		return (

<Tabs class="tabs_news">
  <TabPane tab="Basketball" key="1">
    <PCSportsBlock count={22} type="basketball" width="100%" bordered="false"/>
  </TabPane>
  <TabPane tab="Football" key="2">
    <PCSportsBlock count={22} type="football" width="100%" bordered="false"/>

  </TabPane>


</Tabs>


		);
	};

	_onReady(event) {
	  // access to player in all event handlers via event.target
	  event.target.pauseVideo();
	};






}
