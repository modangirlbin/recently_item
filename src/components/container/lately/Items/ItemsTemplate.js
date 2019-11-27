import React, { Component } from 'react';
import '../../../../css/container/lately/lately_product.css';
import '../../../../css/container/lately/item_lately.css';
import ItemCheck from './ItemCheck';
import ItemDefault from './ItemDefault';

// const data = {
// 	ico: {
// 		one: 'ico_video',
// 		two: 'ico_mark'
// 	}
// }

// const ItemsTemplate = () => {
// 요러면 props도 못읽고, this=undefind why?
class ItemsTemplate extends Component {
	render() {
		var data = this.props.data;
		// console.log(data.conten.ico);
		return (
		<div className="item_lately">
			<span className="cont_date2">{data.date}</span>
			<ul className="list_chu_prod">
				<ItemCheck ico={data.content[data.id].ico}/>
				<ItemCheck ico={data.content[data.id].ico}/>
				<ItemDefault/>
				<ItemDefault/>
			</ul>
		</div>
		);
	}
};

export default ItemsTemplate;