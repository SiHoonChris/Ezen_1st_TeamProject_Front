<template>
    <div class="row mt-2">                                              
        <div class="col-md-12">
            <div class="inputbox mt-3 mr-2"> <input type="text" name="cardname" class="form-control" placeholder="홍길동의 카드" /> <span>카드 이름</span> </div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-md-3">
            <div class="inputbox mt-3 mr-2"> <input type="text" name="card1" class="form-control" maxlength="4" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');" aria-describedby="helpId" placeholder="0000" /> <span>카드 번호</span> </div>
        </div>
        <div class="col-md-3">
            <div class="inputbox mt-3 mr-2"> <input type="password" name="card2" class="form-control" maxlength="4" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');" aria-describedby="helpId" placeholder="0000" />  </div>
        </div>
        <div class="col-md-3">
            <div class="inputbox mt-3 mr-2"> <input type="password" name="card3" class="form-control" maxlength="4" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');" aria-describedby="helpId" placeholder="0000" />  </div>
        </div>
        <div class="col-md-3">
            <div class="inputbox mt-3 mr-2"> <input type="text" name="card4" class="form-control" maxlength="4" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');" aria-describedby="helpId" placeholder="0000" />  </div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-md-3">
            <div class="inputbox mt-3 mr-2"> <input type="text" name="cardm" class="form-control" maxlength="2" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');" aria-describedby="helpId" placeholder="MM" /> <span>만료 기한</span> </div>
        </div>
        <div class="col-md-3">
            <div class="inputbox mt-3 mr-2"> <input type="text" name="cardy" class="form-control" maxlength="2" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');" aria-describedby="helpId" placeholder="YY" />  </div>
        </div>
        <div class="col-md-6">
            <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" maxlength="3" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');" aria-describedby="helpId" placeholder="000" /> <span>CVC</span> </div>
        </div>
    </div>                                

    <br/>
    <div class="row mb-md-5">
        <div class="col">
            <button type="button" name="" id="" class="btn  btn-lg btn-block " v-bind:disabled="saveCardInfo"> &nbsp; 카드 정보 입력 완료 &nbsp; </button>
        </div>
    </div> 
</template>

<script>
    export default {
        computed: {
            saveCardInfo() {
                return true
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
    color: rgb(231, 240, 157) !important;
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

</style>