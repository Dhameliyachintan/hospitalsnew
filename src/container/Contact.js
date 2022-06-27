import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import InputBoxs from '../InputBoxs/InputBoxs';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

function Contact(props) {
    const [data, setData] = useState([]);

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required('enter email').email('enter valid email'),
        message: yup.string().required("please enter message"),
        subject: yup.string().required("please enter subject")
    });

    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random() * 1000),
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            const localdata = JSON.parse(localStorage.getItem("contact"));

            console.log(localdata);
            if (data === null) {
                localStorage.setItem("contact", JSON.stringify([values]));
            } else {
                localdata.push(data);
                localStorage.setItem("contact", JSON.stringify(localdata));
            }
            getdata()

        },
    });

    const getdata = () => {
        const localdata = JSON.parse(localStorage.getItem("contact"));
        // console.log(localdata);
        setData(localdata)
    }

    useEffect(() => {
        getdata()
    },
        []);


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'email', width: 130 },
        { field: 'message', headerName: 'message', width: 130 },
        { field: 'subject', headerName: 'subject', width: 130 },
    ];

    const { handleSubmit, handleChange, errors, touched } = formik

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location:</h4>
                                <p> F-505, Inovative Plazza New Delhi, India</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>cityhospital@example.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Call:</h4>
                                <p>+91 9988776655</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <Formik value={formik}>
                            <Form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <InputBoxs
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={handleChange}
                                            errors={Boolean(errors.name && touched.name)}
                                            errorMessages={errors.name}
                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <InputBoxs
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            onChange={formik.handleChange}
                                            errors={Boolean(errors.email && touched.email)}
                                            errorMessages={errors.email}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <InputBoxs
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        onChange={handleChange}
                                        errors={Boolean(errors.subject && touched.subject)}
                                        errorMessages={errors.subject}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <InputBoxs
                                        className="form-control"
                                        name="message"
                                        rows={5} placeholder="Message"
                                        defaultValue={""}
                                        onChange={handleChange}
                                        errors={Boolean(errors.message && touched.message)}
                                        errorMessages={errors.message}
                                    />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;