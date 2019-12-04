import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import Avatar from 'react-avatar-edit';

export default class UpdateProfile extends Component {

    constructor(props) {
        super(props);
        const picture = '../images/company.jpg'
        this.state = {
        preview: null,
        picture
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
    }
    onClose() {
        this.setState({preview: null})
      }
      
    onCrop(preview) {
    this.setState({preview})
    }
    
    render() {
        return (           
        <div className="update-profile-row">
            <h1 className="update-profile-title">Edit Profile Form</h1>
            <div className="update-profile-column">
                <div id="sc-edprofile">
                    <div class="sc-container">
                    <h1 className="update-profile-image-title">Modifier les informations personnelles</h1>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Website" />
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <select>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        </select>
                        <input type="text" placeholder="Facebook Profile URL" />
                        <input type="text" placeholder="Twitter Profile URL" />
                        <input type="text" placeholder="Google+ Profile URL" />
                        <input type="text" placeholder="LinkedIn Profile URL" />
                        <h1 className="update-profile-image-title">Ajouter un description du profile</h1>
                        <textarea placeholder="Etudiant à l'Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes filière BI, à la recherche d'un stage de fin de deuxième année en développment mobile.." ></textarea>

                    </div>
                </div>
            </div>
            <div className="update-profile-column">
            <div id="sc-edprofile">
                <div class="sc-container">
                <h1 className="update-profile-image-title">Modifier l'image</h1>
                        <Avatar
                        width={360}
                        height={295}
                        onCrop={this.onCrop}
                        onClose={this.onClose}
                        src={this.state.src}
                        />
                        <img src={this.state.preview} className="edit-profile-image" />
                        <br />
                        <h1 className="update-profile-image-title">Modifier les informations de la formation à l'ENSIAS</h1>
                        <select>
                            <option value="">GL</option>
                            <option value="">IWIM</option>
                            <option value="">emBI</option>
                            <option value="">ISEM</option>
                            <option value="">IeL</option>
                            <option value="">SSI</option>
                            <option value="">2IA</option>
                            <option value="">IF</option>
                        </select>
                        <input type="text" placeholder="Exemple: Oracle Database, MySQL, ML, IA .." />
                        <input type="submit" value="Valider les données" />
                    </div>
                </div>
            </div>
            <h1 className="update-profile-footer"></h1>
        </div>
      );
    }
}
