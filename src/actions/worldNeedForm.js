export const updateWorldNeedForm = (worldNeedContent) => {
    return ({
        type: "UPDATE_WORLD_NEED_FORM",
        worldNeedContent
    })
}

export const resetWorldNeedForm = () => {
    return ({ type: "UPDATE_WORLD_NEED_FORM" })
}

export const submitWorldNeedForm = (worksheet, userId) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/worksheets", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ worksheet, userId })
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
            })
    }
}