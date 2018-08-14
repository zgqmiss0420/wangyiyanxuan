import {
  RECEIVE_DATA,
  RECEIVE_CAROUSE,
  RECEIVE_HOME,
  RECEIVE_DETAIL,
  RECEIVE_NAV
} from './mutation-types'
import {
  reqData,
  reqCarouse,
  reqHome,
  reqDetail,
  reqNav
} from '../api'
export default {
  async getData({commit},cb){
    const result = await reqData()
    console.log(result);
    if(result.code===0){
      commit(RECEIVE_DATA,{data:result.data})
    }
    cb && cb()
  },
  async getCarouse({commit},cb){
    const result = await reqCarouse()
    console.log(result);
    if(result.code===0){
      commit(RECEIVE_CAROUSE,{carouse:result.focusList})
    }
    cb && cb()
  },
  async getHome({commit},cb){
    const result = await reqHome()
    console.log(result);
    if(result.code===0){
      commit(RECEIVE_HOME,{home:result.home})
    }
    cb && cb()
  },
  async getDetail({commit},cb){
    const result = await reqDetail()
    console.log(result);
    if(result.code===0){
      commit(RECEIVE_DETAIL,{detail:result.detail})
    }
    cb && cb()
  },
  async getNav({commit},cb){
    const result = await reqNav()
    console.log(result);
    if(result.code===0){
      commit(RECEIVE_NAV,{nav:result.nav})
    }
    cb && cb()
  },
}
