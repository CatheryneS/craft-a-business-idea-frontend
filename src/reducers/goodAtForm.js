const initialState = {
    goodAtContent: {
        firstGoodAt: "",
        secondGoodAt: "",
        thirdGoodAt: "",
        fourthGoodAt: "",
        fifthGoodAt: "",
        sixthGoodAt: "",
        seventhGoodAt: "",
        eightGoodAt: "",
        ninethGoodAt: "",
        tenthGoodAt: ""
    }
}
const goodAtForm = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_GOODAT_FORM":
            return action.goodAtContent

        case "RESET_GOODAT_FORM":
            return initialState

        default:
            return state;
    }
}

export default goodAtForm;