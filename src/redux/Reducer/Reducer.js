const initialState = {
    formData : []
}
export default function formItem (state= initialState, action) {
    switch (action.type){
        case 'ADD_TO_CART' :
        return {
           formData : [...state.formData , action.val]
        }
 
    case 'REMOVE_TO_CART' :
       let filterArray = state.formData.filter(data=> data.Id !== action.data )
       return {
            ...state,
            formData : filterArray
        }
    case 'UPDATE_TO_CART' :
        const { Id } = action.data;
        let findIdx = state.formData.findIndex(obj=> obj.Id == Id)
        const stateUdated = {...state};
        stateUdated.formData[findIdx] = action.data;
        return {
            ...state
        }   

    }
}