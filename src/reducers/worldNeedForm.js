const initialState = {
    worldNeedContent: {
        firstWorldNeed: "",
        secondWorldNeed: "",
        thirdWorldNeed: "",
        fourthWorldNeed: "",
        fifthWorldNeed: "",
        sixthWorldNeed: "",
        seventhWorldNeed: "",
        eightWorldNeed: "",
        ninethWorldNeed: "",
        tenthWorldNeed: ""
    }
}
const worldNeedForm = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_WORLD_NEED_FORM":
            return action.worldNeedContent

        case "RESET_WORLD_NEED_FORM":
            return initialState

        default:
            return state;
    }
}

export default worldNeedForm;