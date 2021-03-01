export const addLovesToWorksheet = (loveContent) => {
    console.log("you hit the action", loveContent)
    return ({
        type: "ADD_LOVES_TO_WORKSHEET",
        loveContent
    })
}

export const addGoodAtsToWorksheet = (goodAtContent) => {
    console.log("you hit the action", goodAtContent)
    return ({
        type: "ADD_GOODATS_TO_WORKSHEET",
        goodAtContent
    })
}

export const addWorldNeedsToWorksheet = (worldNeedContent) => {
    console.log("you hit the action", worldNeedContent)
    return ({
        type: "ADD_WORLD_NEEDS_TO_WORKSHEET",
        worldNeedContent
    })
}
export const submitWorksheet = (worksheet, userId) => {
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