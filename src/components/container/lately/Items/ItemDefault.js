import React, { Component } from 'react';
import '../../../../css/container/lately/lately_product.css';

class ItemDefault extends Component {
  render() {
		return (
			<li>
				<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#">
					<span class="link_thumb">
						<img src="//thumb.cjmall.net/unsafe/fit-in/200x200/image.cjmall.net/public/confirm/assets/TMOCODE_REP_IMG/201907/16/M1016582/lianstyle20190716023258834.jpg" class="img_g" alt="쇼핑찜 썸네일 이미지"/>
					</span>
					<div class="info_thumb">
						<strong class="tit_prod"><span class="link_tit">[PALLA] 에이백 A-bag 라지</span></strong>
						<span class="txt_price">
							<span class="num">138,000</span><span class="txt">원~</span>
						</span>
					</div>
				</a>
				{/* selected */}
				<button type="button" class="btn_choice"><span class="ico_heart">쇼핑찜하기</span></button>
				<button type="button" class="btn_del"><span class="ic2_14">삭제하기</span></button>
			</li>
		);
  }
}

export default ItemDefault;