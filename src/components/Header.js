import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header" class="visible head_sub_type">
					<div class="noti_app_install">		
						<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" title="다운로드 사이트로 이동" class="u_btn btn_dnld_app"><span>앱다운로드</span></a>
						<button type="button" class="btn_cls_this"><span>앱다운로드 배너 닫기</span></button>
					</div>	
					<div class="wrap_tit">
						<h1 class="tit">
						가나다라마바사아자차카타파하
						</h1>
						<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#off_canvas" class="btn_navi"><span>전체메뉴 열기</span></a>
						<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" class="btn_srh"><span class="blind">검색페이지로 이동</span></a>
						<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" class="btn_move_cart">
							<div class="cart_item_count ">
								<span class="txt_a11y blind">장바구니</span>
								<strong class="num">99</strong>
								<span class="txt_a11y blind">개 담겨있음</span>
							</div>
						</a>
					</div>
				</header>
      </div>
    );
  }
}

export default Header;