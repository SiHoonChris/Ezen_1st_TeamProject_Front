<template>

  <section class="pt-5 pb-5">
      <div class="container pb-5 mb-2">
          <div class="row">
              <aside class="col-lg-9">
                  <div class="card">
                      <div class="">
                          <div id="cart-item" v-for="cart in cart_info" :key="cart.p_name">
                              <div class="cart-item d-md-flex justify-content-between"><a @click="deleteCartNum(cart.cart_number)"><span class="remove-item"> <font-awesome-icon icon="fa fa-times" /> </span></a>
                                  <div class="px-4 my-3">
                                      <router-link :to="{name: 'product', params: {name: cart.p_name, price: cart.p_price, img: cart.p_img, category: cart.c_name, pnum: cart.p_number}}" class="cart-item-product">
                                            <div class="cart-item-product-thumb"><img v-bind:src="cart.p_img" alt="Product"></div>
                                            <div class="cart-item-product-info">
                                                <h4 class="cart-item-product-title">{{ cart.p_name }}</h4><span><strong>{{ Number(cart.p_price).toLocaleString() }} 원</strong></span>
                                            </div>                                  
                                      </router-link>
                                  </div>
                                  <div class="px-3 my-3 text-center">
                                      <div class="cart-item-label">수량</div>
                                      <div class="count-input">
                                        <!-- <input type="number" class="form-control form-control-lg text-center" min="1" v-model="cart.o_count" readonly/> -->
                                        <input type="text" class="form-control form-control-lg text-center" min="1" v-model="cart.o_count" readonly/>
                                      </div>
                                  </div>
                                  <div class="px-3 my-3 text-center">
                                      <div class="cart-item-label">상품금액</div><span class="text-xl font-weight-medium">{{ Number(cart.o_total_price).toLocaleString() }} 원</span>
                                  </div>
  
                              </div>
                          </div>
                      </div>
                  </div>
              </aside>
              <aside class="col-lg-3">
                  <div class="card">
                      <div class="card-body">
                        <dl class="dlist-align">
                              <dt>총 상품수: &nbsp;</dt>
                              <dd class="text-right ml-3">{{ Number(cart_info.length).toLocaleString() }}</dd>
                          </dl>
                          <dl class="dlist-align">
                              <dt>총 구매수량: &nbsp;</dt>
                              <dd class="text-right ml-3">{{ Number(totalProducts).toLocaleString() }}</dd>
                          </dl>
                          <dl class="dlist-align">
                              <dt>총 상품금액: &nbsp;</dt>
                              <dd class="text-right ml-3">{{ Number(orderAmount).toLocaleString() }} 원</dd>
                          </dl>
                          <dl class="dlist-align">
                              <dt>배송비: &nbsp;</dt>
                              <dd class="text-right ml-3">{{ Number(shipping).toLocaleString() }} 원</dd>
                          </dl>
                          <dl class="dlist-align">
                              <dt>총 결제금액: &nbsp;</dt>
                              <dd class="text-right text-dark b ml-3"><strong>{{ Number(totalAmount).toLocaleString() }} 원</strong></dd>
                          </dl>
                          <hr> 
                          <!-- <router-link :to="{name: 'PaymentPage', params: {paycart: 1}}" v-show="this.$store.state.toCartPage" class="btn btn-success btn-square btn-main mt-2" data-abc="true">주문하기</router-link> -->
                          <button @click="goToPayments()" v-show="this.$store.state.toCartPage" class="btn btn-success btn-square btn-main mt-2" data-abc="true" v-bind:disabled="enableOreder">주문하기</button>
                          <a href="/" class="btn btn-primary btn-square btn-main mt-2" data-abc="true"> 쇼핑 계속하기 </a>                                          
                      </div>
                  </div>
              </aside>
          </div>
            <!-- Button trigger modal -->
            <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button> -->
  
            <!-- Modal -->
            <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Woohoo, you're reading this text in a modal!
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div> -->
            <!-- Modal -->
      </div>
  </section> 
  
  
  
      <!-- <div class="container pb-5 mb-2">
          <br/><br/>
  
          <div id="cart-item" v-for="i in 3" :key="i">
              <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><font-awesome-icon icon="fa fa-times" /></span>
                  <div class="px-4 my-3">
                      <a class="cart-item-product" href="#">
                          <div class="cart-item-product-thumb"><img src="https://attach.choroc.com/web/goods/1/img1/006964_20210414111458.jpg" alt="Product"></div>
                          <div class="cart-item-product-info">
                              <h4 class="cart-item-product-title">Canon EOS M50 Mirrorless Casdfsdfdsffmera</h4><span><strong>Type:</strong> Mirrorless</span><span><strong>Color:</strong> Black</span>
                          </div>
                      </a>
                  </div>
                  <div class="px-3 my-3 text-center">
                      <div class="cart-item-label">Quantity</div>
                      <div class="count-input">
                      <input type="number" class="form-control form-control-lg text-center" min="1" value="1">
                      </div>
                  </div>
                  <div class="px-3 my-3 text-center">
                      <div class="cart-item-label">Subtotal</div><span class="text-xl font-weight-medium">$910.00</span>
                  </div>
  
              </div>
          </div>
      
  
          <div class="px-3 my-3 text-start">
              <div class="py-2">
                  <span class="fw-bold d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">주문금액: &nbsp;</span>
                  <span class="d-inline-block align-middle text-xl font-weight-medium">$188.50</span>
              </div>
              <div class="py-2">
                  <span class="fw-bold d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">배송비: &nbsp;</span>
                  <span class="d-inline-block align-middle text-xl font-weight-medium">$188.50</span>
              </div>
              <div class="py-2">
                  <span class="fw-bold d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">총 주문금액: &nbsp;</span>
                  <span class="d-inline-block align-middle text-xl font-weight-medium">$188.50</span>
              </div>
          </div>
  
          <hr class="my-2">
          <div class="row pt-3 pb-5 mb-2">
              <div class="col-sm-6 mb-3"><a class="btn btn-style-1 btn-secondary btn-block" href="#"><font-awesome-icon icon="fa fe-icon-refresh-ccw"/>&nbsp;Update Cart</a></div>
              <div class="col-sm-6 mb-3"><a class="btn btn-style-1 btn-success btn-block" href="#"><font-awesome-icon icon="fa fa-credit-card"/>&nbsp;&nbsp;주문하기</a></div>
          </div>       
      </div> -->
  
  </template>
  
  
  <script>
  
  export default {
     data() {
          return {
              cart_info: [],
              orderAmount: 2000,
              totalProducts: 0
          }
      },
      mounted() {
          
      },
      created() {
          
          this.getCartInfo()
      },
      computed: {
        enableOreder() {
          return !(this.cart_info.length > 0)
        },
        totalAmount() {
          return this.orderAmount + this.shipping;
        },
        shipping() {
          return this.cart_info.length < 1 ? 0 : 2500
        }
      }
      ,
      methods: {
          getCartInfo() {
  
              this.getPaymentInfo(this.$store.state.bid)
  
          },async getPaymentInfo(bId) {
              await this.$axios.post(this.$serverUrl+'/payment/paybycart', {
                  cart_b_id: bId,
                  cart_selected: 1
              }).then((res) => {
                  this.paymentInfo = res.data
                  this.cart_info = this.paymentInfo.cartList
                  this.$store.commit('setHeaderCart', this.cart_info.length)
                  this.orderAmount = 0
                  this.totalProducts = 0
                  for (var i = 0; i < this.cart_info.length; i++) {
                      
                      this.orderAmount += this.cart_info[i].o_total_price
                      this.totalProducts += this.cart_info[i].o_count
                  }

              }).catch((err) => {
                  console.log(err)
                  if (err.message.indexOf('Network Error') > -1) {
                  alert('서버 통신 문제 : 잠시 후에 다시 시도해주십시오')
                  }
              })
  
          }, autoHyphen(target) {
              target.value = target.value
              .replace(/[^0-9]/g, '')
              .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
          }, async deleteCartNum(cnum) {
            await this.$axios.post(this.$serverUrl+'/payment/deletethisproduct', {
                  cart_number: cnum,
                  cart_selected: 1
              }).then((res) => {
                  if (res.data = 'YES') {
                    this.getPaymentInfo(this.$store.state.bid)
                  }

              }).catch((err) => {
                  console.log(err)
                  if (err.message.indexOf('Network Error') > -1) {
                  alert('서버 통신 문제 : 잠시 후에 다시 시도해주십시오')
                  }
              })
          }, goToPayments() {
            // this.$router.push({name: 'PaymentPage', params: {paycart: 1}});
            if (this.cart_info.length > 0) {
              this.$router.push({name: 'PaymentPage', query: {paycart: 1}});
              // this.$router.replace({name: 'PaymentPage', query: {}})
            } else {
              const answer = confirm("장바구니가 비었습니다. 메인페이지로 이동하겠습니까?")
              if(answer) {
                this.$router.replace('/')
              }
            }
            
          }
  
      }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body{background-color: #eeeeee;font-family: 'Open Sans',serif;font-size: 14px}
  .container-fluid{margin-top:70px}.card-body{-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 1.40rem}
  .img-sm{width: 80px;height: 80px}.itemside .info{padding-left: 15px;padding-right: 7px}
  .table-shopping-cart .price-wrap{line-height: 1.2}
  .table-shopping-cart .price{font-weight: bold;margin-right: 5px;display: block}
  .text-muted{color: #969696 !important}
  a{text-decoration: none !important}
  .card { 
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: 0px}
      .itemside{position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;width: 100%}
      .dlist-align{display: -webkit-box;display: -ms-flexbox;display: flex}
      [class*="dlist-"]{margin-bottom: 5px}
      .coupon{border-radius: 1px}
      .price{font-weight: 600;color: #212529}
      .btn.btn-out{outline: 1px solid #fff;outline-offset: -5px}
      .btn-main{border-radius: 2px;text-transform: capitalize;font-size: 15px;padding: 10px 19px;cursor: pointer;color: #fff;width: 100%}
      .btn-light{color: #ffffff;background-color: #F44336;border-color: #f8f9fa;font-size: 12px}
      .btn-light:hover{color: #ffffff;background-color: #F44336;border-color: #F44336}
      .btn-apply{font-size: 11px}
  
  </style>
  
  <style scoped>
  body{
      margin-top:20px;
      background:#eee;
  }
  .product-card {
    position: relative;
    max-width: 380px;
    padding-top: 12px;
    padding-bottom: 43px;
    transition: all 0.35s;
    border: 1px solid #e7e7e7;
  }
  .product-card .product-head {
    padding: 0 15px 8px;
  }
  .product-card .product-head .badge {
    margin: 0;
  }
  .product-card .product-thumb {
    display: block;
  }
  .product-card .product-thumb > img {
    display: block;
    width: 100%;
  }
  .product-card .product-card-body {
    padding: 0 20px;
    text-align: center;
  }
  .product-card .product-meta {
    display: block;
    padding: 12px 0 2px;
    transition: color 0.25s;
    color: rgba(140, 140, 140, .75);
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
  }
  .product-card .product-meta:hover {
    color: #8c8c8c;
  }
  .product-card .product-title {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
  }
  .product-card .product-title > a {
    transition: color 0.3s;
    color: #343b43;
    text-decoration: none;
  }
  .product-card .product-title > a:hover {
    color: #ac32e4;
  }
  .product-card .product-price {
    display: block;
    color: #404040;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
  }
  .product-card .product-price > del {
    margin-right: 6px;
    color: rgba(140, 140, 140, .75);
  }
  .product-card .product-buttons-wrap {
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
  }
  .product-card .product-buttons {
    display: table;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .11);
  }
  .product-card .product-button {
    display: table-cell;
    position: relative;
    width: 50px;
    height: 40px;
    border-right: 1px solid rgba(231, 231, 231, .6);
  }
  .product-card .product-button:last-child {
    border-right: 0;
  }
  .product-card .product-button > a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    color: #404040;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
  }
  .product-card .product-button > a:hover {
    background-color: #ac32e4;
    color: #fff;
  }
  .product-card:hover {
    border-color: transparent;
    box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
  }
  .product-category-card {
    display: block;
    max-width: 400px;
    text-align: center;
    text-decoration: none !important;
  }
  .product-category-card .product-category-card-thumb {
    display: table;
    width: 100%;
    box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
  }
  .product-category-card .product-category-card-body {
    padding: 20px;
    padding-bottom: 28px;
  }
  .product-category-card .main-img, .product-category-card .thumblist {
    display: table-cell;
    padding: 15px;
    vertical-align: middle;
  }
  .product-category-card .main-img > img, .product-category-card .thumblist > img {
    display: block;
    width: 100%;
  }
  .product-category-card .main-img {
    width: 65%;
    padding-right: 10px;
  }
  .product-category-card .thumblist {
    width: 35%;
    padding-left: 10px;
  }
  .product-category-card .thumblist > img:first-child {
    margin-bottom: 6px;
  }
  .product-category-card .product-category-card-meta {
    display: block;
    padding-bottom: 9px;
    color: rgba(140, 140, 140, .75);
    font-size: 11px;
    font-weight: 600;
  }
  .product-category-card .product-category-card-title {
    margin-bottom: 0;
    transition: color 0.3s;
    color: #343b43;
    font-size: 18px;
  }
  .product-category-card:hover .product-category-card-title {
    color: #ac32e4;
  }
  .product-gallery {
    position: relative;
    padding: 45px 15px 0;
    box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
  }
  .product-gallery .gallery-item::before {
    display: none !important;
  }
  .product-gallery .gallery-item::after {
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .26);
  }
  .product-gallery .video-player-button, .product-gallery .badge {
    position: absolute;
    z-index: 5;
  }
  .product-gallery .badge {
    top: 15px;
    left: 15px;
    margin-left: 0;
  }
  .product-gallery .video-player-button {
    top: 0;
    right: 15px;
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
  .product-gallery .product-thumbnails {
    display: block;
    margin: 0 -15px;
    padding: 12px;
    border-top: 1px solid #e7e7e7;
    list-style: none;
    text-align: center;
  }
  .product-gallery .product-thumbnails > li {
    display: inline-block;
    margin: 10px 3px;
  }
  .product-gallery .product-thumbnails > li > a {
    display: block;
    width: 94px;
    transition: all 0.25s;
    border: 1px solid transparent;
    background-color: #fff;
    opacity: 0.75;
  }
  .product-gallery .product-thumbnails > li:hover > a {
    opacity: 1;
  }
  .product-gallery .product-thumbnails > li.active > a {
    border-color: #ac32e4;
    cursor: default;
    opacity: 1;
  }
  .product-meta {
    padding-bottom: 10px;
  }
  .product-meta > a, .product-meta > i {
    display: inline-block;
    margin-right: 5px;
    color: rgba(140, 140, 140, .75);
    vertical-align: middle;
  }
  .product-meta > i {
    margin-top: 2px;
  }
  .product-meta > a {
    transition: color 0.25s;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }
  .product-meta > a:hover {
    color: #8c8c8c;
  }
  .cart-item {
    position: relative;
    margin-bottom: 30px;
    padding: 0 50px 0 10px;
    background-color: #fff;
    box-shadow: 0 12px 20px 1px rgba(7, 58, 2, 0.09);
  }
  .cart-item .cart-item-label {
    display: block;
    margin-bottom: 15px;
    color: #8c8c8c;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .cart-item .cart-item-product {
    display: table;
    width: 510px;
    text-decoration: none;
  }
  .cart-item .cart-item-product-thumb, .cart-item .cart-item-product-info {
    display: table-cell;
    vertical-align: top;
  }
  .cart-item .cart-item-product-thumb {
    width: 110px;
  }
  .cart-item .cart-item-product-thumb > img {
    display: block;
    width: 100%;
  }
  .cart-item .cart-item-product-info {
    padding-top: 5px;
    padding-left: 15px;
  }
  .cart-item .cart-item-product-info > span {
    display: block;
    margin-bottom: 2px;
    color: #404040;
    font-size: 12px;
  }
  .cart-item .cart-item-product-title {
    margin-bottom: 8px;
    transition: color, 0.3s;
    color: #343b43;
    font-size: 16px;
    font-weight: bold;
  }
  .cart-item .cart-item-product:hover .cart-item-product-title {
    color: #06a413;
  }
  .cart-item .count-input {
    display: inline-block;
    width: 85px;
  }
  .cart-item .remove-item {
    right: -10px !important;
  }
  @media (max-width: 991px) {
    .cart-item {
      padding-right: 30px;
    }
    .cart-item .cart-item-product {
      width: auto;
    }
  }
  @media (max-width: 768px) {
    .cart-item {
      padding-right: 10px;
      padding-bottom: 15px;
    }
    .cart-item .cart-item-product {
      display: block;
      width: 100%;
      text-align: center;
    }
    .cart-item .cart-item-product-thumb, .cart-item .cart-item-product-info {
      display: block;
    }
    .cart-item .cart-item-product-thumb {
      margin: 0 auto 10px;
    }
    .cart-item .cart-item-product-info {
      padding-left: 0;
    }
    .cart-item .cart-item-label {
      margin-bottom: 8px;
    }
  }
  .comparison-table {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .comparison-table table {
    min-width: 750px;
    table-layout: fixed;
  }
  .comparison-table .comparison-item {
    position: relative;
    margin-bottom: 10px;
    padding: 13px 12px 18px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
  }
  .comparison-table .comparison-item .comparison-item-thumb {
    display: block;
    width: 80px;
    margin-right: auto;
    margin-bottom: 12px;
    margin-left: auto;
  }
  .comparison-table .comparison-item .comparison-item-thumb > img {
    display: block;
    width: 100%;
  }
  .comparison-table .comparison-item .comparison-item-title {
    display: block;
    margin-bottom: 14px;
    transition: color 0.25s;
    color: #404040;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }
  .comparison-table .comparison-item .comparison-item-title:hover {
    color: #ac32e4;
  }
  .remove-item {
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 22px;
    height: 22px;
    padding-left: 1px;
    border-radius: 50%;
    background-color: #ff5252;
    color: #fff;
    line-height: 23px;
    text-align: center;
    box-shadow: 0 3px 12px 0 rgba(255, 82, 82, .5);
    cursor: pointer;
  }
  .card-wrapper {
    margin: 30px -15px;
  }
  @media (max-width: 576px) {
    .card-wrapper .jp-card-container {
      width: 260px !important;
    }
    .card-wrapper .jp-card {
      min-width: 250px !important;
    }
  }
  
  </style>
  