const initialState = {
    loveContent: {
        firstLove: "",
        secondLove: "",
        thirdLove: "",
        fourthLove:"",
        fifthLove: "",
        sixthLove: "",
        seventhLove: "",
        eightLove: "",
        ninethLove:"",
        tenthLove: ""
    }
}
const worksheet = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOVE_FORM":
            return action.loveContent

        case "RESET_LOVE_FORM":
            return initialState

        default:
            return state;
    }
}

export default worksheet;