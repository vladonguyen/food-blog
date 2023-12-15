const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_GAMES':
            return [...action.payload];
            break;
            case 'ADD_COMMENT':
                return [...state, action.payload]
    
        default:
            return state;
    }
}

export default reducer;