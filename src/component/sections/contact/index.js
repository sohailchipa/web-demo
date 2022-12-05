import React from 'react';
import { useFormContext } from '../../../provider/formProvider';
import Show from './show';

const ContactForm = () => {
    const { initialValue, setInitialValue, inputEvent, onSubmits, handleReset, setShowValue, showValue } = useFormContext();
    console.log('setStatesetState', initialValue)
    console.log("Form Submited", initialValue);
    return (
        <>
            <h4>
                {showValue && initialValue.email} <br />{showValue && initialValue.password}<br />
                {showValue && initialValue.city} <br /> {showValue && initialValue.gender}<br />
                {showValue && initialValue.clicked}
            </h4>
            <Show setInitialValue={setInitialValue} setShowValue={setShowValue}
                initialValue={initialValue} handleReset={handleReset} onSubmits={onSubmits} inputEvent={inputEvent} />

        </>

    );
}
export default ContactForm; 