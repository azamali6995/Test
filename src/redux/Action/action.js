export const addToCart = (val) => (dispatch) => {
    return dispatch({
     type: 'ADD_TO_CART', 
     val: val,
});
};

export const removeToCart = (Id)=>(dispatch)=> {
    return dispatch({
        type : 'REMOVE_TO_CART',
        data: Id,
    });
};

export const updateToCart = (Id)=>{
    console.log("azam", Id)
//     return {
//         type : 'UPDATE_TO_CART',
//         data: Id,
//     }
};