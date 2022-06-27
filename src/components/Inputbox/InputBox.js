// import React from 'react';
// import { Formfeedstyled, InputBoxstyled } from './InputBoxstyled';

// function Inputbox({children,errors=false,errorMessages='',...rests}) {
//     return (
//         <>
//             <InputBoxstyled  {...rests}>
//                  {children}
//             </InputBoxstyled>

//             <Formfeedstyled error={errors}>
//                 {errorMessages}
//             </Formfeedstyled>
//         </>
//     );
// }

// export default Inputbox;


import React from 'react';
import {Formfeedstyled, InputBoxstyled} from './InputBoxstyled';

function InputBox({children,errors=false,errormessage='',...rest}) {
    return (
        <>
            <InputBoxstyled {...rest}>
            {children}
            </InputBoxstyled>

            
             <Formfeedstyled error = {errors}>
            {errormessage}
             </Formfeedstyled>
        </>
    );
}

export default InputBox;