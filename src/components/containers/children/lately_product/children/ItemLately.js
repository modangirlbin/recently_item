import React, { Component } from 'react';
import '../../../../../css/container/lately_product/lately_product.css';
// import ItemLately from './children/ItemLately';
// 쪼개는 단점 :경로 복잡해짐(작성하면서 경로 안맞는거 계속보고있음)

class BannerOption extends Component {
  render() {
	return (
		<div class="item_lately">
			<span class="cont_date2">{this.props.date}</span>
			<ul class="list_chu_prod">
				<li>
					<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#">
						<span class="link_thumb">
							<img src="http://placehold.it/240x240" class="img_g" alt="쇼핑찜 썸네일 이미지"/>
						</span>
						<div class="info_thumb">
							<strong class="tit_prod"><span class="link_tit">[PALLA] 에이백 A-bag 라지</span></strong>
							<span class="txt_price">
								<span class="num">138,000</span><span class="txt">원~</span>
							</span>
						</div>
					</a>
					<button type="button" class="btn_choice"><span class="ico_heart">쇼핑찜하기</span></button>
					<button type="button" class="btn_del"><span class="ic2_14">삭제하기</span></button>
				</li>
				<li>
					<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#">
						<span class="link_thumb">
							<img src="http://placehold.it/240x240" class="img_g" alt="쇼핑찜 썸네일 이미지"/>
						</span>
						<div class="info_thumb">
							<strong class="tit_prod"><span class="link_tit">에스쁘아 패뷸러스 블러쉬 1호 딜리셔스</span></strong>
							<span class="txt_price">
								<span class="num">15,040</span><span class="txt">원~</span>
							</span>
						</div>
					</a>
					<button type="button" class="btn_choice selected"><span class="ico_heart">쇼핑찜하기</span></button>
					<button type="button" class="btn_del"><span class="ic2_14">삭제하기</span></button>
				</li>
			</ul>
		</div>
	);
  }
}

export default BannerOption;