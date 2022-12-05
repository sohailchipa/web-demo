import React from 'react';
import { Form } from 'react-bootstrap';

const TextBox = (props) => {
    const { label, name, value, type, placeholder, className } = props;
    return (
        <Form.Group className={className} controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={(e) => props.onChange(e)}
                value={value}
            />
        </Form.Group>
    )
}

export default TextBox;