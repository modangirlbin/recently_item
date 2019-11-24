import React, { Component } from 'react';
import '../../../../css/container/lately/lately_product.css';
// import ItemCheck from './children/ItemCheck';
// 쪼개는 단점 :경로 복잡해짐(작성하면서 경로 안맞는거 계속보고있음)

class ItemCheck extends Component {
  render() {
		return (
			<li class="lately_chk">
				<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#">
					<span class={this.props.ico}>기획전</span>
					<strong class="txt_chk"><span class="link_tit">백화점 네파 인기 BEST</span></strong>
				</a>
				<button type="button" class="btn_del"><span class="ic2_14">삭제하기</span></button>
			</li>
		);
  }
}

export default ItemCheck;