const initialState = {
    username: "",
    password: ""
}
const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.credentials
        case "REST_LOGIN_FORM":
            return initialState
        default:
            return state;
    }
}

export default currentUser;