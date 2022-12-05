import React from 'react';
import { Form } from 'react-bootstrap';

const RadioBox = (props) => {
    const { label, value, className, name } = props;
    return (
        <Form.Group className={className} controlId="formBasicEmail">
            <Form.Check
                inline={true}
                type="radio"
                label={label}
                name={name}
                onChange={(e) => props.onChange(e)}
                value={value}
            />
        </Form.Group>
    )
}

export default RadioBox;