<template>
<div class=" container-fluid my-5 ">
    <div class="row justify-content-center ">
        <div class="col-xl-10">
            <div class="card shadow-lg ">
                <div class="row p-2 mt-3 justify-content-between mx-sm-2">
                    <!-- <div class="col">
                        <p class="text-muted space mb-0 shop"> Shop No.78618K</p> 
                        <p class="text-muted space mb-0 shop">Store Locator</p>   
                    </div> -->
                    <!-- <div class="col">
                        <div class="row justify-content-start ">
                            <div class="col">
                                <img class="irc_mi img-fluid cursor-pointer " src="https://i.imgur.com/jFQo2lD.png"  width="70" height="70" >
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <img class="irc_mi img-fluid bell" src="https://i.imgur.com/uSHMClk.jpg" width="30" height="30"  >
                    </div> -->
                </div>
                <div class="row  mx-auto justify-content-center text-center">
                    <div class="col-12 mt-3 ">
                        <nav aria-label="breadcrumb" class="second ">
                            <ol class="breadcrumb indigo lighten-6 first  ">
                                <!-- <li class="breadcrumb-item font-weight-bold "><a class="black-text text-uppercase " href="#"><span class="mr-md-3 mr-1">BACK TO SHOP</span></a><i class="fa fa-angle-double-right " aria-hidden="true"></i></li>
                                <li class="breadcrumb-item font-weight-bold"><a class="black-text text-uppercase" href="#"><span class="mr-md-3 mr-1">SHOPPING BAG</span></a><i class="fa fa-angle-double-right text-uppercase " aria-hidden="true"></i></li> -->
                                <!-- <li class="breadcrumb-item font-weight-bold"><a class="black-text text-uppercase active-2" href="#"><span class="mr-md-3 mr-1" style="font-size: large;">결제 페이지</span></a></li> -->
                                <h2 class="card-title ">주문 정보</h2>
                            </ol>
                        </nav>
                    </div>
                </div>
            
                <div class="row justify-content-around">
                    <div class="col-md-5">
                        <div class="card border-0">
                            <div class="card-header pb-0">
                                <!-- <h2 class="card-title space ">결제 상세</h2> -->
                                <p class="card-text text-muted mt-4  space">배송지 주소</p>
                                <hr class="my-0">
                            </div>
                            <div class="card-body">
                                <div class="row justify-content-between">
                                    <!-- <div class="col-auto mt-0"><p><b>{{ buyer_info }}</b></p></div> -->
                                    <div>
                                        <div class="mt-4 mb-4">
                                        <!-- <h6 class="text-uppercase">배송지</h6> -->
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" v-model="buyer_info.b_name" readonly> <span>이름</span> </div>                                     
                                                </div>
                                                
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md-6">
                                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" v-model="buyer_info.b_address1" readonly> <span>우편번호</span> </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md-12">
                                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" v-model="buyer_info.b_address2" readonly> <span>주소</span> </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">                                              
                                                <div class="col-md-12">
                                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" v-model="buyer_info.b_address3" readonly> <span>상세주소</span> </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">                                              
                                                <div class="col-md-12">
                                                    <div class="inputbox mt-3 mr-2"> <input type="email" name="name" class="form-control" v-model="buyer_info.b_email" readonly> <span>이메일</span> </div>
                                                </div>
                                            </div>
                                            <div class="row mt-2">                                              
                                                <div class="col-md-12">
                                                    <div class="inputbox mt-3 mr-2"> <input type="text" maxlength="13" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');" name="name" class="form-control" v-model="buyer_info.b_phone" readonly> <span>연락처</span> </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <!-- <div class="col-auto"><p><b>BBBootstrap@gmail.com</b> </p></div> -->
                                </div>
                                <div class="paymentwith">
                                    <div class="row mt-4">
                                        <div class="col"><p class="text-muted mb-2">결제방식</p><hr class="mt-0"></div>
                                    </div>
                                    
                                        <nav>
                                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                                    간단 카드결제
                                                </button>
                                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                    일반 결제방식
                                                </button>
                                                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                                    기타 결제방식
                                                </button>
                                            </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <simple-card></simple-card>
                                            </div>
                                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <standard-pay></standard-pay>
                                            </div>
                                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                <extra-pay></extra-pay>
                                            </div>
                                        </div>
                                    
                                </div><!-- <div class="paymentwith"> -->
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-5">
                        <div class="card border-0 ">
                            <div class="card-header pb-0">
                                <p class="card-text text-muted mt-md-4  mb-2 space">주문 내용 <!--<span class=" small text-muted ml-2 cursor-pointer">EDIT SHOPPING BAG</span>--> </p>
                                <hr class="my-2">
                            </div>
                            <div class="card-body pt-0">
                                <div class="ordercontent" v-for="cart in cart_info" :key="cart.p_name" >
                                    <div class="row  justify-content-between">
                                        <div class="col-auto col-md-7">
                                            <div class="media flex-column flex-sm-row">
                                                <!-- 상품 이미지 -->
                                                <img class=" img-fluid" v-bind:src="cart.p_img" width="62" height="62">
                                                <div class="media-body  my-auto">
                                                    <div class="row ">
                                                        <!-- 상품명 -->
                                                        <div class="col"><p class="mb-0"><b>{{ cart.p_name }}</b></p><small class="text-muted"> {{ Number(cart.p_price).toLocaleString() }} 원</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- 주문 개수 -->
                                        <div class=" pl-0 flex-sm-col col-auto  my-auto"> <p class="boxed">{{ cart.o_count }}</p></div>
                                        <!-- 가격 -->
                                        <div class=" pl-0 flex-sm-col col-auto  my-auto "><p><b>{{ Number(cart.o_total_price).toLocaleString() }} 원</b></p></div>
                                    </div>
                                    <hr class="my-2">
                                </div>      <!-- <div class="ordercontent" v-for="i in 2" :key="i" >-->  


                                <!-- 총 합계 -->
                                <div class="row "> 
                                    <div class="col">
                                        <div class="row justify-content-between">
                                            <div class="col-4"><p class="mb-1"><b>주문 수량</b></p></div>
                                            <div class="flex-sm-col col-auto"><p class="mb-1"><b>{{ Number(totalProducts).toLocaleString() }} 개</b></p></div>
                                        </div>
                                        <div class="row justify-content-between">
                                            <div class="col-4"><p class="mb-1"><b>주문 금액</b></p></div>
                                            <div class="flex-sm-col col-auto"><p class="mb-1"><b>{{ Number(orderAmount).toLocaleString() }} 원</b></p></div>
                                        </div>
                                        <div class="row justify-content-between">
                                            <div class="col-4"><p class="mb-1"><b>배송비</b></p></div>
                                            <div class="flex-sm-col col-auto"><p class="mb-1"><b>{{ Number(shipping).toLocaleString()}} 원</b></p></div>
                                        </div>
                                        <div class="row justify-content-between">
                                            <div class="col-4"><p ><b>총 금액</b></p></div>
                                            <div class="flex-sm-col col-auto"><p  class="mb-1"><b>{{ Number(totalAmount).toLocaleString() }} 원</b></p> </div>
                                        </div><hr class="my-0">
                                    </div>
                                </div>
                                <div class="row mb-5 mt-4 ">
                                    <div class="col-md-7 col-lg-6 mx-auto"><button type="button" class="btn btn-block btn-outline-primary btn-lg" v-bind:disabled="orderEnabled"> &nbsp; 주문하기 &nbsp; </button></div>
                                </div>
                            </div> <!-- <div class="card-body pt-0"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'
