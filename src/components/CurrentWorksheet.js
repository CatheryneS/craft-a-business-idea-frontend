import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWorksheet } from '../actions/worksheet';

export class CurrentWorksheet extends Component {
    componentDidMount() {
        this.props.fetchWorksheet(this.props.id);
    }
    render() {
        const { worksheet } = this.props

        return (
            <div>
                <h1>WELCOME TO THE CURRENT WORKSHEET PAGE!</h1>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    worksheet: state.currentWorksheet
})

export default connect(mapStateToProps, { fetchWorksheet })(CurrentWorksheet)
