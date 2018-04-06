export const INC = 'INC';
export const DEC = 'DEC';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE = 'STORE';
export const DELETE = 'DELETE';


export const increment = () => {
  return {
    type: INC
  }
}

export const decrement = () => {
  return {
    type: DEC
  }
}

export const add = (value) => {
  return {
    type: ADD,
    val: value
  }
}


export const subtract = (value) => {
  return {
    type: SUB,
    val: value
  }
}


export const store = () => {
  return {
    type: STORE
  }
}


export const del = (resElId) => {
  return {
    type: DELETE,
    result: resElId
  }
}
