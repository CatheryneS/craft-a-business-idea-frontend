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

export const addCompletedWorksheet = (worksheet) => {
    const loves = worksheet.attributes.love.map(love => Object.values(love)[1])
    const goodAts = worksheet.attributes.good_ats.map(g => Object.values(g)[1])
    const worldNeeds = worksheet.attributes.world_needs.map(wn => Object.values(wn)[1])

    const completedWorksheet = []
    completedWorksheet.push(loves, goodAts, worldNeeds)

    return ({
        type: "ADD_WORKSHEET",
        completedWorksheet
    })
}

export const submitWorksheet = (worksheet, userId, history) => {
    const sections = {
        loves: Object.values(worksheet.loves[0]),
        goodAts: Object.values(worksheet.goodAts[0]),
        worldNeeds: Object.values(worksheet.worldNeeds[0])
    }
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/worksheets", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ sections, userId })
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(addCompletedWorksheet(resp.data))
                    history.push(`/worksheets/${resp.data.id}`)
                }
            })
    }
}

export const fetchWorksheet = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/worksheets/${id}`, {
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.notice) {
                    console.log(resp.notice)
                } else {
                    dispatch(addCompletedWorksheet(resp.data))
                }
            })
            .catch(error => console.log(error))
    }
};