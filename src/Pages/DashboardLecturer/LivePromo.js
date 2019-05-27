import React, { Component } from 'react'

export class LivePromo extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel panel-default post-editor">
                        <div className="panel-body">
                            <textarea className="form-control post-editor-input" />
                            <button className="btn btn-success post-editor-button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LivePromo
