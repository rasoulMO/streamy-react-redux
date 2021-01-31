export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            //anytime we return a data from reducer we hvae to return a new array or object or any type!!
            return [...state, action.payload];
        default:
            return state;
    }
};