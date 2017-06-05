
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  //...reducers,
  router: routerReducer
})

export default rootReducer
