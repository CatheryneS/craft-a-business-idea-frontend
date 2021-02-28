export const updateLoginForm = (credentials) => {
    return ({
        type: "UPDATE_LOGIN_FORM",
        credentials
    })
}

export const resetLoginForm = () => {
    return ({ type: "REST_LOGIN_FORM" })
}