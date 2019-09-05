import React from 'react';
import { geolocated } from "react-geolocated";
import {Card} from 'antd';
import {Tabs} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
import WeatherTitles from "./weather_titles";
import WeatherForm from "./weather_form";
import WeatherResult from "./weather_result";
import Carousel from 'nuka-carousel';
import WeatherDemo from './weather_demo';

export default class PCWeather extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
			latitude: '',
			longitude:'',
			type:'',
			adv: 6,
			city:undefined,
			temperature: undefined,
			data: undefined,
			humidity: undefined,
			weather: undefined,
			error: undefined,
			country:undefined,
			user_city:'',
			user_country:'America',
			user_address:'',
			img:''
		};
	}

	getType(key) {
	console.log("eee")
	console.log( "father"+ key);
	var tmp_img = '';
	// 这里已经拿到子组件给的地址参数在key 现在就是把key中的dallas提取出来 然后给api读取气候
	var arr=key.split(", ");

	var reg =/[\u4e00-\u9fa5]/g;

  console.log(key.replace(reg, ""));
	key=key.replace(reg, "");
 	this.setState(
		{
			user_city: arr[1],
	  	user_address: key
		 } // arr[1]保存了字符串地址解析出来以后剩下的dallas
			);

	var myFetchOptions = {
		method: 'GET'
	};

	fetch("http://api.openweathermap.org/data/2.5/weather?q="+arr[1]+","+this.state.user_country+"&appid=afa570de413ba776fbc8c1107a059088&units=metric", myFetchOptions).then(response => response.json())
	.then(json =>
		{
			this.setState(
		{
			 news: json.weather[0],
			 temperature: json.main.temp,
			 city: json.name,
			 humidity: json.main.humidity,
			 country: json.sys.country,
			 error: ""
		});

		tmp_img=json.weather[0].description;
		console.log(tmp_img.indexOf("haze")!= -1 );
		if (tmp_img.indexOf("cloud")!= -1) {
			this.setState({img:"./src/images/cloudy.png"});
			return true;
		}
		if (tmp_img.indexOf("haze")!= -1) {
				this.setState({img:"./src/images/haze.png"});
				return true;
			}
		if (tmp_img.indexOf("sunny")!= -1) {
					this.setState({img:"./src/images/sunny.png"});
					return true;
				}
		if (tmp_img.indexOf("rain")!= -1) {
						this.setState({img:"./src/images/raining.png"});
						return true;
					}
		if (tmp_img.indexOf("snow")!= -1) {
							this.setState({img:"./src/images/snowing.png"});
											return true;
						}
		if (tmp_img.indexOf("storm")!= -1) {
								this.setState({img:"./src/images/storm.png"});
												return true;

							}

		this.setState({img:"./src/images/sky.png"});


					})  }


	componentWillMount() {
		var tmp_img = '';
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://api.openweathermap.org/data/2.5/weather?q=dallas,america&appid=afa570de413ba776fbc8c1107a059088&units=metric", myFetchOptions).then(response => response.json())
		.then(json =>{
			 this.setState(
			{
				 news: json.weather[0],
				 temperature: json.main.temp,
				 city: json.name,
				 humidity: json.main.humidity,
				 country: json.sys.country,
				 error: ""
			})
			console.log(json.weather[0].description);
			tmp_img=json.weather[0].description;
			console.log(tmp_img.indexOf("haze")!= -1 );
			if (tmp_img.indexOf("cloud")!= -1) {
				this.setState({img:"./src/images/cloudy.png"});
				return true;
			}
			if (tmp_img.indexOf("haze")!= -1) {
					this.setState({img:"./src/images/haze.png"});
					return true;
				}
			if (tmp_img.indexOf("sunny")!= -1) {
						this.setState({img:"./src/images/sunny.png"});
						return true;
					}
			if (tmp_img.indexOf("rain")!= -1) {
							this.setState({img:"./src/images/raining.png"});
							return true;
						}
			if (tmp_img.indexOf("snow")!= -1) {
								this.setState({img:"./src/images/snowing.png"});
												return true;
							}
			if (tmp_img.indexOf("storm")!= -1) {
									this.setState({img:"./src/images/storm.png"});
													return true;

								}

			this.setState({img:"./src/images/sky.png"});


						})  }
	render() {
		var settings2 = {
		dots: false,
		infinite: true,
		autoplayInterval: 6000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:true
	};
	console.log(this.state);


		return (
			<div class="topNewsList">
			<WeatherDemo getType={this.getType.bind(this)}/>
{/* 		<div className="col-xs-5 title-container">
				<WeatherTitles />
			</div>  */}

			<div className="col-xs-7 form-container">

			<form>
				<input type="text" name="city" placeholder="City..."
							value={this.state.user_city}
							onChange={this.handleInputChange1.bind(this)}

				/ >
				<input type="text" name="country" placeholder="Country..."
				value={this.state.user_country}
				onChange={this.handleInputChange2.bind(this)}
				/>

			</form>


			<WeatherResult
			temperature={(this.state.temperature*1.8)+32}
			humidity={this.state.humidity}
			city={this.state.city}
			country={this.state.country}
			description={this.state.news.description}
			error={this.state.error}
			current_location={this.state.user_address}
			img={this.state.img}

			/>
			</div>





		</div>






		);
	};

	handleInputChange1(e){
				var tmp_img = '';
		console.log(e.target.value);
//		const city = e.target.elements.city.value;
//	 	const country = e.target.elements.country.value;
		console.log("111");
		 this.setState({
		 	user_city: e.target.value

		 })
		console.log("222");
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://api.openweathermap.org/data/2.5/weather?q="+e.target.value+","+this.state.user_country+"&appid=afa570de413ba776fbc8c1107a059088&units=metric", myFetchOptions).then(response => response.json())
		.then(json => { this.setState(
			{
				 news: json.weather[0],
				 temperature: json.main.temp,
				 city: json.name,
				 humidity: json.main.humidity,
				 country: json.sys.country,
				 error: ""
			});
			console.log("333");
			tmp_img=json.weather[0].description;
			console.log(tmp_img.indexOf("haze")!= -1 );
			if (tmp_img.indexOf("cloud")!= -1) {
				this.setState({img:"./src/images/cloudy.png"});
				return true;
			}
			if (tmp_img.indexOf("haze")!= -1) {
					this.setState({img:"./src/images/haze.png"});
					return true;
				}
			if (tmp_img.indexOf("sunny")!= -1) {
						this.setState({img:"./src/images/sunny.png"});
						return true;
					}
			if (tmp_img.indexOf("rain")!= -1) {
							this.setState({img:"./src/images/raining.png"});
							return true;
						}
			if (tmp_img.indexOf("snow")!= -1) {
								this.setState({img:"./src/images/snowing.png"});
												return true;
							}
			if (tmp_img.indexOf("storm")!= -1) {
									this.setState({img:"./src/images/storm.png"});
													return true;

								}

			this.setState({img:"./src/images/sky.png"});


			})  }

	handleInputChange2(e){
		console.log(e.target.value);
//		const city = e.target.elements.city.value;
//	 	const country = e.target.elements.country.value;
		console.log("111");
		 this.setState({
			user_country: e.target.value

		 })
		console.log("222");
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.state.user_city+","+e.target.value+"&appid=afa570de413ba776fbc8c1107a059088&units=metric", myFetchOptions).then(response => response.json())
		.then(json => this.setState(
			{
				 news: json.weather[0],
				 temperature: json.main.temp,
				 city: json.name,
				 humidity: json.main.humidity,
				 country: json.sys.country,
				 error: ""
			}));
			console.log("333");
	}
}
