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
       let filterArray = state.formData.filter(data=> data.Id != action.data )
       return {
            ...state,
            formData : filterArray
        }
    case 'UPDATE_TO_CART' :
        let fillArray = state.formData.filter(data=> data.Id != action.data)
        return {
            ...state,
            formData : fillArray
        }   




    }
}