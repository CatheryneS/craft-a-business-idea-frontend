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
        return worksheet.loves.map((love, i) => < LoveEntry key={i} content={love} />)
    }

    loadGoodAt = () => {
        const { worksheet } = this.props;
        return worksheet.goodAts.map((g, i) => < GoodAtEntry key={i} content={g} />)
    }

    loadWorldNeed = () => {
        const { worksheet } = this.props;
        return worksheet.worldNeeds.map((wn, i) => < WorldNeedEntry key={i} content={wn} />)
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
                <Link to={{
                    pathname: "/generator",
                    state: {
                        currentWorksheet: this.props.worksheet
                    }
                }}>Generate Ideas</Link>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    worksheet: state.currentWorksheet
})

export default connect(mapStateToProps, { fetchWorksheet })(CurrentWorksheet)
