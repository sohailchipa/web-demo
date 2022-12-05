import React from 'react';
import { Form } from 'react-bootstrap';

const CheckBox = (props) => {
    const { label, value, className, name } = props;
    return (
        <Form.Group className={className} >
            <Form.Check
                inline={true}
                type="checkbox"
                label={label}
                name={name}
                onChange={(e) => props.onChange(e)}
                value={value}
            />
        </Form.Group>
    )
}

export default CheckBox;