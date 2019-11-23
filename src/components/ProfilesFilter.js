import React from 'react'
import {useContext} from 'react'
import {ProfileContext} from '../Context';
import Title from './Title';


// get all unique values

const getUnique = (items,value) =>{
    return [...new Set(items.map(item=> item[value]))];
}

export default function ProfilesFilter({profiles}) {

    const context = useContext(ProfileContext);
    const {handleChange,type, capacity, price, minPrice, maxPrice,
    minSize, maxSize, breackfast, pets } =context;
// get unique types
    let types = getUnique(profiles,'type');
// add all
types= ['all',...types];
// map to jsx
types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
});
let people = getUnique(profiles,'capacity');
people = people .map((item,index) => {
    return <option value={item} key={index}>{item}</option>
});
    return (
        <section className="filter-container">
            <Title title="Search Profiles" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">Profile type</label>
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end of select type*/}
                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" value={capacity}
                    className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/*end of guests*/}
                {/*room price*/}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input name="price" value={price} id="price" type="range" min={minPrice} max={maxPrice}
                    className="form-control" onChange={handleChange} />
                </div>
                {/*end of room price*/}
                {/*room size*/}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                    <input name="minSize" value={minSize} id="size" type="number" 
                    className="size-input" onChange={handleChange} />
                    <input name="maxSize" value={maxSize} id="size" type="number" 
                    className="size-input" onChange={handleChange} />
                    </div>
                </div>
                {/*end of room size*/}
                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input name="breakfast" id="breakfast" type="checkbox" checked={breackfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breackfast</label>
                    </div>
                    <div className="single-extra">
                    <input name="pets" id="pets" type="checkbox" checked={pets} onChange={handleChange}/>
                    <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end of extras*/}
            </form>
        </section>
    )
}
