<template>
  <div class="main">
    <div class="contents">
      <div class="login member-login">
        <h1>로그인</h1>
        <form>
          <input type="text" @click="removeRedBorder('#id')" id="id" maxlength="12" v-model="id" placeholder="아이디 / ID" v-focus/>
          <input type="password" @click="removeRedBorder('#pw')" @keyup.enter="loginAfterFormCheck()" id="pw" maxlength="12" v-model="pwd" placeholder="비밀번호 / PW" autoComplete="on"/>
        </form>
        <div class="options">
          <input type="checkbox">로그인 유지<br>
          <a href="#">아이디/비밀번호 찾기</a>
        </div>
        <button type="button" @click="loginAfterFormCheck()" id="login_btn" style="background-color: green;">로그인</button>
        <a href="http://localhost:8086/buyer/signup"><button id="join_btn">가입하기</button></a>
      </div>

      <div class="d-flex">
        <div class="vr"></div>
      </div>

      <div class="login sns-login">
        <h1>SNS 로그인</h1>
        <p style="font-size:15px">제3기관을 이용해 로그인함으로써 저는 18세 이상이며 이용 약관에 동의하며, 개인정보 보호정책을 읽었음을 확인합니다.<br><br></p>
        <button id="login_btn" style="background-color: orange;">Google 계정으로 로그인</button>
        <button id="login_btn" style="background-color: green;">NAVER 계정으로 로그인</button>
        <button id="login_btn" style="background-color: yellow; color:black;">KAKAO 계정으로 로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      pwd: '',
      requestBody: {},
      buyerInfo: {}
    }
  },
  methods: {
    login () {
      this.$axios.post(this.$serverUrl+'/buyer/login', {
        b_id: this.id,
        b_pwd: this.pwd
      }).then((res) => {
        this.buyerInfo=res.data
        if(this.buyerInfo.b_name === undefined){
          this.pwd=''
          alert('아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요')
        }
        else {
          this.$store.commit('loginPlease', this.buyerInfo)
          this.$axios.post(this.$serverUrl+'/payment/cartcount', {
            cart_b_id: this.$store.state.bid,
            cart_selected: 1
          }).then((res) => {
            this.$store.commit('setHeaderCart', res.data)                  
          }).catch((err) => {
              console.log(err)
              if (err.message.indexOf('Network Error') > -1) {
              alert('서버 통신 문제 : 잠시 후에 다시 시도해주십시오')
              }
          })
          this.$router.replace('/')
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('서버 통신 문제 : 잠시 후에 다시 시도해주십시오')
        }
      })
    },
    loginAfterFormCheck() {
      if(this.id.length===0) {
        document.querySelector('#id').style.borderColor='red'
        alert('ID를 입력해주세요')
      }
      else if(this.pwd.length===0) {
        document.querySelector('#pw').style.borderColor='red'
        alert('PW를 입력해주세요')
      }
      else {
        this.login()
      }
    },
    removeRedBorder(id) {
      if(document.querySelector(id).style.borderColor==='red'){
        document.querySelector(id).style.borderColor='revert'
      }
    }
  },
  directives: {
    focus: {
      mounted(el){
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
  .main {
    width:60%;
    min-width: 900px;
    max-width: 900px;
    margin: 50px auto;
    align-items: center;
  }
  .contents {
    height: 550px;
    border: 2px solid lightgray;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login {
    display: inline-block;
    height: 450px;
    width: 48%;
    padding: 46px 15px 0;
  }
  .d-flex{
    height: 450px;
    color: grey;
  }
  .vr {
    width: 2px;
  }
  #id, #pw {
    font-size:16px;
    width: 85%;
    height: 35px;
    margin-top: 20px;
  }
  #id:focus, #pw:focus {
    outline-color: green;
  }
  .options {
    text-align: left;
    padding: 2px 30px 10px;
    margin-bottom: 15px;
  }
  #login_btn {
    width: 90%;
    height: 40px;
    color:white;
    font-weight: bold;
    font-size: 20px;
    border-radius:5px;
    border: none;
    margin: 10px 0;
  }
  #join_btn {
    width: 90%;
    height: 40px;
    color:grey;
    font-weight: bold;
    font-size: 20px;
    border-radius:5px;
    border: grey 1px solid;
    background-color: white;
    margin: 10px;
  }
  a {
    color: gray;
  }
  p {
    width: 80%;
    margin: 30px auto 13px;
  }
</style>
