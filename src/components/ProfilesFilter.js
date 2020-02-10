import React from 'react'
import {useContext} from 'react'
import {ProfileContext} from '../ProfilesContext';
import Title from './Title';


// get all unique values

const getUnique = (items,value) =>{
    return [...new Set(items.map(item=> item[value]))];
}

export default function ProfilesFilter({profiles}) {

    const context = useContext(ProfileContext);
    const {handleChange, laureat, student, poste, filiere, promo} =context;
    // get unique types
    let postes = getUnique(profiles,'poste');
    // add all
    postes= ['all',...postes];
    // map to jsx
    postes = postes.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    let filieres = getUnique(profiles,'filiere');
    filieres = ['all',...filieres];
    filieres = filieres.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    let promos = getUnique(profiles,'promo');
    promos = ['all',...promos];
    promos = promos.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    return (
        <section className="filter-container">
            <Title title="Search Profiles" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="promo">Promo</label>
                    <select name="promo" id="promo" value={promo}
                    className="form-control" onChange={handleChange}>
                        {promos}
                    </select>
                </div>
                {/*end of select type*/}
                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="poste">Job</label>
                    <select name="poste" id="poste" value={poste}
                    className="form-control" onChange={handleChange}>
                        {postes}
                    </select>
                </div>
                {/*end of guests*/}
                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="filiere">Branch</label>
                    <select name="filiere" id="filiere" value={filiere}
                    className="form-control" onChange={handleChange}>
                        {filieres}
                    </select>
                </div>
                {/*end of guests*/}
                {/*room price}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input name="price" value={price} id="price" type="range" min={minPrice} max={maxPrice}
                    className="form-control" onChange={handleChange} />
                </div>
                {end of room price*/}
                {/*room size}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                    <input name="minSize" value={minSize} id="size" type="number" 
                    className="size-input" onChange={handleChange} />
                    <input name="maxSize" value={maxSize} id="size" type="number" 
                    className="size-input" onChange={handleChange} />
                    </div>
                </div>
                {end of room size*/}
                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input name="student" id="student" type="checkbox" checked={student} onChange={handleChange}/>
                        <label htmlFor="student">Students</label>
                    </div>
                    <div className="single-extra">
                    <input name="laureat" id="laureat" type="checkbox" checked={laureat} onChange={handleChange}/>
                    <label htmlFor="laureat">Laureats</label>
                    </div>
                </div>
                {/*end of extras*/}
            </form>
        </section>
    )
}
