import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

// helper function to compute factorial
const computeFactorial = (x) => {
    let num = 1
    while (x > 0) {
        num *= (x--)
    }
    return num
}

export class Play extends Component {
    state = {
        numCorrect: 0,
        numIncorrect: 0,
        val1: '',
        val2: '',
        val3: '',
        currentMood: false, // false is unhappy
    }

    submit = () => {
        console.log('submitted')
        const A = this.state.val1
        const B = this.state.val2
        const C = this.state.val3
        if (A <= 0 || B < 0 || C < 0) {
            console.log('submission not valid')
        }

        console.log('here is number', "" + (computeFactorial(A) + computeFactorial(B) + computeFactorial(C)))

        if ("" + A + B + C === "" + (computeFactorial(A) + computeFactorial(B) + computeFactorial(C))) {
            this.setState({ numCorrect: this.state.numCorrect + 1 })
        } else {
            this.setState({ numIncorrect: this.state.numIncorrect + 1})
        }
        
    }

    giveUp = () => {
        // ABC = A! + B! + C! where A > 0, B >= 0, C >= 0
        const answer = null
        // while ("" + A + B + C !== "" + (computeFactorial(A) + computeFactorial(B) + computeFactorial(C))) {
        // iterate through all combos
        // }

        console.log('correct answer is 145')
        return answer
    }

    handleChange(event) {
        const valName = 'val' + event.target.id
        this.setState({
            [valName]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Alert variant="success">
                    <Alert.Heading>Welcome to the Happy Number Game!</Alert.Heading>
                </Alert>
                <Alert dismissible variant="info">
                    <p>
                        Enter three numbers to get started.
                    </p>
                </Alert>
                <input 
                    type="text" 
                    id={1}
                    maxLength={1} 
                    onChange={this.handleChange.bind(this)}
                    value={this.state.val1}
                />
                <input 
                    type="text" 
                    id={2}
                    maxLength={1} 
                    onChange={this.handleChange.bind(this)}
                    value={this.state.val2}
                />
                <input
                    type="text"
                    id={3}
                    maxLength={1}
                    onChange={this.handleChange.bind(this)}
                    value={this.state.val3}
                />
                <br />
                <br />
                <Button 
                    variant="primary"
                    onClick={this.submit}
                    id="submit-button"
                >
                    Submit
                </Button>
                <br />
                <br />
                {!this.currentMood && <Alert dismissible variant="danger">
                    <p>
                        Those numbers are unhappy!
                    </p>
                </Alert>}
                {this.currentMood && <Alert dismissible variant="success">
                    <p>
                        Those numbers are happy!
                    </p>
                </Alert>}
                <div>
                    <h5>Number Correct: {this.state.numCorrect}</h5>
                    <h5>Number Incorrect: {this.state.numIncorrect}</h5>
                </div>
                {/* <Button 
                    variant="primary"
                    onClick={this.giveUp}
                >
                    I give up...
                </Button> */}
            </div>
        )
    }
}