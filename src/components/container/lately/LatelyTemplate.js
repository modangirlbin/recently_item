import React, { Component } from 'react';
import '../../../css/container/lately/lately_product.css';
import ItemsTemplate from './Items/ItemsTemplate';
// 쪼개는 단점 :경로 복잡해짐

const data = {
	date: {
		one: '12.10',
		two: '12.11',
		three: '12.12'
	},
	ico: {
		one: 'ico_video',
		two: 'ico_mark'
	}
}
const LatelyTemplate = () => {
	return (
		<div class="lately_product">
			<ItemsTemplate date={data.date.one}/>
			<ItemsTemplate date={data.date.two}/>
			<ItemsTemplate date={data.date.three}/>
		</div>
	);
};

export default LatelyTemplate;