import { FormFeedback, Input } from "reactstrap";
import styled from "styled-components";



export const InputBoxstyled = styled(Input)`
`


export const Formfeedstyled = styled(FormFeedback)`
display: ${props => props.error ? 'block' : 'none'}
`