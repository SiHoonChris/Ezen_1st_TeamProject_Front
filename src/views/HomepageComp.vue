<template>
  <body>
    <category-banner/>
    <most-view-product title="이번 주 인기 상품 Top10"/>
  </body>
</template>

<script>
import CategoryBanner from "../components/CategoryBanner.vue"
import MostViewProduct from "../components/MostViewProduct.vue"

export default {
  components: {CategoryBanner, MostViewProduct}
}
</script>

<style scoped>
  body {
    width: 80%;
    min-width:1200px;
    max-width:1200px;
    height: 1000px;
    margin: 0 auto;
  }
</style>