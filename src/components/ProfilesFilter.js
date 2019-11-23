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
})
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
            </form>
        </section>
    )
}
