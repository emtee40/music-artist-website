import React from 'react';
import {Formik} from "formik";
import {TFunction} from "i18next";

type Props = {
    t: TFunction
}

type FormErrors = {
    email?: string
    message?: string
}

function ContactForm(props: Props) {

    const t = props.t;

    return (
        <Formik
            initialValues={{email: '', message: ''}}
            validate={values => {
                const errors: FormErrors = {};
                if (!values.email) {
                    errors.email = t('form:email-required');
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = t('form:email-invalid');
                }
                if (!values.message) {
                    errors.message = t('form:message-required');
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
                        aria-label={t('aria:email')}
                        placeholder={t('form:email')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <textarea
                        name={'message'}
                        aria-label={t('aria:message')}
                        placeholder={t('form:message')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                    <button type={'submit'} disabled={isSubmitting}>{t('form:submit')}</button>
                    <div className="form-errors">
                        <p>{errors.email && touched.email && errors.email}</p>
                        <p>{errors.message && touched.message && errors.message}</p>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default ContactForm;
