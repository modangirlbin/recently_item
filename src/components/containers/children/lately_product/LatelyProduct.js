import React, { Component } from 'react';
import '../../../../css/container/lately_product/lately_product.css';
import ItemLately from './children/ItemLately';
import LatelyChk from './children/LatelyChk';
// 쪼개는 단점 :경로 복잡해짐
const datecase = {
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

class BannerOption extends Component {
  render() {
	return (
		<div class="lately_product">
			<ItemLately date={datecase.date.one}/>
			<ItemLately date={datecase.date.two}/>
			<ItemLately date={datecase.date.three}>
			</ItemLately>
			<LatelyChk date={datecase.date.three} ico={datecase.ico.one}/>
			<LatelyChk date={datecase.date.three} ico={datecase.ico.two}/>
		</div>
	);
  }
}
// const BannerOption = ({form, children}) => {
// 	return (
// 	  <main className="todo-list-template">
// 		<div className="title">
// 		  오늘 할 일
// 		</div>
// 		<section className="form-wrapper">
// 		  {form}
// 		</section>
// 		<section className="todos-wrapper">
// 		  { children }
// 		</section>
// 	  </main>
// 	);
//   };


export default BannerOption;