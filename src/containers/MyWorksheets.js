import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyWorksheets = ({ myWorksheets }) => {
    const worksheetList = myWorksheets.length > 0 ? myWorksheets.map((w, i) => (<p key={w.id}><Link to={`/worksheets/${w.id}`}>Worksheet {i + 1}</Link></p>)) : "You have no worksheets"

    return worksheetList
}

const mapStateToProps = (state) => {
    const myWorksheets = state.currentUser ? state.currentUser.data.relationships.worksheets.data : ""
    return {
        myWorksheets
    }
}

export default connect(mapStateToProps)(MyWorksheets)
