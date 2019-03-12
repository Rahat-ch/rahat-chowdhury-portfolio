import React from 'react'
import PDFResume from '../assets/resume.pdf'

class Resume extends React.Component {
    constructor() {
        super()
        this.state = {
            height: null,
            width: null,
        }
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.setState((state, props) => ({
                height: window.innerHeight,
                width: window.innerWidth,
            }))
        }
    }
    render() {
        const { height, width } = this.state
        const dimensions = height && width
        return (
            dimensions && (
                <embed
                    src={PDFResume}
                    height={height}
                    width={width}
                    type="application/pdf"
                />
            )
        )
    }
}

export default Resume