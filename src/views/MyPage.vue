<template>
  <div id="Container">
	<div id="Contents">
      <div class="mypage-head">
        <h1 class="tit"><a href="/mypage/Main.do">마이페이지</a></h1>
        <div class="grd-box">
          <div class="info_user clrfix">
            <p class="txt">
              {{this.$store.state.grade}}등급 <strong class="name">{{this.$store.state.name}}</strong>님 반갑습니다.
            </p>
            <ul class="mem_opt">
              <li id="membershipBenefit"><a href="javascript:;" onclick="location.href='#/main/getMembership.do';">멤버십라운지</a></li>                    
              <li id="profileModify"><a href="javascript:;" onclick="#mypage.header.goReviewerProfile">나의 프로필</a></li>
            </ul>
          </div>
          <div class="point-box ">
            <ul class="infor clrfix" id="pointInfo">
              <li id="cjOnePoingInfo" onclick="location.href='#'">
                <span class="tit">포인트</span>
                <a class="num" href="javascript:;" >0<em class="unit">P</em></a>
              </li>
              <li id="couponList" onclick="location.href='#/mypage/getCouponList.do'">
                <span class="tit">쿠폰</span>
                <a class="num" href="javascript:;">0<em class="unit">개</em></a>
              </li>
              <li id="depositList" onclick="location.href='#/mypage/getDepositList.do'">
                <span class="tit">적립금</span>
                <a class="num" href="javascript:;" >0<em class="unit">원</em></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mypage-lnb">
        <ul>
        <li><h2>마이 쇼핑</h2>
          <ul>
            <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getOrderList.do">주문/배송 조회</a></li>
            <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getOrderCancelList.do" >취소/반품/교환 내역</a></li>
          </ul>
          <ul class="line">
            <li class="subMenu"><a href="javascript:;" linkUrl="#/cart/getCart.do" >장바구니</a></li>
            <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getWishList.do" >좋아요,책갈피?</a></li>
          </ul>
          <ul class="line">
            <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/PointInfo.do">포인트</a></li>
            <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getCouponList.do">쿠폰</a></li>
            <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getDepositList.do">적립금</a></li>
          </ul>
        </li>
        <li><h2>마이 활동</h2>
          <ul>
            <li class="subMenu"><a href="javascript:;" linkUrl="#/counsel/getQnaList.do" >1:1문의내역</a></li>
            <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getGdasList.do">리뷰 <span class="num_review" id="_gdasPossibleTotCnt"></span>
              <img src="#/icon.png" class="new" id="_newGdasPossible" style="display: none;" alt="신규 리뷰 작성" /></a></li>
            <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getGoodsQnaList.do" >상품Q&amp;A내역</a></li>
          </ul>
        </li>
        <li><h2>마이 정보</h2>
          <ul>
             <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getMktReceiptInfo.do">회원정보 수정</a></li>
             <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/getDeliveryInfo.do">배송지/환불계좌</a></li>
             <li class="subMenu"><a href="javascript:;" linkUrl="#/mypage/custInfoOut.do" >회원탈퇴</a></li>
          </ul>
        </li>
        </ul>
      </div>
      <div class="mypage-conts">
      <!-- 마이페이지 컨텐츠 -->
        <div class="title-area2">
          <h2 class="tit">주문/배송 조회</h2>
          <a class="btnMore" id="orderListMore" href="#/mypage/getOrderList.do">더보기</a>
        </div>
        <a href="#/mypage/getOrderList.do" class="order_view">
          <ul class="mypage-step">
            <li><em>0</em><span>주문접수</span></li>
            <li><em>0</em><span>결제완료</span></li>
            <li><em>0</em><span>배송준비중</span></li>
            <li><em>0</em><span>배송중</span></li>
            <li><em>0</em><span>배송완료</span></li>
          </ul>
        </a>
        <div class="title-area mgT15">
          <h2 class="tit">좋아요</h2>
          <a class="btnMore" id="wishListMore" href="#/mypage/getWishList.do">더보기</a>
        </div>
        <!-- 좋아요 상품 목록 -->
        <div class="list-four"><!-- 상품 3개 list-three, 상품 4개 list-four -->
          <ul class="cate_prd_list">
            <li class="nodata">좋아요 상품이 없습니다.</li>
          </ul>
        </div>
        <!-- 좋아요 상품 목록 -->
        <div class="area-over" id="cousel">
          <div class="left">
            <div class="title-area">
              <h2 class="tit">1 : 1 문의내역</h2>
              <a class="btnMore" id="qnaListMore" href="javascript:;">더보기</a>
            </div>
            <div class="list-customer">
              <ul>
                <li class="nodata">최근 1개월간 문의하신 내용이 없습니다.</li>
              </ul>
            </div>
          </div>
		  <div class="right" id="goodsQna">
			<div class="title-area">
			  <h2 class="tit">상품Q&amp;A내역</h2>
			  <a class="btnMore" id="goodsQnaListMore" href="#/mypage/getGoodsQnaList.do">더보기</a>
			</div>
			<div class="list-customer">
			  <ul>
				<li class="nodata">최근 1개월간 문의하신 내용이 없습니다.</li>
			  </ul>
			</div>
		  </div>
		</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#Container {
    overflow: hidden;
}
#Container, #Footer, #Header, #Wrapper {
    width: 100%;
    min-width: 1020px;
    margin: 0 auto;
}
a, address, blockquote, body, dd, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, label, li, ol, p, pre, select, span, strong, textarea, ul {
    margin: 0;
    padding: 0;
    border: 0;
}
div {
    display: block;
}
body, html {
    word-spacing: -1px;
    color: #666;
    font-size: 15px;
    line-height: 20px;
    font-family: "돋움", sans-serif, ;
    letter-spacing: -.05em;

}
#Contents {
    width: 1020px;
    height: 100%;
    margin: 0 auto;
}
ol, ul {
    list-style: none;
}  
a {
    color: #666;
    text-decoration: none;
}
button, img, input, select, textarea {
    border: 0;
    vertical-align: top;
    color: #666;
}