import SimpleCard from '../components/PayWithSimpleCard.vue'
import ExtraPay from '../components/PayWithExtra.vue'
import StandardPay from '../components/PayWithStandard.vue'
export default {
    components: {SimpleCard, ExtraPay, StandardPay},
    // paycart: 0,
    // props: {
    //     paycart: {
    //         type: Number,
    //         default: 0
    //     }
    // },
    data() {
        return {
            buyer_info: [],
            cart_info: [],
            paymentInfo: [],
            orderAmount: 2000,
            totalProducts: 0
        }
    },
    mounted() {
        // window.addEventListener('beforeunload', this.leavePayment);
    },
    created() {
        this.getCartInfo()
    },
    computed: {
        totalAmount() {
          return this.orderAmount + this.shipping;
        },
        shipping() {
          return this.cart_info.length < 1 ? 0 : 2500
        }, 
        orderEnabled() {
            return true
        }

    },
    methods: {
        getCartInfo() {

            this.getPaymentInfo(this.$store.state.bid)

        },async getPaymentInfo(bId) {
            await this.$axios.post(this.$serverUrl+'/payment/paymentInfo', {
                cart_b_id: bId,
                cart_selected: this.$route.query.paycart
            }).then((res) => {
                this.paymentInfo = res.data
                this.buyer_info = this.paymentInfo.bInfo
                this.cart_info = this.paymentInfo.cartList
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
        }, deleteProductDirectPayment() {
            this.$axios.post(this.$serverUrl+'/payment/deletebuyerproduct', {
                cart_b_id: this.$store.state.bid,
                cart_selected: 0
            }).then((res) => {
                if (res.data = 'YES') {
                    
                }

            }).catch((err) => {
                console.log(err)
                if (err.message.indexOf('Network Error') > -1) {
                alert('서버 통신 문제 : 잠시 후에 다시 시도해주십시오')
                }
            })
        }, leavePayment(event) {
            event.preventDefault();
            event.returnValue = "";
        }

    },
    beforeUnmount() {
        console.log("log: beforeRouteLeave")
    },
    beforeRouteLeave(to, from, next) {
        // Swal.fire({
        //         html: "<p>데이터 저장이 되지 않았습니다.</p> <p>이 페이지를 나가시겠습니까?</p>",
        //         showDenyButton: true,
        //         confirmButtonText: '나가기',
        //         denyButtonText: '취소',
        //         }).then((result) => {
        //         /* Read more about isConfirmed, isDenied below */
        //         if (result.isConfirmed) {
        //             this.deleteProductDirectPayment()
        //             next()
        //         } else if (result.isDenied) {
        //             next(false)
        //         }
        //     });
        console.log("log: beforeRouteLeave")
        const answer = window.confirm("데이터 저장이 되지 않았습니다. 이 페이지를 나가시겠습니까?")
        if(answer) {
            this.deleteProductDirectPayment()
            
            next()
        } else {
            next(false)
        }
    }, watch: {
        '$route' (to, from) {
            alert("to: " + to)
            alert("from: " + from)
        }
    }
}
</script>


<style scoped>
body{
    background: linear-gradient(110deg, #BBDEFB 60%,#42A5F5  60%);                        
}
        
.shop{
    font-size: 10px;
}

.space{
    letter-spacing: 0.8px !important;
}

.second a:hover {
    color: rgb(92, 92, 92) ;
}

.active-2 {
    color: rgb(92, 92, 92) 
}


.breadcrumb>li+li:before {
    content: "" !important
}

.breadcrumb {
    padding: 0px;
    font-size: 10px;
    color: #191c20 !important;
}

.first {
    background-color: white ;
}

a {
    text-decoration: none !important;
    color: #aaa ;
}

.btn-lg,.form-control-sm:focus,
.form-control-sm:active,
a:focus,a:active {
    outline: none !important;
    box-shadow: none !important
}

.form-control-sm:focus{
    border:1.5px solid #4bb8a9 ; 
}

.btn-group-lg>.btn, .btn-lg {
    padding: .5rem 0.1rem;
    font-size: 1rem;
    border-radius: 0;
    color: white !important;
    background-color: #4bb8a9;
    height: 2.8rem !important;
    border-radius: 0.2rem !important;
}

.btn-group-lg>.btn:hover, .btn-lg:hover {
    background-color: #26A69A;
}

.btn-outline-primary{
    background-color: #fff !important;
    color:#4bb8a9 !important;
    border-radius: 0.2rem !important;   
    border:1px solid #4bb8a9;
}

.btn-outline-primary:hover{
    background-color:#4bb8a9  !important;
    color:#fff !important;
    border:1px solid #4bb8a9;
}

.card-2{
    margin-top: 40px !important;
}

.card-header{
    background-color: #fff;
    border-bottom:0px solid #aaaa !important;
}

p{
    font-size: 13px ;
}
        
.small{
    font-size: 9px !important;
}

.form-control-sm {
    height: calc(2.2em + .5rem + 2px);
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0;   
}

.cursor-pointer{
    cursor: pointer;
}

.boxed {
    padding: 0px 8px 0 8px ;
    background-color: #4bb8a9;
    color: white;
}

.boxed-1{
    padding: 0px 8px 0 8px ;
    color: black !important;
    border: 1px solid #aaaa;
}

.bell{
    opacity: 0.5;
    cursor: pointer;
}

@media (max-width: 767px) {
    .breadcrumb-item+.breadcrumb-item {
        padding-left: 0
    }
}

.inputbox {
position: relative;
margin-bottom: 20px;
width: 100%

}

.inputbox span {
position: absolute;
top: 7px;
left: 11px;
transition: 0.5s
}

.inputbox i {
position: absolute;
top: 13px;
right: 8px;
transition: 0.5s;
color: #3F51B5
}

.form-control {
border-bottom: 2px solid #eee !important;
border: none;
font-weight: 600
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0
}

.inputbox input:focus~span {
transform: translateX(-0px) translateY(-15px);
font-size: 12px
}

.inputbox input:valid~span {
transform: translateX(-0px) translateY(-15px);
font-size: 12px
}

.inputbox input:invalid~span {
transform: translateX(-0px) translateY(-15px);
font-size: 12px
}

.inputbox input:read-only~span {
transform: translateX(-0px) translateY(-15px);
font-size: 12px;
}

.inputbox input:read-only {
    color: rgb(61, 95, 73);
}

.inputbox input::placeholder {
    color: rgb(149, 165, 121);
}

.nav-tabs .nav-link {
  color: rgb(101, 107, 103) !important;
}

.nav-tabs .nav-link.active {
  color: rgb(40, 170, 138) !important;
  font-weight: bolder;
}



</style>

