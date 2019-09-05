import React from 'react';
import { Button } from 'antd';
import { Icon } from 'antd';
import InstagramEmbed from 'react-instagram-embed';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import YouTube from 'react-youtube';
import Carousel from 'nuka-carousel';
import PCVideosBlock from './pc_video_block';
import ReactDOM from 'react-dom';
import { GenericWeather } from 'react-weather';
import PCWeather from './pc_weather';
import weather from 'yahoo-weather'; // or require it
import PCPolling from './pc_polling';

export default class PCProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };


  }
  componentWillMount() {

  };

  render() {


  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true
};
    const opts = {
      height: '390',
      width: '340',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };


    return (
    <div>
  {/*    <Slider {...settings2}>
        <div>
            <PCVideosBlock count={6} type={this.props.type} width="400px" cartTitle="Weather" imageWidth="112px"/>
        </div>
        <div>
            <PCVideosBlock count={6} type={this.props.type} width="400px" cartTitle="Weather" imageWidth="112px"/>
        </div>
        <div>
            <PCVideosBlock count={6} type={this.props.type} width="400px" cartTitle="Weather" imageWidth="112px"/>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>  */}
      <Button type="primary" style={{"marginLeft":"-80px","marginTop":"5px","width":"240px"}}>

      Video For You
      </Button>
      <Carousel>


	     <PCVideosBlock width="400px" cartTitle="Weather" imageWidth="112px" videoId="EAB2dqzW7js"/>
  	   <PCVideosBlock  width="400px" cartTitle="Weather" imageWidth="112px" videoId="5h7hUdat2WA"/>
       <PCVideosBlock  width="400px" cartTitle="Weather" imageWidth="112px" videoId="T9lOozFgbdM"/>
       <PCVideosBlock  width="400px" cartTitle="Weather" imageWidth="112px" videoId="ETkZpJcZhkI"/>
      </Carousel>
      <Button type="primary" style={{"marginLeft":"-80px","marginTop":"5px","width":"240px"}}>
        Our polling selection
      </Button>
      {/*下面是答题代码 */}
      <Carousel>

          <PCPolling title="QUESTION: 1" question="which team do u like?" ans1="chelsea" ans2="arsenal" ans3="man united"/>
	        <PCPolling title="QUESTION: 2" question="which city do u like?" ans1="dallas" ans2="houston" ans3="new york"/>
	        <PCPolling title="QUESTION: 3" question="which school do u like?" ans1="SMU" ans2="MIT" ans3="Stanford"/>

      </Carousel>




  <div class="media_button">
  <a href="https://www.facebook.com/breaknnews" >
    <Button type="primary" >

      Facebook
    </Button>


<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAmericanMuslimToday%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="400" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
  </a>

  <a href="https://www.twitter.com/" >
    <Button type="primary">Twitter
    </Button>
  </a>
  <TwitterTimelineEmbed
 sourceType="profile"
 screenName="AmericanMuslimT"
 options={{height: 450}}
/>



  <a href="https://www.instagram.com/" >
    <Button type="primary">
      instagram
    </Button>
  </a>

  <InstagramEmbed
    url='https://www.instagram.com/p/BaNcpcZDO2I/'
    maxWidth={370}

    hideCaption={false}
    containerTagName='div'
    protocol=''
    injectScript
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}

  />



    <a href="https://www.youtube.com/" >
      <Button type="primary">
        Youtube
      </Button>

    </a>


    <YouTube
      videoId="ETkZpJcZhkI"
      opts={opts}
      onReady={this._onReady}
    />
  <a href="https://www.gmail.com" >
    <Button type="danger" >
      coming soon
    </Button>
  </a>
  </div>

  <span>{this.state.news}</span>

  </div>

);
};

_onReady(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

componentDidMount() {
    // scriptタグが埋め込まれた後にTwitterのaタグが置かれても機能が有効にならないので、すでにscriptタグが存在する場合は消す。
    var scriptNode = document.getElementById('twitter-wjs')
    if (scriptNode) {
      scriptNode.parentNode.removeChild(scriptNode)
    }

    // ボタン機能の初期化（オフィシャルのボタン生成ページで生成されるものと同じもの）
    !function(d,s,id){
      var js,
          fjs=d.getElementsByTagName(s)[0],
          p=/^http:/.test(d.location)?'http':'https';
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
      }
    }(document, 'script', 'twitter-wjs');
  }











}
