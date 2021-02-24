const signUpForm = (state = { name: "", username: "", password: "" }, action) => {
    switch (action.type) {
        case "UPDATE_SIGN_UP_FORM":
            // debugger
            return action.credentials
        default:
            return state;
    }
}

export default signUpForm;