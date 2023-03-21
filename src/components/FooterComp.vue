<template>
  <footer>
    <div class='footer'>
      <div class='footer_top'>
        <div class="left">
          <span><a href="#">회사소개</a></span>
          <span><a href="#">공지사항</a></span>
          <span><a href="#">이용약관</a></span>
          <span><a href="#">개인정보처리방침</a></span>
          <span><a href="#">청소년보호정책</a></span>
          <span><a href="#">입점·제휴문의</a></span>
          <span><a href="#">고객의견함</a></span>
          <span><a href="#">인재채용</a></span>
        </div>
        <div class="right">
          <span><a href="http://localhost:8086/">관리자</a></span>
          <span><a href="#">매장찾기</a></span>
        </div>
      </div>
      <div class="footer_center">
        <div class="footer_left">
          <h3>초록마켓 주식회사</h3>
          <p><span>대표이사: 이시훈</span><span> | </span><span>주소: 서울특별시 용산구 신흥로20길 39</span><span> | </span><span>사업자등록번호: 220-12-34567</span></p>
          <p><span>통신판매신고번호: 2023-서울용산-0123호</span><span><a href="#">사업자 정보확인</a></span><span> | </span><span>청소년 보호책임자: 크리스</span></p>
          <p>사이트 내에는 초록마켓(주)에 입점한 개별판매자가 판매하는 상품이 포함되어 있습니다.<br>해당 상품의 경우 초록마켓(주)는 통신판매중개자로서 판매 당사자가 아니며, 상품정보 및 거래 등에 대한 책임을 지지 않습니다.</p>
          <span><strong>소비자피해보상보험</strong></span><span><a href="#">서비스 가입사실 확인</a></span>
          <p>고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 구매안전서비스 소비자 피해보상보험 서비스를 이용하실 수 있습니다.</p>
          <p>Copyright © <strong>GreenMarket.Co.,LTD.</strong> All Rights Reserved.</p>
        </div>
        <div class="footer_right">
          <div style="margin-bottom:20px;">
            <div>
              <h4>고객센터</h4><span style="margin-left:4px;">1577-3355</span>
            </div>
            <p>업무시간 : 09시 ~ 22시 (명절당일 휴무)</p>
            <p>Email: onlinemart@greenmarket.co.kr</p>
          </div>
          <div>
            <div>
              <h4>분쟁처리</h4><span style="margin-left:4px;">1577-3355</span>
            </div>
            <p>Email: onlinemart@greenmarket.co.kr</p>
            <a href=#>분쟁처리 절차</a>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    width: 80%;
    min-width: 1200px;
    max-width: 1200px;
    text-align: left;
    background-color: green;
    color: white;
    font-size:12px;
    margin: 0 auto;
  }
  footer {
    background-color: green;
  }
  .footer_top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    padding: 3px 0;
  }
  .left span {
    float: left;
    margin-right: 30px;
  }
  .right span {
    float: right;
    margin-left: 30px;
  }
  .footer_center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 100%;
  }
  .footer_center span {
    margin-right: 10px;
  }
  .footer_left h3 {
    margin: 0;
  }
  .footer_right h4 {
    margin: 0;
  }
  .footer_right div div {
    display: flex;
    align-items: baseline;
  }
  .footer_bottom {
    border-top: 1px solid white;
    padding: 10px 0 4px;
  }
  p {
    margin: 1px;
  }
  a {
    color: white;
  }
</style>
