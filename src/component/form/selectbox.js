import React from 'react';
import { Form } from 'react-bootstrap';

const SelectBox = (props) => {
    const { label, value, className, options, name } = props;
    return (
        <Form.Group className={className} controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Select name={name} onChange={props.onChange} value={value} >
                <option>Select</option>
                {options && options.map((item, index) => {
                    return (
                        <option key={`Options${index}`} value={item?.id}>{item?.name}</option>
                    )
                })}
            </Form.Select>
        </Form.Group>
    )
}

export default SelectBox;