element.style {
    background-size: 120px;
}

/*--------------------------------------------------------*/
.mypage-head {
    position: relative;
    width: 100%;
    height: 120px;
    margin: 30px 0 0;
}

.mypage-head h1.tit {
    float: left;
    width: 170px;
    padding: 10px 0 0 10px;
}

.mypage-head h1.tit a {
    font-size: 30px;
    line-height: 35px;
    font-weight: 700;
    color: #000;
    letter-spacing: -1.2px;
}

.mypage-head .grd-box {
    float: left;
    width: 850px;
    padding: 0 30px;
}

.mypage-head .info_user {
    position: relative;
    height: 50px;
    padding: 8px 0 0 30px;
    background-color: #32cd32;
}

.mypage-head .info_user .txt {
    float: left;
    margin-left: 10px;
    font-size: 18px;
    line-height: 34px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -1px;
}
.mypage-head .info_user .txt .name {
    display: inline-block;
    margin-left: 3px;
}
.mypage-head .info_user .mem_opt {
    position: absolute;
    top: 50%;
    right: 30px;
    margin-top: -10px;
}
.mypage-head .info_user .mem_opt li:first-child {
    margin-left: 0;
}
.mypage-head .info_user .mem_opt li {
    float: left;
    margin-left: 38px;
}
.mypage-head .info_user .mem_opt li a {
    display: inline-block;
    padding-right: 15px;
    font-size: 13px;
    color: #fff;
    font-weight: 700;
}
.clrfix:after {
    content: "";
    display: block;
    clear: both;
}
.mypage-head .point-box {
    padding: 19px 0;
    border: 1px solid #ccc;
    border-top: 0;
} 
.mypage-head .infor li {
    float: left;
    width: 33.33%;
    text-align: center;
}  
.mypage-head .infor li .tit {
    font-size: 13px;
    font-weight: 700;
    color: #555;
}
.mypage-head .infor li .num {
    display: inline-block;
    padding-left: 15px;
    font-size: 18px;
    color: #32cd32;
    letter-spacing: -1.16px;
    font-weight: 500;
}
.mypage-head .infor li .unit {
    display: inline-block;
    padding: 0 0 0 5px;
    font-size: 13px;
    font-weight: 700;
    color: #555;
}   
.mypage-ix {
    position: relative;
    width: 100%;
}
.mypage-ix:after {
    content: "";
    display: block;
    clear: both;
}
.mypage-lnb {
    position: relative;
    top: -62px;
    float: left;
    width: 169px;
    padding-left: 10px;
}

