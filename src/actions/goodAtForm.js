export const updateGoodAtForm = (goodAtContent) => {
    return ({
        type: "UPDATE_GOODAT_FORM",
        goodAtContent
    })
}

export const resetGoodAtForm = () => {
    return ({ type: "UPDATE_GOODAT_FORM" })
}

export const submitGoodAtForm = (worksheet, userId) => {
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