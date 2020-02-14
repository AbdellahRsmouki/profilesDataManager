import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  FormText,
  Label,
  Alert
} from "reactstrap";
// core components
// import UserHeader from "components/Headers/UserHeader.js";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    const picture = 'https://www.jumpstarttech.com/files/2018/08/Network-Profile.png'
    this.state = {
    showError:false,
    showDeleteWarnning:false,
    showSuccessMsg:false,
    preview: null,
    imagePreviewUrl:"",
    file: "",
    picture,
    nom: "azaroual",
    prenom: "anas",
    promo: "2020",
    ville: "casablanca",
    pays: "Maroc",
    entreprise_universite: "Nimble Ways",
    poste: "Full Stack Developer",
    filiere: "GL",
    email: "azaroual.anas@gmail.com",
    website: "",
    linkedIn: "https://www.linkedin.com/in/anas-azaroual-8556a4132/",
    image: "https://media.licdn.com/dms/image/C5603AQEhudZ_5m6nUw/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=UEzHSX0oeeiONvWfwXfqBSj_4NYZOO_jIlGRDJ3mzm4",
    featured : false,
    laureat: false,
    student: true,
    details: " Java/Java EE Consultant on PLM Windchill chez Gfi Informatique ",
    keywords: "Git, Data Analysis, Python"
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onShowDelelteAlert = this.onShowDelelteAlert.bind(this)
        this.showSuccessMessageAlert = this.showSuccessMessageAlert.bind(this)
    }

    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
    
    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }   
        reader.readAsDataURL(file)
    }

    onClose() {
        this.setState({preview: null})
      }
      
    onCrop(preview) {
    this.setState({preview})
    }

    onShowDelelteAlert = ()=>{
      this.setState({showDeleteWarnning:true},()=>{
        window.setTimeout(()=>{
          this.setState({showDeleteWarnning:false})
        },2000)
      });
    }
    showSuccessMessageAlert = ()=>{
      this.setState({showSuccessMsg:true},()=>{
        window.setTimeout(()=>{
          this.setState({showSuccessMsg:false})
        },2000)
      });
    }

  render() {
    return (
      <div className="update-profile-bloc">        
       {/* <UserHeader /> */}
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Button
                color="danger"
                href="./"
                size="lg"
                className="button-center-horizental"
              >
                Back To Home
              </Button>
              <Card className="big-card-margin-top card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={this.state.picture} 
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardBody className="pt-0 pt-md-4">
                  <div className="text-center">
                    <h3>
                      {`${this.state.nom} ${this.state.prenom}`}
                      <span className="font-weight-light">{`,promo ${this.state.promo}`}</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {`${this.state.ville}, ${this.state.pays}`}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {`${this.state.poste} - ${this.state.filiere}`}
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      {`${this.state.entreprise_universite}`}
                    </div>
                    <hr className="my-4" />
                    <p>
                    {`${this.state.details}`}
                    </p>
                  </div>
                  <div class="text-center">
                  <Button
                      className="float"
                      color="danger"
                      onClick={e =>  this.onShowDelelteAlert()}
                      size="sm"
                    >
                      Delete Profile
                    </Button>
                    </div>
                    <Alert color="danger" isOpen={this.state.showDeleteWarnning}>
                    Do you want to <a href="#" className="alert-link">Delete</a> the account?
                    </Alert>
                </CardBody>
              </Card>
                   
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => (event) => this.setState({prenom: event.target.value})}
                        size="sm"
                      >
                        discard changes
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                      <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Abdelkarim"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                              value={this.state.prenom} 
                              onChange={ (event) => this.setState({prenom: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="abdelkarim.saidi@example.com"
                              type="email"
                              value={this.state.email} 
                              onChange={ (event) => this.setState({email: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="SAIDI"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                              value={this.state.nom}
                              onChange={ (event) => this.setState({nom: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-company_university"
                            >
                              company or university
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="ENSIAS"
                              id="input-company_university"
                              placeholder="company or university"
                              type="text"
                              value={this.state.entreprise_universite} 
                              onChange={ (event) => this.setState({entreprise_universite: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="pl-lg-4">
                      <h6 className="heading-small text-muted mb-4">
                        Image
                      </h6>
                      <Label for="exampleFile">Image</Label>
                      <Input type="file" name="file" id="exampleFile" />
                      <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                      </FormText>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              city
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Rabat"
                              id="input-city"
                              placeholder="City"
                              type="text"
                              value={this.state.ville} 
                              onChange={ (event) => this.setState({ville: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-country"
                              placeholder="Morocco"
                              type="text"
                              value={this.state.pays} 
                              onChange={ (event) => this.setState({pays: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-website"
                            >
                              WebSite
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="www.ibm.com"
                              id="input-website"
                              placeholder="WebSite"
                              type="text"
                              value={this.state.website} 
                              onChange={ (event) => this.setState({website: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-linkedin"
                            >
                              LinkedIn
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="www.linkedIn.com"
                              id="input-linkedin"
                              placeholder="linkedin"
                              type="text"
                              value={this.state.linkedIn} 
                              onChange={ (event) => this.setState({linkedIn: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-promo"
                            >
                              promo
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="2020"
                              id="input-peomo"
                              placeholder="Promo"
                              type="number"
                              value = {this.state.promo}
                              onChange={ (event) => this.setState({promo: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-branch"
                            >
                              Branch
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="GL"
                              id="input-branch"
                              placeholder="Branch"
                              type="text"
                              value={this.state.option}
                              onChange={ (event) => this.setState({option: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-poste"
                            >
                              Poste
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Software Engineer"
                              id="input-poste"
                              placeholder="Poste"
                              type="text"
                              value = {this.state.poste}
                              onChange={ (event) => this.setState({poste: event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue=" bonnes compétences en ce qui concerne les langages de programmation du Web : PHP, Symfony 3, JavaScript, SQL, Angularjs, HTML 5, CSS 3, jQuery, Ajax,
                          - Maitrisant l'outil de version Git (connaissance indispensable pour identifier la meilleure solution technique pour chaque projet et pour développer le site Internet"
                          type="textarea"
                          value = {this.state.details}
                          onChange={ (event) => this.setState({details: event.target.value})}
                        />
                      </FormGroup>
                    </div>
                    <h6 className="heading-small text-muted mb-4">Keywords</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Keywords</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Exemple: Oracle Database, MySQL, ML, IA .."
                          rows="2"
                          defaultValue="MySQL, ML, IA .."
                          type="textarea"
                          value = {this.state.keywords}
                          onChange={ (event) => this.setState({keywords: event.target.value})}
                        />
                      </FormGroup>
                    </div>
                    <div class="text-center">
                    <Button
                      color="default"
                      href="#pablo"
                      onClick={e =>  this.showSuccessMessageAlert()}
                      size="sm"
                    >
                      Update profile
                    </Button>
                    </div>
                      <Alert color="success" isOpen={this.state.showSuccessMsg}>
                      Account updated succefully!
                      </Alert>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;