.mypage-lnb ul {
    width: 140px;
}
.mypage-lnb li {
    margin-top: 10px;
    text-align: left;
}
.mypage-lnb li h2 {
    padding-top: 10px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -1px;
    color: #333;
    font-weight: bold;
}
.mypage-lnb ul {
    width: 140px;
}

.mypage-lnb li a {
    font-size: 13px;
    line-height: 18p;
    letter-spacing: -.8px;
    color: #333;
}
.mypage-lnb .line {
    margin-top: 10px;
    border-top: 1px solid #e5e5e5;
}
.mypage-conts {
    float: left;
    width: 850px;
    min-height: 640px;
    padding: 0 29px 40px;
    background: #fff;
}
.title-area2 {  
    overflow: hidden;
    margin-top: 30px;
    position: relative;
    width: 100%;
    font-size: 0;
    line-height: 0;
}
.title-area2 .tit {
    float: left;
    color: #333;
    font-size: 20px;
    line-height: 30px;
}
.title-area2 .tit em {
    display: inline-block;
    margin-left: 5px;
    padding: 0;
    font-style: normal;
    font-size: 12px;
    line-height: 18px;
    vertical-align: 0;
}
.title-area2 .btnMore {
    position: absolute;
    top: 5px;
    right: 0;
    padding: 0 15px 0 0;
   
    color: #666;
    font-size: 14px;
    line-height: 20px;
    vertical-align: top;
}

.mypage-step {
    overflow: hidden;
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #f5f5f5;
}
.mypage-step li:first-child {
    background: 0 0;
}
.mypage-step li {
    float: left;
    position: relative;
    width: 20%;
    height: 117px;
    background: url(https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_arrow11x21.png) 0 50% no-repeat;
    font-size: 0;
    line-height: 0;
}
.mypage-step li em {
    top: 25px;
    color: #888;
    font-style: normal;
    font-size: 40px;
    line-height: 50px;
    font-weight: 500;
}
.mypage-step li span {
    top: 70px;
    color: #666;
    font-size: 16px;
    line-height: 22px;
}
.mypage-step li em, .mypage-step li span {
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    vertical-align: top;
}

.mypage-conts .title-area {
    padding-top: 25px;
}

.title-area {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 36px 0 7px;
    border-bottom: 1px solid #666;
    font-size: 0;
    line-height: 0;
}
.mgT15 {
    margin-top: 15px!important;
}
.title-area .tit {
    float: left;
    color: #333;
    font-size: 20px;
    line-height: 30px;
}
.title-area .btnMore {
    position: absolute;
    bottom: 10px;
    right: 0;
    padding: 0 15px 0 0;
    
    font-size: 14px;
    line-height: 20px;
    vertical-align: top;
}
.cate_prd_list {
    border-bottom: 1px solid #ddd;
}
.cate_prd_list>li {
    position: relative;
    float: left;
    width: 255px;
    padding: 30px 20px 35px;
}
li.nodata, td.nodata {
    width: 100%!important;
    padding: 150px 15px 80px!important;
   
    color: #888!important;
    font-size: 16px!important;
    text-align: center!important;
    line-height: 20px!important;
}
.area-over {
    overflow: hidden;
    position: relative;
    width: 100%;
}
.area-over .left {
    float: left;
    width: 380px;
}
.area-over .right {
    float: right;
    width: 380px;
}

</style>