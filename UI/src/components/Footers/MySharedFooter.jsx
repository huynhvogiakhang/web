/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class MySharedFooter extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Row className="align-items-center justify-content-xl-between">
                    <Col xl="6">
                        <div className="copyright text-center text-xl-left text-muted">
                            © 2019{" "}
                            <a
                                className="font-weight-bold ml-1"
                                href="https://www.creative-tim.com?ref=adr-admin-footer"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                TCS2001 Group 6
              </a>
                        </div>
                    </Col>

                    <Col xl="6">
                        <Nav className="nav-footer justify-content-center justify-content-xl-end">
                            <NavItem>
                                <NavLink
                                    href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    About Us
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    href="http://blog.creative-tim.com?ref=adr-admin-footer"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Blog
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    MIT License
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default MySharedFooter;