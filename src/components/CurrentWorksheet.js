import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWorksheet } from '../actions/worksheet';
import { LoveEntry, GoodAtEntry, WorldNeedEntry } from './Entry';
import { Link } from 'react-router-dom';

export class CurrentWorksheet extends Component {
    componentDidMount() {
        this.props.fetchWorksheet(this.props.id);
    }

    loadLoves = () => {
        const { worksheet } = this.props;
        return worksheet.loves.map(love => < LoveEntry content={love} />)
    }

    loadGoodAt = () => {
        const { worksheet } = this.props;
        return worksheet.goodAts.map(g => < GoodAtEntry content={g} />)
    }

    loadWorldNeed = () => {
        const { worksheet } = this.props;
        return worksheet.worldNeeds.map(wn => < WorldNeedEntry content={wn} />)
    }

    render() {
        return (
            <div>
                <h1>Completed Worksheet</h1>
                <h3>Love</h3>
                <ul>
                    {this.loadLoves()}
                </ul>
                <h3>Good At</h3>
                <ul>
                    {this.loadGoodAt()}
                </ul>
                <h3>World Need</h3>
                <ul>
                    {this.loadWorldNeed()}
                </ul>
                <button type="click"><Link to="/generator">Generate Ideas</Link></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    worksheet: state.currentWorksheet
})

export default connect(mapStateToProps, { fetchWorksheet })(CurrentWorksheet)
