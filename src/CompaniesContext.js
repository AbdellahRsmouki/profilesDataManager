import React, { Component } from 'react'

import items from './CompaniesData';

const CompaniesContext = React.createContext();

class CompaniesProvider extends Component {
    state = {
        companies:[],
        sortedCompanies:[],
        featuredCompanies:[],
        loading:true,
        ville:'all',
        specialite:'all'
    }

    // GETDATA

    componentDidMount(){
        // this.getDATA
        let companies = this.formatData(items);
        console.log(companies);
        let featuredCompanies = companies.filter(company => company.featured === true).slice(0, 3);
        // let maxPrice = Math.max(...profiles.map(item=>item.price));
        // let maxSize = Math.max(...profiles.map(item=>item.size));
        this.setState({
            companies, featuredCompanies, sortedCompanies:companies, loading:false,
        })
        // console.log(profiles);
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = parseInt(item.id);
            let image = item.image;
            let company = {...item,id,image}
            return company;
        });
        return tempItems;
    }

    getCompany = (slug) =>{
        let tempCompanies = [...this.state.companies];
        console.log("selected profile "+"for "+slug+": ");
        const company = tempCompanies.find(company =>  company.nom === slug);
        console.log(+company);
        return company;
    }

    handleChange = event =>{
        const target = event.target;
        const value = target.type === 'checkbox' ?
        target.checked:target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        },this.filterCompanies);
    }

    filterCompanies = () => {
        let {companies,taille,ville} = this.state;
        // all the profiles
        let tempProfiles = [...companies];
        // transform values
        // capacity = parseInt(capacity);
        // filter by type
        if(taille!=='all'){
            tempProfiles = tempProfiles.filter(profile=>profile.taille===taille)
        }
        if(ville!=='all'){
            tempProfiles = tempProfiles.filter(profile=>profile.ville===ville)
        }
        //change state
        this.setState({
            sortedCompanies:tempProfiles
        });
    }

    render() {
        return (
            <CompaniesContext.Provider 
                value={{
                    ...this.state,
                    getCompany: this.getCompany,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </CompaniesContext.Provider>
        ) 
    }
}



const CompaniesConsumer = CompaniesContext.Consumer;

export function WithCompanyConsumer(Component){
    return function ConsumerWrapper(props){
        return <CompaniesConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </CompaniesConsumer>
    }
}

export{CompaniesConsumer, CompaniesProvider, CompaniesContext};