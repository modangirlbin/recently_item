import React, { Component } from 'react';
import '../../css/container/box_optioin.css';

class BoxOption extends Component {
  render() {
    return (
        <div class="box_option">
            <span class="piece_total"><span class="num">100</span>개</span>
            <div class="option_area">
                <span class="u_chkbx chkbx_only_prd"><input type="checkbox" id="ckbx1" /><label for="ckbx1">상품만 보기<span class="bin"></span></label></span>
                <button type="button" class="btn_del">전체삭제</button>
            </div>
        </div>
    );
  }
}

export default BoxOption;