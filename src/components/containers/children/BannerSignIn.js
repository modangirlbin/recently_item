import React, { Component } from 'react';
import '../../../css/container/banner_signin.css';

class BannerSignIn extends Component {
  render() {
    return (
      <div>
        <div class="wrap_banner_signin">
            <div class="banner_signin">
                <p class="txt">로그인하면 더 많은 쇼핑 히스토리를 확인할 수 있습니다.</p>
                <a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" class="u_btn btn_signin"><span>로그인</span></a>
            </div>
        </div>
      </div>
    );
  }
}

export default BannerSignIn;