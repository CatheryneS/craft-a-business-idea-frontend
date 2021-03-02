import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoveEntry, GoodAtEntry, WorldNeedEntry } from '../components/Entry';
import { fetchWorksheet } from '../actions/worksheet';

export class Generator extends Component {
    render() {
        const { worksheet } = this.props
        return (
            <div>
                <h1>ELEMENTS OF CHANCE</h1>
                <p>Here are your picks! Take a screenshoot to save them.</p>
                <p>Order for each group: Love, Good At, World Need</p>
                <p>Next step is to come up with a tangible, digital, and/or service by combinding the ideas together.</p>
                <p>Follow along with Chris Do on the futur for examples.</p>

                <h3>Group 1</h3>
                <LoveEntry content={worksheet.loves[Math.floor(Math.random() * worksheet.loves.length)]} />
                <GoodAtEntry content={worksheet.goodAts[Math.floor(Math.random() * worksheet.goodAts.length)]} />
                <WorldNeedEntry content={worksheet.worldNeeds[Math.floor(Math.random() * worksheet.worldNeeds.length)]} />

                <h3>Group 2</h3>
                <LoveEntry content={worksheet.loves[Math.floor(Math.random() * worksheet.loves.length)]} />
                <GoodAtEntry content={worksheet.goodAts[Math.floor(Math.random() * worksheet.goodAts.length)]} />
                <WorldNeedEntry content={worksheet.worldNeeds[Math.floor(Math.random() * worksheet.worldNeeds.length)]} />

                <h3>Group 3</h3>
                <LoveEntry content={worksheet.loves[Math.floor(Math.random() * worksheet.loves.length)]} />
                <GoodAtEntry content={worksheet.goodAts[Math.floor(Math.random() * worksheet.goodAts.length)]} />
                <WorldNeedEntry content={worksheet.worldNeeds[Math.floor(Math.random() * worksheet.worldNeeds.length)]} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    worksheet: state.currentWorksheet
})

export default connect(mapStateToProps, { fetchWorksheet })(Generator)
