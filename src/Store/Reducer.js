import 'redux';

const initialState = {
  counter : 0,
  result: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type === 'DEC') {
    return {
      ...state,
      counter: state.counter - 1
    }
  }

  if (action.type === 'ADD') {
    return {
      ...state,
      counter: state.counter + action.val
    }
  }

  if (action.type === 'SUB') {
    return {
      ...state,
      counter: state.counter - action.val
    }
  }

  if (action.type === 'STORE') {
    return {
      ...state,
      result: state.result.concat({id: new Date(), val: state.counter})
    }
  }

  if (action.type === 'DELETE') {
    return {
      ...state,
      result: state.result.filter((result) => {
        return result.id !== action.id
      })
    }
  }
  return state
}

export default reducer;
