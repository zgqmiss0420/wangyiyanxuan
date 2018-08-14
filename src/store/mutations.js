
import {
  RECEIVE_DATA,
  RECEIVE_CAROUSE,
  RECEIVE_HOME,
  RECEIVE_DETAIL,
  RECEIVE_NAV
} from './mutation-types'
export default {
  [RECEIVE_DATA](state,{data}){
  state.data = data
  },
  [RECEIVE_CAROUSE](state,{carouse}) {
    state.carouse = carouse
  },
  [RECEIVE_HOME](state,{home}) {
    state.home = home
  },
  [RECEIVE_DETAIL](state,{detail}) {
    state.detail = detail
  },
  [RECEIVE_NAV](state,{nav}) {
    state.nav = nav
  },
}
