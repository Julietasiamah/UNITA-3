const initialState = { favourites: { content: [] } };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      console.log(action.payload + " Aggiunto ai preferiti");
      return { ...state, favourites: { ...state.favourites, content: [...state.favourites.content, action.payload] } };
    default:
      return state;
  }
}; //lo state prende valore inziale e ogni volta si aggiorna
export default mainReducer;
