import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate' 


// 전역변수 관리를 위한 라이브러리(중앙집중식 관리소)
export default createStore({
  state: { 
    // 어느 컴포넌트에서든 this.$store.state.변수명 을 사용하여 변수에 접근 가능
    name:'name',
    grade:'grade',
    bid: 'bid',   // 구매자 아이디
    headerCart: 0,
    // 마이페이지 버튼 눌렀을 때, 로그인이 되어 있는 상태면 마이페이지로, 로그인이 안되어있는 상태면 로그인 페이지로 이동
    loggedIn: false, // 마이페이지 버튼 경로 설정(기본값 : false)
    toMyPage: false, // 마이페이지 버튼 경로 설정(기본값 : false)
    toCartPage: false,  // 장바구니 페이지 버튼 경로 설정(기본값 : false) 
    toLoginPage: true // 로그인 상태 표시 설정(기본값 : true)

  },
  getters: { 
  // 공동의 상태를 계산하여 state의 값을 반환(computed)
  // 어느 컴포넌트에서든 this.$store.getters.함수명 으로 호출 가능
  },
  mutations: {
  // state를 변경시키기 위한 유일한 방법(동기적 로직 정의)
  // 어느 컴포넌트에서든 this.$store.commit(함수명) 으로 호출 가능
    loginPlease (state, payload) {
      state.name = payload.b_name
      state.grade = payload.b_grade
      state.bid = payload.b_id
      state.loggedIn = true
      state.toMyPage = true
      state.toCartPage = true
      state.toLoginPage = false
      
    },
    logoutPlease (state) {
      
      state.bid = 'bid'
      state.loggedIn = false
      state.toMyPage = false
      state.toCartPage = false
      state.toLoginPage = true
      
    },
    setHeaderCart(state, changed) {
      state.headerCart = changed
    }
  },
  actions: {
  // mutations와 유사 (but, 비동기적 로직 정의)
  // 어느 컴포넌트에서든 this.$store.dispatch(함수명) 으로 호출 가능
  // 각 컴포넌트에서 호출할 때 async/await 키워드를 사용할 수 있다.
  // actions 내부에서 mutations에 대한 commit이 가능하다.(그렇게 해줘야 한다)
  // (mutations에서 정의한 함수를 실행시킨다, mutations에서 정의한 함수에 파라미터를 보낸다.)

  },
  modules: {
  // 이건 나중에. 각 state들을 관리하는 개별 store(vuex)들을 모으는 공간
  },
  plugins:[createPersistedState({
    paths:['name', 'grade', 'bid', 'loggedIn', 'toMyPage', 'toLoginPage', 'toCartPage', 'headerCart']
  })]
})
