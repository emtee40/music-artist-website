import React from 'react';
import Tracking from "../components/tracking";
import {Formik} from 'formik';

function ContactPage(props) {

    const t = props.t;

    return (
        <div className={'wrapper'}>
            <Tracking paq={props.paq}/>
            <h1>{t('contact')}</h1>
            <Formik
                initialValues={{email: '', message: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = t('form:email_required');
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = t('form:email_invalid');
                    }
                    if(!values.message) {
                        errors.message = t('form:message_required');
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400); //TODO: implement submitting
                }}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <form onSubmit={handleSubmit} id={'contact-form'}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <textarea
                            name={'message'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <button type={'submit'} disabled={isSubmitting}>{t('form:submit')}</button>
                        <div className="form-errors">
                            <p>{errors.email && touched.email && errors.email}</p>
                            <p>{errors.message && touched.message && errors.message}</p>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default ContactPage;