import { Input, FormFeedback } from 'reactstrap';
import styled from 'styled-components';


export const InputBoxstyle = styled(Input)`
`;

export const FormfeedStyle = styled(FormFeedback)`
display :${props => props.error ? "block" : "none"}

`;