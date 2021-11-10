import React, {Component} from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends Component {
    renderList() {
        return (
            this.props.songs.map(song => {
                return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <div
                                className="ui button primary"
                                onClick={() => this.props.selectSong(song)}
                            >
                                Select
                            </div>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        songs: state.songs,
        policies: state.policies,
        accounting: state.accounting,
        claims: state.claims
    }
}

export default connect(mapStateToProps, {
    selectSong
})(SongList)
