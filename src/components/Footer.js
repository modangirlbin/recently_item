import React, { Component } from 'react';
import '../css/footer.css';

// 쪼갤가 말까 고민(수정이 들어올때 한번에 바뀌는 단위?)
// 기능 개발하기는 쪼개는개 나을거 같기도
// 스타일 입히기에는 합치는게 나을거 같기도 컴포넌트간 마진/보더등을 어디서 주어야 할까 
// container혹은templete사용? or 무조건 컴포넌트내? -> 이걸로 컴포넌트 나누는 기준 정해야 하지 싶음
// 스타일을 import했을때 캡슐화가 되는가?
class Footer extends Component {
  render() {
    return (
      <div id="footer">
          <div className="footer_wrap">
            <div className="foot_btn">
              <ul className="tbl_type">
              <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="btn_type">고객센터</a></li>
              <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="btn_type">로그인</a></li>
              <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="btn_type">APP설치</a></li>
              <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="btn_type">PC버전</a></li>
              </ul>
            </div>
            <div className="foot_policy">
              <h3 className="blind">CJOshopping 사업자 연락정보 및 약관</h3>
              <address className="foot_contact">
                <p>(주)씨제이오쇼핑 대표이사 허민회</p>
                <p>주소 : 06761 서울시 서초구 과천대로 870-13</p>
                <p>
                  <span>호스팅제공자 : (주)CJ오쇼핑</span><span>사업자등록번호 : 106-81-51510</span>
                </p>
                <p>
                  <span>통신판매업신고 : 서초 제 000015호</span><span>개인정보관리책임자 : IT담당 양희영</span>
                </p>
                <p>
                  <span>이메일 : webmaster@cjmall.com</span><span>고객센터 : <a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type">1644-2525</a></span>
                </p>
              </address>
              <ul className="foot_terms">
                <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type">회사소개</a></li>
                <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type">사업자정보확인</a></li>
                <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type">이용약관</a></li>
                <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type"><strong>개인정보처리방침</strong></a></li>
                <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type">청소년보호정책</a></li>
                <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type">법적고지</a></li>
                <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type">하나은행구매안전서비스</a></li>
                <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="lk_type">오픈소스라이센스고지</a></li>
              </ul>
              <small className="copyright">Copyright(C) CJ O Shopping All Rights Reserved.</small>
            </div>
          </div>
          <div className="wrap_bar_util">
            <ul className="bar_util">
              <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="btn_home"><span>홈으로 가기</span></a></li>
              <li><button type="button" className="btn_history_back"><span>뒤로 가기</span></button></li>
              <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" role="button" className="btn_menu"><span>메뉴</span></a></li>
              <li><a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" id="go_myzone" className="btn_myzone"><span>마이존으로 가기</span></a></li>
              <li>
                <a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="btn_latest_item is_see" title="최근 본 상품으로 가기">
                  <span><img src="./@temp_goods.jpg" width="23" height="23" alt="" /></span>
                </a>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Footer;