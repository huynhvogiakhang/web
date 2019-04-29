import React from "react";
import axios from 'axios'

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";

class MyRegister extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        age: 1,
        type: 'guest'
    }
    postDataHandler = () => {
        const account = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            age: this.state.age,
            type: this.state.type
        }
        axios.post('http://localhost:3001/users', account).then(response => {
            console.log(this.state)
            console.log(response.data)
            if (response.data.token.length > 0) {
                //this.props.setUserAfterRegisterValue(response.data)
                this.props.history.push('/')
                console.log(response.data.token)
            }
            else {
                console.log('error')
            }
        })
    }
    render() {
        return (
            <>
                <Col lg="6" md="8">
                    <Card className="bg-secondary shadow border-0">
                        <CardHeader className="bg-transparent pb-5">
                            <div className="text-muted text-center mt-2 mb-4">
                                <small>Sign up with</small>
                            </div>
                            <div className="text-center">
                                <Button
                                    className="btn-neutral btn-icon mr-4"
                                    color="default"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    <span className="btn-inner--icon">
                                        <img
                                            alt="..."
                                            src={require("assets/img/icons/common/github.svg")}
                                        />
                                    </span>
                                    <span className="btn-inner--text">Github</span>
                                </Button>
                                <Button
                                    className="btn-neutral btn-icon"
                                    color="default"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    <span className="btn-inner--icon">
                                        <img
                                            alt="..."
                                            src={require("assets/img/icons/common/google.svg")}
                                        />
                                    </span>
                                    <span className="btn-inner--text">Google</span>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <Form role="form">
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-hat-3" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            value={this.state.name}
                                            onChange={(event) => this.setState({ name: event.target.value })}
                                            placeholder="Name" type="text" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            value={this.state.email}
                                            onChange={(event) => this.setState({ email: event.target.value })}
                                            placeholder="Email" type="email" />
                                    </InputGroup>
                                </FormGroup>

                                {/* age */}
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-check-bold" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            value={this.state.age}
                                            onChange={(event) => this.setState({ age: event.target.value })}
                                            placeholder="Age" type="number" />
                                    </InputGroup>
                                </FormGroup>
                                {/* age */}

                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            value={this.state.password}
                                            onChange={(event) => this.setState({ password: event.target.value })}
                                            placeholder="Password" type="password" />
                                    </InputGroup>
                                </FormGroup>

                                <div className="text-muted font-italic">
                                    <small>
                                        password strength:{" "}
                                        <span className="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <Row className="my-4">
                                    <Col xs="12">
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id="customCheckRegister"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="customCheckRegister"
                                            >
                                                <span className="text-muted">
                                                    I agree with the{" "}
                                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                                        Privacy Policy
                                                    </a>
                                                </span>
                                            </label>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <Button
                                        onClick={this.postDataHandler}
                                        className="mt-4" color="primary" type="button">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </>
        );
    }
}

export default MyRegister;
