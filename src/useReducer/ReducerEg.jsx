import React, { useEffect, useReducer } from 'react'

const initialState = {
  loading: false,
  data: [],
  error: null,
}


function reducerFunc(state, action){
  console.log('func', state, action)
  return state;
}

const ReducerEg = () => {
  
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  console.log('render', state, dispatch)



  return (
    <div className='container'>ReducerEg</div>
  )
}

export default ReducerEg