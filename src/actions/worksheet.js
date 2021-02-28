export const updateLoveForm = (loveContent) => {
    return ({
        type: "UPDATE_LOVE_FORM",
        loveContent
    })
}
export const addLove = (loveContent) => {
    return ({
        type: "ADD_LOVE",
        loveContent
    })
}
export const resetLoveForm = () => {
    return ({type: "UPDATE_LOVE_FORM"})
}

export const submitWorksheet = (worksheet, userId) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/worksheets", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({worksheet, userId})
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })
    }
}