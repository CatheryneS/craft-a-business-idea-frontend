const currentUser = (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return action.user;
        case "LOGOUT_USER":
            return null
        default:
            return state;
    }
}

export default currentUser;