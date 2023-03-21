<template>
  <div>
    <h3>{{title}}</h3>
    <div class='mostViewProd'>
      <div class="products">
        <div class="card" :key=i v-for='(product, i) in productList'>
          <router-link :to="{name: 'product', params: {name: product.p_name, price: product.p_price, img: product.p_img, category: product.category, pnum: product.p_number}}">
            <img :src="product.p_img" class="card-img-top" alt="product">
            <div class="card-body" style="padding:0">
              <div class="card-text">
                <p class="product-title" style="margin:0;"><b>{{product.p_name}}</b></p>
                <p class="product-price">{{Number(product.p_price).toLocaleString()}}원</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestBody: {},
      productList: {},
      fn_flowDisp: null
    }
  },
  props: {
    title: String
  },
  mounted(){
    this.fn_flowDisp = setInterval(()=>{
      this.flowDisplay()
    }, 1900)
    this.prodToDisplay()
  },
  unmounted() {
    clearInterval(this.fn_flowDisp)
  },
  methods: {
    prodToDisplay() {
      this.$axios.post(this.$serverUrl+'/admin/product', {
        params: this.requestBody,
      }).then((res) => {
        this.productList = res.data
      }).catch((err)=>{
        if (err.message.indexOf('Network Error') > -1) {
          alert('Server Error. Access Later')
        }
      })
    },
    flowDisplay() {
      const product = document.querySelectorAll('.card')
      const clone = document.querySelector('.card:first-child').cloneNode(true)
      setTimeout(()=>{
        for(const i in product){
          if(i>0){
            product[i].style.transform="translateX(-270px)"
            product[i].style.transition="0.8s linear"
          }
        }
      })
      setTimeout(()=>{
        document.querySelector(".products").appendChild(clone)
        product[0].remove()
        for(const i in product){
          if(i>0) product[i].removeAttribute('style')
        }
      },800)
    }
  }
}
</script>

<style scoped>
  h3 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .mostViewProd {
    display:flex;
    justify-content:center;
    align-items:center;
    width:1200px;
    height:380px;
    margin: 5px auto 50px;
    overflow: hidden;
  }
  .products {
    display: flex;
    justify-content:left;
    min-width: 2700px;
  }
  .card {
    display: block;
    height: 380px;
    min-width: 250px;
    max-width: 250px;
    background: white;
    border: 1px solid lightgrey;
    margin: 0 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  img {
    display: block;
    height: 300px;
    margin: 0;
  }
</style>
