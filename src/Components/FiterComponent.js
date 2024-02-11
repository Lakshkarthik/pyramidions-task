import React, { useState } from 'react';
import '../Style.css';
import FilterFormComponent from './FilterFormComponent';

function FiterComponent() {

    const [expanded, setExpanded] = useState(null);
    const [filterCount, setFilterCount] = useState(0);
    const [formData, setFormData] = useState({
        transactionId: "",
        description: "",
        currency: "",
        type: "",
    });
    const filterAction = (filterData) => {
        let count = 0;
        if (filterData.transactionId === '' || filterData.type === '') {
            return false;
        } else {
            count += 2;
        }
        if (filterData.currency !== '') {
            count += 1;
        }
        if (filterData.description !== '') {
            count += 1;
        }
        setFormData(filterData);

        setFilterCount(count);
        setExpanded(false);
    }
    const toggExpand = (index) => {
        setExpanded(!expanded);
    };
    return (
        <div className='FiterComponent'>
            <p className='filter-btn' onClick={toggExpand}><span className='filter-count'>{filterCount}</span>Fiters</p>
            {
                expanded &&
                <FilterFormComponent filterAction={filterAction} formData = {formData} />
            }
        </div>
    )
}

export default FiterComponent;