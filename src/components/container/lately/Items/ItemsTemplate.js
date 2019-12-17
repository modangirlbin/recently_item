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
const ItemsTemplate = ({key, data, idx}) => {
		const data2 = data.content;
		let i = 0;
		console.log(data2);

		let lists2 = [];
		while(i<data2.length){
			if (data2[i].type === 'check') {
				lists2.push(
					<ItemCheck ico={data2[i].ico}/>
				);
			}
			if (data2[i].type === 'default') {
				lists2.push(
					<ItemDefault/>
				);
			}
			i++;
		}
		return (
		<div className="item_lately">
			<span className="cont_date2">{data.date}</span>
			<ul className="list_chu_prod">
				{lists2}
			</ul>
		</div>
		);
};

export default ItemsTemplate;