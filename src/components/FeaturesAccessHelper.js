import React, { PureComponent } from 'react'


import Carousel from 'react-bootstrap/Carousel'
import { Jumbotron, Button, Col, Card, Progress, Container, Row } from 'reactstrap';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

export class FeaturesAccessHelper extends PureComponent {
    render() {
        return (
            <Container className="mt--7" fluid>
            <Row>
                <Col className="order-xl-1 mb-5 mb-xl-0 card-small-margin-top" xl="4">
                    <Jumbotron>
                        <h1 className="display-3">Need a new adventure?</h1>
                        <p className="lead">don't wait for opportunity, create it here </p>
                        <hr className="my-2" />
                        <p> small things can make a big difference.</p>
                        <p className="lead ">
                            <Button color="primary">Find an internship</Button>
                        </p>
                    </Jumbotron>
                </Col>
                <Col className="order-xl-2 big-card-margin-top " xl="8">
                    <MDBCol md="12">
                        <p className="lead ">Search for ENSIAS Students ? </p>
                        <MDBFormInline className="md-form mr-auto mb-4">
                                <input className="form-control mr-sm-2" type="text" placeholder="Student Name here" aria-label="Search" />
                                <MDBBtn color="primary" rounded size="sm" type="submit" className="mr-auto">
                                Search
                                </MDBBtn>
                        </MDBFormInline>
                        <p className="lead card-margin-top"> Or, just choose from the suggestions above </p>
                        <MDBBtn outline color="default" rounded size="sm" type="submit" className="mr-auto">
                            Need students for internship
                        </MDBBtn>
                        <MDBBtn outline color="default" rounded size="sm" type="submit" className="mr-auto">
                            Need students for freelance job
                        </MDBBtn>
                        <MDBBtn outline color="default" rounded size="sm" type="submit" className="mr-auto">
                            Want to create an event
                        </MDBBtn>
                    </MDBCol>
                    <Card className="card-profile shadow big-card-margin-top">
                        <div className="text-center"><b>First year? </b>start Now</div>
                        <Progress value={30} />
                        <div className="text-center"> <b>search Internship ?</b> You found your way</div>
                        <Progress value={60} />
                        <div className="text-center"><b>Want to share knowledge? </b> Attend our Events</div>
                        <Progress value={90} />
                    </Card>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default FeaturesAccessHelper
