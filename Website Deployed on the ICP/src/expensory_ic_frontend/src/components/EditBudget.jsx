import React, { useState } from 'react';

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);
    return (
        <>
            <input
                required='required'
                type='number'
                className='form-control mr-3'
                id='name'
                value={value}
                onChange={(event) => {
                    if (event.target.value >= 0) {
                        setValue(event.target.value)
                    } else {
                        window.alert('Error: Budget cannot be negative');
                    }
                }}
            />
            <button
                type='button'
                className='btn btn-primary'
                onClick={() => props.handleSaveClick(value)}
            >
                Save
            </button>
        </>
    );
};

export default EditBudget;