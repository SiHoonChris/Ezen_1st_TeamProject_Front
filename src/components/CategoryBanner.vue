<template>
  <div class="main_menu">
    <div class="vertical_category" @mouseenter="spreader" @mouseleave="spreader">
      <div class="category-large">
        <ul>
          <li @mouseenter="innerList" class="list1">쌀·잡곡</li>
          <li @mouseenter="innerList" class="list2">과일·견과·건과</li>
          <li @mouseenter="innerList" class="list3">수산·건어물</li>
          <li @mouseenter="innerList" class="list4">정육·계란류</li>
          <li @mouseenter="innerList" class="list5">건강식품</li>
          <li @mouseenter="innerList" class="list6">차·음료·생수·유제품</li>
          <li @mouseenter="innerList" class="list7">과자·간식·빵·빙과</li>
        </ul>
      </div>
      <div class="submenu">
        <ul class="list1" style="display:none">
          <li><router-link to="#">쌀</router-link></li>
          <li><router-link to="#">잡곡</router-link></li>
        </ul>
        <ul class="list2" style="display:none">
          <li><router-link to="#">생과일</router-link></li>
          <li><router-link to="#">견과류</router-link></li>
          <li><router-link to="#">과일가공품</router-link></li>
        </ul>
        <ul class="list3" style="display:none">
          <li><router-link to="#">수산물</router-link></li>
          <li><router-link to="#">건어물</router-link></li>
          <li><router-link to="#">수산가공품</router-link></li>
        </ul>
        <ul class="list4" style="display:none">
          <li><router-link to="#">소고기</router-link></li>
          <li><router-link to="#">돼지고기</router-link></li>
          <li><router-link to="#">닭/계란</router-link></li>
          <li><router-link to="#">육가공품</router-link></li>
        </ul>
        <ul class="list5" style="display:none">
          <li><router-link to="#">홍삼</router-link></li>
          <li><router-link to="#">영양제</router-link></li>
        </ul>
        <ul class="list6" style="display:none">
          <li><router-link to="#">두유</router-link></li>
          <li><router-link to="#">차류</router-link></li>
          <li><router-link to="#">유제품</router-link></li>
          <li><router-link to="#">생수</router-link></li>
          <li><router-link to="#">음료</router-link></li>
        </ul>
        <ul class="list7" style="display:none">
          <li><router-link to="#">빵</router-link></li>
          <li><router-link to="#">간식</router-link></li>
          <li><router-link to="#">빙과</router-link></li>
          <li><router-link to="#">과자</router-link></li>
        </ul>
      </div>
    </div>
    <nav class="navbar">
      <div class="main_category">전체 카테고리</div>
      <div><router-link to="#" class="navMenu">이번 달 특가</router-link></div>
      <div><router-link to="#" class="navMenu">등급 회원 라운지</router-link></div>
      <div><router-link to="#" class="navMenu">기획 상품</router-link></div>
      <div><router-link to="#" class="navMenu">고단백 식사</router-link></div>
      <div><router-link to="#" class="navMenu">다이어트</router-link></div>
      <div><router-link to="#" class="navMenu">비건 푸드</router-link></div>
    </nav>
    <div id="commercialBanner" class="myCarousel carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#commercialBanner" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#commercialBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#commercialBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/AdBanner/AdBannerChoroc1.jpg" class="d-block" height="368px" alt="pic1">
        </div>
        <div class="carousel-item">
          <img src="../assets/AdBanner/AdBannerChoroc2.jpg" class="d-block" height="368px" alt="pic2">
        </div>
        <div class="carousel-item">
          <img src="../assets/AdBanner/AdBannerChoroc3.jpg" class="d-block" height="368px" alt="pic3">
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#commercialBanner" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#commercialBanner" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      spreaded: false
    }
  },
  methods: {
    spreader() {
      if(this.spreaded === false) {
        document.querySelector(".vertical_category").style.width='200%'
        document.querySelector(".submenu").style.display="block"
        this.spreaded = true
      } 
      else {
        document.querySelector(".vertical_category").style.width='revert'
        document.querySelector(".submenu").style.display="none"
        this.spreaded = false
      }
    },
    innerList(event) {
      const smallCategories = document.querySelectorAll(".submenu ul")
      for(let i of smallCategories) {
        if(i.className === event.target.className) {
          document.querySelector('.submenu ul.'+i.className).style.display="block"
        }
        else {
          document.querySelector('.submenu ul.'+i.className).style.display="none"
        }
      }
    }
  }
}
</script>

<style scoped>
  .main_menu {
    margin: 8px auto;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(8, 12.5%);
    height: 421px;
    width: 100%;
    gap: 0;
    grid-template-areas:
      "b b b b b"
      "a c c c c"
      "a c c c c"
      "a c c c c"
      "a c c c c"
      "a c c c c"
      "a c c c c"
      "a c c c c";
    margin-bottom: 40px;
  }
  .vertical_category {
    grid-area: a;
    display: flex;
    width:100%;
    background-color:#33cc33;
    z-index: 3;
    border-bottom: 1px solid lightgrey;
  }
  .category-large {
    height: 100%;
    width: 100%;
    max-width: 240px;
    text-align:center;
    color:white;
    font-weight:bold;
  }
  ul {
    height: 100%;
    padding:0;
    margin: 0;
  }
  li {
    display:flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 16px;
    border-bottom: 1px solid white;
    height: 14.3%;
    margin: 0;
    cursor: pointer;
  }
  li:first-child {
    border-top: 1px solid white;
  }
  li:last-child {
    border: none;
  }
  li:hover {
    background: white;
    color: green;
  }
  .submenu {
    display: none;
    background: white;
    width: 50%;
    height: 100%;
    border-top: 1px solid lightgrey;
  }
  li a:hover {
    color: green;
    font-size: 18px;
  }
  #category {
    height: 50px;
    font-size:25px;
    border-bottom: 2px solid white;
    text-align: center;
  }
  .navbar {
    grid-area: b;
    background-color: white;
    padding:0;
    z-index:2;
  }
  .main_category {
    width:20%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    color:white;
    background-color:#33cc33;
    font-weight:bold;
    font-size: 24px;
    cursor: pointer;
  }
  .navbar .navMenu:hover{
    border-bottom: solid 2px #33cc33;
  }
  div a {
    color: #33cc33;
    font-weight: bold;
    text-decoration: none;
  }
  div a:first-child {
    margin-left: 35px
  }
  div a:last-child {
    margin-right: 35px
  }
  .myCarousel {
    grid-area: c;
    z-index:1;
  }
  .products_carousel {
    width:100%;
    height:400px;
  }
</style>
