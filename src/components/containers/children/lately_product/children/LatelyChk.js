import React, { Component } from 'react';
import '../../../../../css/container/lately_product/lately_product.css';

class LatelyChk extends Component {
  render() {
	return (
		<div class="item_lately">
			<span class="cont_date2">{this.props.date}</span>
			<ul class="list_chu_prod">
					<li class="lately_chk">
							<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#">
									<span class={this.props.ico}>기획전</span>
									<strong class="txt_chk"><span class="link_tit">백화점 네파 인기 BEST</span></strong>
							</a>
							<button type="button" class="btn_del"><span class="ic2_14">삭제하기</span></button>
					</li>
			</ul>
			<ul class="list_chu_prod">
					<li class="lately_chk">
							<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#">
									<span class={this.props.ico}>기획전</span>
									<strong class="txt_chk"><span class="link_tit">백화점 네파 인기 BEST</span></strong>
							</a>
							<button type="button" class="btn_del"><span class="ic2_14">삭제하기</span></button>
					</li>
			</ul>
		</div>
	);
  }
}

export default LatelyChk;