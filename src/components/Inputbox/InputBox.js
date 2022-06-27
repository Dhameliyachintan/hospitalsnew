import React from 'react';
import { Formfeedstyled, InputBoxstyled } from './InputBoxstyled';

function Inputbox({children,errors=false,errorMessages='',...rests}) {
    return (
        <>
            <InputBoxstyled  {...rests}>
                 {children}
            </InputBoxstyled>

            <Formfeedstyled error={errors}>
                {errorMessages}
            </Formfeedstyled>
        </>
    );
}

export default Inputbox;

