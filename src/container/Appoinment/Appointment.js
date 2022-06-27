import React, { useEffect } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Inputbox from '../../components/Inputbox/InputBox';

function Appointment(props) {
    const history = useHistory()

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required('enter email').email('enter valid email'),
        phone: yup.number().min(10).required("please enter phone"),
        date: yup.date().required("please enter date"),
        department: yup.date().required("please select department"),
        message: yup.string().required("please enter message")
    });

    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random() * 1000),
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            const data = JSON.parse(localStorage.getItem("users"));

            console.log(data);

            if (data === null) {
                localStorage.setItem("users", JSON.stringify([values]));
            } else {
                data.push(values);
                localStorage.setItem("users", JSON.stringify(data));
            }


            history.push("/Listappointment");
            // alert(JSON.stringify(values, null, 2));
        },
    });


    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("users"))
        console.log(localData);

        if (localData !== null && props.location.state) {
            let fdata = localData.filter((l) => l.id === props.location.state.id)
            console.log(fdata[0]);

            formik.setValues(fdata[0])

        }
    })


    const { handleSubmit, errors, handleChange, touched, handleBlur, values } = formik

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <div className='row text-center'>
                    <div className="col-6">
                        <NavLink to={"/appointment"}>appointment</NavLink>
                    </div>
                    <div className="col-6">
                        <NavLink to={"/Listappointment"}>Listappointment</NavLink>
                    </div>
                </div>
                <Formik value={formik}>
                    <Form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <Inputbox
                                    type="name"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    errors={Boolean(errors.name && touched.name)}
                                    value = {values.name}
                                    errorMessages={errors.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <Inputbox
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    errors={Boolean(errors.email && touched.email)}
                                    value = {values.email}
                                    errorMessages={errors.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                
                                />
                                <div className="validate"
                                />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <Inputbox
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    errors={Boolean(errors.phone && touched.phone)}
                                    value = {values.phone}
                                    errorMessages={errors.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <Inputbox
                                    type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    errors={Boolean(errors.date && touched.date)}
                                    errorMessages={errors.date}
                                    value = {values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <Inputbox
                                    type="select"
                                    name="department"
                                    id="department"
                                    className="form-select"
                                    value={values.department}
                                    errors={Boolean(errors.department && touched.department)}
                                    errorMessages={errors.department}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    >
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </Inputbox>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <Inputbox
                                type="textarea"
                                className="form-control"
                                name="message" rows={5}
                                placeholder="Message (Optional)"
                                defaultValue={""}
                                errors={Boolean(errors.message && touched.message)}
                                value = {values.message}
                                errorMessages={errors.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                

                            />
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </Form>
                </Formik>
            </div>
        </section>

    );
}

export default Appointment;
