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
        score: 1000,
        val1: '',
        val2: '',
        val3: '',
        currentMood: false, // false is unhappy
        showAnswer: false,
        answer: null,
        submissionInvalid: false,
        showUnhappyWarning: false,
    }

    submit = () => {
        const A = this.state.val1
        const B = this.state.val2
        const C = this.state.val3
        if (A <= 0 || B < 0 || C < 0) {
            console.log('submission not valid')
            this.setState({
                submissionInvalid: true
            })
        } else {
            // first reset submission invalid b/c new submission is valid
            this.setState({
                submissionInvalid: false,
            })
            if ("" + A + B + C === "" + (computeFactorial(A) + computeFactorial(B) + computeFactorial(C))) {
                this.setState({ 
                    currentMood: true // set mood to happy, gave is over
                })
            } else {
                this.setState({ 
                    score: this.state.score - 10,
                    showUnhappyWarning: true,
                })
            }
        }
    }

    giveUp = () => {
        // find what value satisfies ABC = A! + B! + C! where A > 0, B >= 0, C >= 0
        const aArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const bArr = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9]
        const cArr = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9]

        for (let a in aArr) {
            for (let b in bArr) {
                for (let c in cArr) {
                    if ("" + a + b + c === "" + (computeFactorial(a) + computeFactorial(b) + computeFactorial(c))) {
                        this.setState({ 
                            showAnswer: true,
                            answer: "" + a + b + c 
                        }) 
                        break
                    }
                }
            }
        }
    }

    playAgain = () => {
        window.location.reload(true)
    }

    handleChange(event) {
        const valName = 'val' + event.target.id
        this.setState({
            [valName]: event.target.value
        })
    }

    handleNumberUnhappyWarningClose = () => {
        this.setState({
            showUnhappyWarning: false
        })
    }

    handleSubmissionInvalidWarningClose = () => {
        this.setState({
            submissionInvalid: false
        })
    }

    render() {
        return (
            <div>
                <Alert variant="success">
                    <Alert.Heading>Welcome to the Happy Number Game!</Alert.Heading>
                    <p>
                        Enter three numbers, then press "Submit" to play.
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
                {!this.state.showAnswer && !this.state.currentMood && <div>
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
                </div>
            }
                {this.state.showUnhappyWarning && 
                    <Alert 
                        dismissible
                        variant="danger"
                        onClose={this.handleNumberUnhappyWarningClose}
                    >
                        <p>
                            Those numbers are unhappy. Try again!
                        </p>
                    </Alert>
                }
                {this.state.submissionInvalid && 
                    <Alert 
                        dismissible
                        variant="danger"
                        onClose={this.handleSubmissionInvalidWarningClose}
                    >
                        <p>
                            Your number is invalid. Try again!
                        </p>
                    </Alert>
                }
                {this.state.currentMood && 
                    <div>
                        <br />
                        <Alert variant="success">
                            <p>
                                Those numbers are happy! Game is over.
                            </p>
                        </Alert>
                    </div>
                }
                {(!this.state.showAnswer && !this.state.currentMood) && 
                    <div>
                        <Button 
                            variant="primary"
                            onClick={this.giveUp}
                        >
                            I give up...
                        </Button>
                        <br />
                        <br />
                    </div>
                }
                {!this.state.showAnswer && !this.state.currentMood &&
                    <div>
                        <h5>Your Score: {this.state.score}</h5>
                    </div>
                }
                {(this.state.showAnswer || this.state.currentMood) && 
                    <div>
                        {this.state.showAnswer &&
                            <div>
                                <br />
                                <h5>The Happy Answer is {this.state.answer}.</h5>
                            </div>
                        }
                        <h5>Your Final Score: {this.state.score}</h5>
                        <p>
                        <Button 
                            variant="primary"
                            onClick={this.playAgain}
                        >
                            Play Again!
                        </Button>
                     </p> 
                    </div>
                }
            </div>
        )
    }
}