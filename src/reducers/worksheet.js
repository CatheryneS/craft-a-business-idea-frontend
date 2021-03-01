const initialState = {
    loves: [],
    goodAts: [],
    worldNeeds: []
}

const worksheet = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_LOVES_TO_WORKSHEET":
            const loves = {
                ...state,
                loves: state.loves.concat(action.loveContent)
            }
            return loves

        case "ADD_GOODATS_TO_WORKSHEET":
            const goodAts = {
                ...state,
                goodAts: state.goodAts.concat(action.goodAtContent)
            }
            return goodAts

        case "ADD_WORLD_NEEDS_TO_WORKSHEET":
            const worldNeeds = {
                ...state,
                worldNeeds: state.worldNeeds.concat(action.worldNeedContent)
            }
            return worldNeeds

        default:
            return state;
    }
}

export default worksheet;