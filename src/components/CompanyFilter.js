import React from 'react'
import {useContext} from 'react'
import {CompaniesContext} from '../CompaniesContext';
import Title from './Title';


// get all unique values

const getUnique = (items,value) =>{
    return [...new Set(items.map(item=> item[value]))];
}

export default function CompaniesFilter({profiles}) {

    const context = useContext(CompaniesContext);
    const {handleChange, taille,ville} =context;
    // get unique tailles
    let tailles = getUnique(profiles,'taille');
    // add all
    tailles= ['all',...tailles];
    // map to jsx
    tailles = tailles.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    let villes = getUnique(profiles,'ville');
    villes= ['all',...villes];
    villes = villes.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    return (
        <section className="filter-container">
            <Title title="Search Profiles" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="taille">Size</label>
                    <select name="taille" id="taille" value={taille}
                    className="form-control" onChange={handleChange}>
                        {tailles}
                    </select>
                </div>
                {/*end of select type*/}
                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="ville">Address</label>
                    <select name="ville" id="ville" value={ville}
                    className="form-control" onChange={handleChange}>
                        {villes}
                    </select>
                </div>
                {/*end of guests*/}
                {/*guests
                <div className="form-group">
                    <label htmlFor="capacity">Profile type</label>
                    <select name="capacity" id="capacity" value={option}
                    className="form-control" onChange={handleChange}>
                        {option}
                    </select>
                </div>
                end of guests*/}
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
                {/*extras
                <div className="form-group">
                    <div className="single-extra">
                        <input name="breakfast" id="breakfast" type="checkbox" checked={breackfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">Students</label>
                    </div>
                    <div className="single-extra">
                    <input name="pets" id="pets" type="checkbox" checked={pets} onChange={handleChange}/>
                    <label htmlFor="pets">Laureats</label>
                    </div>
                </div>
                end of extras*/}
            </form>
        </section>
    )
}
