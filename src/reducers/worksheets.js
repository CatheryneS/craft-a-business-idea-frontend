const initialState = {
    loves: [],
    goodAts: [],
    worldNeeds: []
}
const currentWorksheet = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_WORKSHEET":
            const worksheet = {
                loves: state.loves.concat(action.completedWorksheet[0]),
                goodAts: state.goodAts.concat(action.completedWorksheet[1]),
                worldNeeds: state.worldNeeds.concat(action.completedWorksheet[2])
            }
            return worksheet

        default:
            return state;
    }
}

export default currentWorksheet;