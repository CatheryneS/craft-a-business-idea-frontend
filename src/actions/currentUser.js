import { resetLoginForm } from "./loginForm";

// sync action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
};

export const clearUserSession = () => {
    return {
        type: "LOGOUT_USER"
    }
};

// async action creators
export const login = ({ username, password }, history) => {
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
                    dispatch(resetLoginForm())
                    history.push("/")
                }
            })
    }
};

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
};

export const logout = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}