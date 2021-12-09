const initialState = {
    data: {
        'ID Nation': 'filler',
        'Nation': 'USA',
        'ID Year': '1990',
        'Year': '2021',
        'Population': '8 million',
        'Slug Nation': 'filler'
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                data: {},
                isFetching: true,
                error: ''
            }
            case FETCH_SUCCESS:
                return {
                    ...state,
                    data: action.payload,
                    isFetching: false,
                    error: ''
                }
                case FETCH_FAIL:
                    return {
                        ...state,
                        data: {},
                        isFetching: false,
                        error: action.payload
                    }
                    default:
                        return state
    }
}