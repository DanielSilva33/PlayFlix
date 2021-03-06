import React from 'react';

function FormField({ label, name, type, value, onChange }) {
    const fieldId = `id_${name}`

    return (
        <div>
            <label>

                {label}
                    <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    />
            </label>
        </div>
    )
}


export default FormField;