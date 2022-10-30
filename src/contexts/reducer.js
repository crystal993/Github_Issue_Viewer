export const reducer = (state, action) => {
  switch(action.type){
    case "LOADING" : {
      return{
        loading: true,
        data :[],
        pageNumber: 0,
        error: null,
        reachedEnd: false
      }
    }
    case "SUCCESS" : {
      // console.log('이전', state.data)
      // console.log('새것', action.data)
      return {
        loading: false,
        data :[...state.data, ...action.data],
        pageNumber: state.pageNumber +1,
        error : null,
        reachedEnd: false
      }
    }
    case "REACH_END":{
      // console.log(state.pageNumber, 'Reach')
      return {
        loading: false,
        data : state.data,
        pageNumber: state.pageNumber +1,
        error : null,
        reachedEnd: true
      }
    }
    case "ERROR" : {
      return {
        loading: false,
        data : null,
        pageNumber:state.pageNumber,
        error:action.error,
        reachedEnd: false
      }
    }
    default:
      throw new Error ('invalid action type')
  }
}

