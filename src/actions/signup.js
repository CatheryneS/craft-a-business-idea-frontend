import { setCurrentUser } from "./currentUser"

export const updateSignUpForm = (credentials) => {
    return ({ type: "UPDATE_SIGN_UP_FORM", credentials })
}

export const signUpUser = (credentials) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/users", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                credentials
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.notice) {
                    alert(resp.notice)
                } else {
                    dispatch(setCurrentUser(resp))
                }
            })
    }
}