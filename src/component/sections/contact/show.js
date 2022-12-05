import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TextBox, SelectBox, PasswordBox, RadioBox, CheckBox } from '../../form';

const Show = (props) => {
    const SelectOption = [
        {
            id: 1,
            name: 'Ajmer'
        },
        {
            id: 2,
            name: 'udaipur'
        },
        {
            id: 3,
            name: 'kota'
        }
    ]
    return (
        <>
            <Container>
                <Form onSubmit={(e) => props.onSubmits(e, props.initialValue)}>
                    <TextBox
                        className="mb-3"
                        label="Email Address"
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        onChange={(e) => props.inputEvent(e)}
                        value={props.initialValue.email}
                    />

                    <PasswordBox
                        className="mb-3"
                        label="Password"
                        name="password"
                        placeholder="Enter Password"
                        type="password"
                        onChange={(e) => props.inputEvent(e)}
                        value={props.initialValue.password}

                    />

                    <SelectBox
                        label="City"
                        className="mb-3"
                        name="city"
                        onChange={(e) => props.inputEvent(e)}
                        options={SelectOption}
                        value={props.initialValue.city}
                    />

                    <RadioBox
                        label="Male"
                        name="gender"
                        value={props.initialValue.gender}
                        onChange={(e) => {
                            console.log('eeee', e)
                            if (e.target.checked) {
                                const { name } = e.target;
                                props.setInitialValue((preValue) => {
                                    return {
                                        ...preValue,
                                        [name]: 'male',
                                    }
                                })
                            }
                        }}
                    />

                    <RadioBox
                        label="Female"
                        name="gender"
                        value={props.initialValue.gender}
                        onChange={(e) => {
                            if (e.target.checked) {
                                const { name } = e.target;
                                props.setInitialValue((preValue) => {
                                    return {
                                        ...preValue,
                                        [name]: 'female',
                                    }
                                })
                            }
                        }}
                    />


                    <CheckBox
                        className="mb-3"
                        label="Check me out"
                        name="clicked"
                        value={props.initialValue.clicked}
                        onChange={(e) => {
                            if (e.target.checked) {
                                const { name } = e.target;
                                props.setInitialValue((preValue) => {
                                    return {
                                        ...preValue,
                                        [name]: 'Successful',
                                    }
                                })
                            }else{
                                const { name } = e.target;
                                props.setInitialValue((preValue) => {
                                    return {
                                        ...preValue,
                                        [name]: 'Unseccessful',
                                    }
                                })
                            }
                        }}
                    />





                    <Button variant="primary" type="submit"> Submit</Button>
                    <Button type="Reset" variant="info" onClick={() => props.handleReset()} >Reset</Button>

                </Form>
            </Container>
        </>
    );
};

export default Show;