// sync action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// async action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: "cat",
                password: "password"
            })
        })
    }
}