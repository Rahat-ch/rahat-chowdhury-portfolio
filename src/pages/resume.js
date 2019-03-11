import React, { Component } from "react";
import { Document, Page } from "react-pdf";

export default class App extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>

                <div style={{ width: 600, marginLeft: 500 }}>
                    <Document
                        file="/resume.pdf"
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>

                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        );
    }
}