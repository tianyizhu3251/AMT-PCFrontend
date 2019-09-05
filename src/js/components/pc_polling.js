import React from 'react';
import { Card } from 'antd';
import ReactDOM from 'react-dom';
import { Radio, Input } from 'antd';
import { Carousel } from 'antd';
import { Button } from 'antd';


export default class PCPolling extends React.Component {
  constructor() {
  		super();
  		this.state = {
        value: 3,
        question1: "Which team do you support most?"

  		};
  	};


     onChange(e){
       console.log('radio checked', e.target.value);
       this.setState({
         value: e.target.value,
       });
     };

     onChange2(a, b, c) {
       console.log(a, b, c);
    }




  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    console.log('111');
    console.log(this.props.question);

      const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
      marginLeft: '60px',
     }

      const hidden = {
        visible: 'hidden'
      }

      const newsList1 = (

              <Card title={this.props.title} extra={<a href="https://sports.yahoo.com/">More</a>} style={{ width: 370 }}>
          <p style={{marginLeft: "60px",fontSize:"20",fontWeight:"bold"}}>{this.props.question}</p>

          <Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>

            <Radio style={radioStyle} value={1}>
              {this.props.ans1}
            </Radio>
            <Radio style={radioStyle} value={2}>
              {this.props.ans2}
            </Radio>
            <Radio style={radioStyle} value={3}>
              {this.props.ans3}
            </Radio>
            <Radio style={radioStyle} value={4}>
              More...
              {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
            </Radio>
          </Radio.Group>
              </Card>
      );

    return (
<div >

  {newsList1}





</div>





    );
  }
}
