import React from 'react';
// Import css files
//import Carousel from 'nuka-carousel';
import PCWeather from './pc_weather';
import { Button } from 'antd';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';
import PCVideosBlock from './pc_video_block';
import ModalVideo from 'react-modal-video';
import Slider from "react-slick";
import PCSports from './pc_sports';
import PCPolling from './pc_polling.js';
require ("slick-carousel/slick/slick.css");


export default class PCNewsContainer extends React.Component {

	constructor() {
		super();
		this.state = {
		 type: 'top',
		 isOpen: true
		};

	};

	render() {
		var settings2 = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay:true
};
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
		return (
			<div>
				<Row>
					<Col span={1}></Col>
					<Col span={23} class="container">
						<div class="leftContainer">
							<div class="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/carousel_1.jpg"/></div>
									<div><img src="./src/images/carousel_2.jpg"/></div>
									<div><img src="./src/images/carousel_3.jpg"/></div>
									<div><img src="./src/images/carousel_4.jpg"/></div>
								</Carousel>
							</div>

							<Tabs class="tabs_news">
								<TabPane tab="General" key="1">
									<PCNewsBlock count={22} type="general" width="100%" bordered="false"/>
								</TabPane>
								<TabPane tab="Science" key="2">
									<PCNewsBlock count={22} type="science" width="100%" bordered="false"/>
									// count是给pcnewsblock传的参数以后就page
								</TabPane>
								<TabPane tab="Business" key="3">
									<PCNewsBlock count={22} type="business" width="100%" bordered="false"/>
									// count是给pcnewsblock传的参数以后就page
								</TabPane>
								<TabPane tab="Health" key="4">
									<PCNewsBlock count={22} type="health" width="100%" bordered="false"/>
									// count是给pcnewsblock传的参数以后就page
								</TabPane>
								<TabPane tab="Sports" key="5">
									<PCNewsBlock count={22} type="sports" width="100%" bordered="false"/>
									// count是给pcnewsblock传的参数以后就page
								</TabPane>
								<TabPane tab="Entertainment" key="6">
									<PCNewsBlock count={22} type="entertainment" width="100%" bordered="false"/>

								</TabPane>
								<TabPane tab="Technology" key="7">
									<PCNewsBlock count={22} type="technology" width="100%" bordered="false"/>

								</TabPane>


							</Tabs>




						</div>


					{/*  <PCNewsImageBlock count={6} type={this.props.type} width="580px" cartTitle="Weather" imageWidth="112px"/> */}

{/*这里写中间的muslim新闻 重点！！！ */}
<Tabs class="tabs_news_middle">
	<TabPane tab="General" key="1">
			<PCNewsImageBlock count={8} type="eee28bea-3432-4326-9e3c-6a4765da3768" width="100%" cartTitle="Sports Results" imageWidth="132px"/>
	</TabPane>
	<TabPane tab="Science" key="2">
		<PCNewsImageBlock count={8} type="23aca6d4-b740-47c4-b30b-8f16ef8bdeff" width="100%" cartTitle="Sports Results" imageWidth="132px"/>
	{/* 	// count是给pcnewsblock传的参数以后就page */}
	</TabPane>
	<TabPane tab="Business" key="3">
		<PCNewsImageBlock count={8} type="94821302-a50b-48dc-9252-964b708d1d40" width="100%" cartTitle="Sports Results" imageWidth="132px"/>

	</TabPane>
	<TabPane tab="Health" key="4">
	<PCNewsImageBlock count={8} type="health" width="100%" cartTitle="Sports Results" imageWidth="132px"/>

	</TabPane>
	<TabPane tab="Sports" key="5">
	<PCNewsImageBlock count={8} type="sport" width="100%" cartTitle="Sports Results" imageWidth="132px"/>

	</TabPane>
	<TabPane tab="Entertainment" key="6">
	<PCNewsImageBlock count={8} type="entertainment" width="100%" cartTitle="Sports Results" imageWidth="132px"/>

	</TabPane>
	<TabPane tab="Technology" key="7">
	<PCNewsImageBlock count={8} type="technology" width="100%" cartTitle="Sports Results" imageWidth="132px"/>

	</TabPane>


</Tabs>


					<div class="right-side">




						<Tabs class="tabs_product">
							<TabPane tab="Welcome Our Social Media family. Here is a great start to us Muslim !" class="Muslim_Media" key="1">
			{/*
									<PCVideosBlock count={6} type={this.props.type} width="400px" cartTitle="Weather" imageWidth="112px"/> */}

							  <PCProduct/>
								<PCWeather/>




							</TabPane>

						</Tabs>
						<Button type="primary" style={{left: "-40px"}}>Sport Living See the latest scroll boarding here! Click it! </Button>
						<PCSports/>



						</div>



						<div>
							<PCNewsImageBlock count={8} type="eee28bea-3432-4326-9e3c-6a4765da3768"  width="100%" cartTitle="Sports Results" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="eee28bea-3432-4326-9e3c-6a4765da3768" width="100%" cartTitle="Video" imageWidth="132px"/>
						</div>
					</Col>

				</Row>
			</div>
		);
	};
}
