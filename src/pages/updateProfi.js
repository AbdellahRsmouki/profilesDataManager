import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import Avatar from 'react-avatar-edit';

export default class UpdateProfile extends Component {

    constructor(props) {
        super(props);
        const picture = '../images/company.jpg'
        this.state = {
        showError:false,
        preview: null,
        imagePreviewUrl:"",
        file: "",
        picture,
        nom: "azaroual",
		prenom: "anas",
		promo: "2017",
		ville: "casablanca",
		pays: "Maroc",
		entreprise_universite: "Nimble Ways",
		poste: "Full Stack Developer",
        filiere: "GL",
        email: "",
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
    
    render() {
        
    const imagePreviewUrl = this.state.imagePreviewUrl;
    var imagePreview = null;
    console.log("uploaded image: "+imagePreviewUrl);
    if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
    } else {
        imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
        <div className="update-profile-row">
            <h1 className="update-profile-title">Edit Profile Form</h1>
            <div className="update-profile-column">
                <div id="sc-edprofile">
                    <div class="sc-container">
                    {/*<h1 className="update-profile-image-title">Modifier les informations personnelles</h1>*/}
    <input type="text" placeholder="Username" value={this.state.nom +"." +this.state.prenom} />{/*onChange={ (event) => this.setState({email: event.target.value})}*/}
                        <input type="text" placeholder="Email Address" value={this.state.email} onChange={ (event) => this.setState({email: event.target.value})}/>
                        <input type="password" placeholder="Password" value={this.state.password} onChange={ (event) => this.setState({password: event.target.value})}/>
                        <input type="text" placeholder="Website" value={this.state.website} onChange={ (event) => this.setState({website: event.target.value})}/>
                        <input type="text" placeholder="First Name" value={this.state.prenom} onChange={ (event) => this.setState({prenom: event.target.value})}/>
                        <input type="text" placeholder="Last Name" value={this.state.nom} onChange={ (event) => this.setState({nom: event.target.value})}/>
                        {/*<select>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        </select>*/}
                        {/*<input type="text" placeholder="Facebook Profile URL" />
                        <input type="text" placeholder="Twitter Profile URL" />*/}
                        {/*<input type="text" placeholder="Google+ Profile URL" />*/}
                        <input type="text" placeholder="LinkedIn Profile URL" value={this.state.linkedIn} onChange={ (event) => this.setState({linkedIn: event.target.value})}/>
                        
                    </div>
                </div>
            </div>
            <div className="update-profile-column">
            <div id="sc-edprofile">
                <div class="sc-container">
                {/*<h1 className="update-profile-image-title">Modifier l'image</h1>
                <div className="previewComponent">*/}
                    <form >
                        <input className="fileInput" 
                            type="file" 
                            onChange={(e)=>this._handleImageChange(e)} />
                    </form>
                    <div className="imgPreview">
                        {imagePreview}
                    </div>
                {/*</div>*/}
                        <br />
                        <h1 className="update-profile-image-title">Modifier les informations de la formation à l'ENSIAS</h1>
                        <select>
                            <option value="" selected disabled hidden onChange={ (event) => this.setState({option: event.target.value})}>{this.state.option}</option>
                            <option value="">GL</option>
                            <option value="">IWIM</option>
                            <option value="">emBI</option>
                            <option value="">ISEM</option>
                            <option value="">IeL</option>
                            <option value="">SSI</option>
                            <option value="">2IA</option>
                            <option value="">IF</option>
                        </select>
                        <input type="text" placeholder="Exemple: Oracle Database, MySQL, ML, IA .." value = {this.state.option}/>
                        <h1 className="update-profile-image-title">Ajouter une description du profile</h1>
                        <textarea  placeholder="Etudiant à l'Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes filière BI, à la recherche d'un stage de fin de deuxième année en développment mobile.." ></textarea>

                        <input className="validateupdatingprofile" type="submit" value="Valider les données" onClick={(e)=>this._handleSubmit(e)}/>
                    </div>
                </div>
            </div>
            <h1 className="update-profile-footer"></h1>
        </div>
      );
    }
}
