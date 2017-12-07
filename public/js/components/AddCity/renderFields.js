import React, { Component } from 'react';

export const renderInputField = ({
        input,
        label,
        type,
        id,
        className,
        meta: { touched, error, warning }
    }) => (
    <div className="add-city__row">
        <div className="add-city__inner">
            {touched &&
            ((error && <span className="add-city__error">{error}</span>) ||
            (warning && <span className="add-city__warning">{warning}</span>))}
            { label &&
            <label htmlFor={id} className="add-city__label">{label}</label>}
            <input {...input} id={id} type={type} className={className} />
        </div>
    </div>
)