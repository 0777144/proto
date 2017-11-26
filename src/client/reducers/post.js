import {
  REQUEST_POST,
  RECEIVE_POST,
} from '../actions'

export default function post(state = {
  isFetching: false,
  data: {},
}, action) {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.post,
      })
    default:
      return state
  }
}
