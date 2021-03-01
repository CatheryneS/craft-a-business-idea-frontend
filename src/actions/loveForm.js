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
    return ({ type: "UPDATE_LOVE_FORM" })
}