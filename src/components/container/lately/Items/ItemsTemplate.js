import React, { Component } from 'react';
import '../../../../css/container/lately/lately_product.css';
import '../../../../css/container/lately/item_lately.css';
import ItemCheck from './ItemCheck';
import ItemDefault from './ItemDefault';

const data = {
	ico: {
		one: 'ico_video',
		two: 'ico_mark'
	}
}

// const ItemsTemplate = () => {
// 요러면 props도 못읽고, this=undefind why?
class ItemsTemplate extends Component {
	render() {
			return (
			<div class="item_lately">
				<span class="cont_date2">{this.props.date}</span>
				<ul class="list_chu_prod">
					<ItemDefault ico={data.ico.one}/>
					<ItemCheck ico={data.ico.one}/>
					<ItemCheck ico={data.ico.two}/>
					<ItemDefault ico={data.ico.two}/>
					<ItemCheck ico={data.ico.one}/>
				</ul>
			</div>
			);
		}
};

export default ItemsTemplate;