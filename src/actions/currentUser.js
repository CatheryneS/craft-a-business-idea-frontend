// sync action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// async action creators
export const login = ({ username, password }) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    console.log(resp.error)
                } else {
                    dispatch(setCurrentUser(resp))
                }
            })
    }
}

export const fetchCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.notice) {
                    console.log(resp.notice)
                } else {
                    dispatch(setCurrentUser(resp))
                }
            })
            .catch(error => console.log(error))
    }
}