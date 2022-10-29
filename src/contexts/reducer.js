export const reducer = (state, action) => {
  switch(action.type){
    case "LOADING" : {
      return{
        loading: true,
        error: null,
        data :null,
      }
    }
    case "SUCCESS" : {
      return {
        loading: false,
        data : action.data,
        error : null
      }
    }
    case "ERROR" : {
      return {
        loading: false,
        data : null,
        error:action.error
      }
    }
    default:
      throw new Error ('invalid action type')
  }
}

