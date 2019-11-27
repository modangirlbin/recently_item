import React, { Component } from 'react';
import '../../../css/container/lately/lately_product.css';
import ItemsTemplate from './Items/ItemsTemplate';
// 쪼개는 단점 :경로 복잡해짐

class LatelyTemplate extends Component {
	constructor(props){
		super(props);
		this.state = {
			data : [
				{
					id: 1,
					date: '12.10',
					content: [
						{type: 'default'},
						{type: 'check', ico:'ico_video'},
						{type: 'check', ico:'ico_mark'}
					]
				},
				{
					id :2,
					date: '12.11',
					content: [
						{type: 'check', ico:'ico_video'},
						{type: 'default'},
						{type: 'check', ico:'ico_mark'}
					]
				}
			]
		}
	}
	render(){
		// console.log(this.state);
		// console.log(this.state.data.length);
		let lists = [];
		let i = 0;
		let data = this.state.data;
		while(i<this.state.data.length){
			lists.push(
			<ItemsTemplate key={this.state.data.id} data={this.state.data[i]}/>
			);
			i++;
		}
		console.log(i);
		return (
			<div className="lately_product">
				{lists}
			</div>
		);
	}
};

export default LatelyTemplate;