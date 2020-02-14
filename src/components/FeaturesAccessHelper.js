import React, { PureComponent } from 'react'

import {ProfileContext} from '../ProfilesContext'

import {Link} from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel'
import { Jumbotron, Button, Col, Card, Progress, Container, Row } from 'reactstrap';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

import {
    Alert
        } from "reactstrap"

export class FeaturesAccessHelper extends PureComponent {

    static contextType = ProfileContext;

    constructor(props) {
        super(props);
        this.state = {
            showError:false,
            showStudentNotExistWarnning:false,
            nomEtudiant:"",
            searchedProfiles:[]
        }
        this.showStudentNotExistAlert = this.showStudentNotExistAlert.bind(this)
        this.HandleSearchStudentButton = this.HandleSearchStudentButton.bind(this)
        this.HandleChangeSearchStudentButton = this.HandleChangeSearchStudentButton.bind(this)
    }

    showStudentNotExistAlert = ()=>{
        this.setState({showStudentNotExistWarnning:true},()=>{
          window.setTimeout(()=>{
            this.setState({showStudentNotExistWarnning:false})
          },2000)
        });
    }

    HandleSearchStudentButton = (event)=>{
        //       this.props.history.push('/');
        // to={`/profiles/${nom}-${prenom}`}
        event.preventDefault();
        console.log("here : "+ this.state.nomEtudiant)
        if(this.state.nomEtudiant === undefined || this.state.nomEtudiant === "")
            return this.showStudentNotExistAlert()
        const {getProfileByFilter} = this.context;
        const searchedProfiles = getProfileByFilter(this.state.nomEtudiant)
        this.setState({searchedProfiles})
        console.log("here are profiles : "+ searchedProfiles)
        if(searchedProfiles == "No profile found")
            return this.showStudentNotExistAlert()
    }

    HandleChangeSearchStudentButton = (event) =>{
        this.setState({nomEtudiant:event.target.value})
    }
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
                                <input onChange={(e) =>this.HandleChangeSearchStudentButton(e)}
                                 className="form-control mr-sm-2" type="text" placeholder="Student Name here" aria-label="Search" />
                                <MDBBtn color="primary"
                                 onClick={(e) =>this.HandleSearchStudentButton(e)} 
                                 rounded size="sm" type="submit" className="mr-auto">
                                Search
                                </MDBBtn>
                        </MDBFormInline>
                        <ul className="extras">
                            {this.state.searchedProfiles?this.state.searchedProfiles.map((item,index) => {
                            return  <Link to={`/profiles/${item.nom}-${item.prenom}`}>
                                        <MDBBtn outline color="info"  rounded size="sm" type="submit"  key={index} renderAs="button">
                                                {item.nom}
                                        </MDBBtn>
                                    </Link>
                                    
                            }):<></>}
                        </ul>
                        <Alert color="danger" isOpen={this.state.showStudentNotExistWarnning}>No student found!</Alert>
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
