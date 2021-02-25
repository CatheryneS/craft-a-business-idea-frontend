const initialState = {
    name: "",
    username: "",
    password: ""
}

const signUpForm = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGN_UP_FORM":
            return action.credentials

        case "REST_SIGN_UP_FORM":
            return initialState

        default:
            return state;
    }
}

export default signUpForm;