import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
import YouTube from 'react-youtube';
export default class PCVideosBlock extends React.Component {
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

				<Card  bordered={true} style={{
					width: this.props.width
				}}>

				<div  class="imageblock_right">
						<div class="custom-image">

							<YouTube
								videoId={this.props.videoId}
								opts={opts}
								onReady={this._onReady}/>
						</div>
						<div class="custom-card-right">
							<h3 style={styeH3}>{"video1"}</h3>
						</div>
				</div>
				</Card>

		);
	};

	_onReady(event) {
	  // access to player in all event handlers via event.target
	  event.target.pauseVideo();
	};






}
