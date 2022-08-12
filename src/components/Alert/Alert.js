// import React from 'react';
import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert, ResetAlert } from '../../Redux/Action/Alert.action';
import { Fade } from 'reactstrap';


function Alert(props) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const alert = useSelector(state => state.alert)
    // console.log(alert);

    const dispatch = useDispatch()

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                TransitionComponent: Fade,
                anchororigin: {
                    vertical: 'top',
                    horizontal: 'center',
                }
            });
            setTimeout(dispatch(ResetAlert()), 2000);
        }

    }, [alert.text])


    return (
        <div>

        </div>
    );
}

export default Alert;