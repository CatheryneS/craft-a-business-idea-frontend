import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

const MyWorksheets = ({ myWorksheets }) => {
    const worksheetList = myWorksheets.length > 0 ?
        myWorksheets.map((w, i) =>
            (<ListGroup.Item key={w.id} ><Link style={{ fontSize: '40px' }} to={`/worksheets/${w.id}`}>Worksheet {i + 1}</Link></ListGroup.Item>)
        ) : "You have no worksheets"

    return worksheetList
}

const mapStateToProps = (state) => {
    const myWorksheets = state.currentUser ? state.currentUser.data.relationships.worksheets.data : ""
    return {
        myWorksheets
    }
}

export default connect(mapStateToProps)(MyWorksheets)
