import * as yup from 'yup'
import * as React from 'react'
import './App.css';
import { Formik, Field } from 'formik'

const FormWithFormikAndYup = () =>
{
    const validationSchema = yup.object().shape({
        lastname : yup.string()
            .min(2, "lastname must contain 2 characters minimum")
            .required("lastname is required"),

        firstname : yup.string()
            .min(2, "firstname must contain 2 characters minimum")
            .required("firstname is required"),

        email : yup.string()
            .email('email is invalid')
            .required("email is required"),

        phone : yup.string()
            .required("phone is required")
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'phone is invalid'),

        password : yup.string()
            .min(8, 'ce champ doit contenir 8 charactères minimum')
            .max(15, 'ce champ ne doit pas contenir plus de 15 caractères')
            .required('password is required'),

        age : yup.number()
            .min(18, "Prohibited minors")
            .max(60, 'Prohibited seniors')
            .required("age is required"),

        country : yup.string()
            .required('country is required')
            .oneOf(['France', 'England', 'Germany'], 'Select one country')
    })

    return <div>
        <Formik
            initialValues = {{
                lastname: "",
                firstname : "",
                email: "",
                password: "",
                phone: "",
                age: "",
                country: ""
            }
        }
        validationSchema={validationSchema}
            onSubmit = {values => {
                alert(values);
            }}
        >
        { ({errors, touched, isSubmitting, handleSubmit}) => (
            <div className="form-container">

              <div className="form-left-panel"></div>
              <form className="form-right-panel" onSubmit={handleSubmit}>
                  <h2 className="form-title">Registration Info</h2>

                  <div className="form-error-summary"></div>

                  <div className="form-field">
                      <Field className="form-input form-input-name" type="text" name="lastname" placeholder="Lastname"/>
                      {
                          errors.lastname && touched.lastname ? (<div className="form-error-message">{errors.lastname}</div>) : null
                      }
                      <img className="form-validation-image"/>
                  </div>

                  <div className="form-field">
                      <Field className="form-input form-input-name" type="text" name="firstname" placeholder="Firstname"/>
                      {
                          errors.firstname && touched.firstname ? (<div className="form-error-message">{errors.firstname}</div>) : null
                      }
                      <img className="form-validation-image"/>
                  </div>

                  <div className="form-field">
                      <Field className="form-input form-input-name" type="text" name="email" placeholder="Email"/>
                      {
                          errors.email && touched.email ? (<div className="form-error-message">{errors.email}</div>) : null
                      }
                      <img className="form-validation-image"/>
                  </div>

                  <div className="form-field">
                      <Field className="form-input form-input-name" type="text" name="password" placeholder="Password"/>
                      {
                          errors.password && touched.password ? (<div className="form-error-message">{errors.password}</div>) : null
                      }
                      <img className="form-validation-image"/>
                  </div>

                  <div className="form-field">
                      <Field className="form-input form-input-name" type="text" name="phone" placeholder="Phone number"/>
                      {
                          errors.phone && touched.phone ? (<div className="form-error-message">{errors.phone}</div>) : null
                      }
                      <img className="form-validation-image"/>
                  </div>

                  <div className="form-field">
                      <Field className="form-input form-input-name" type="text" name="age" placeholder="Age"/>
                      {
                          errors.age && touched.age ? (<div className="form-error-message">{errors.age}</div>) : null
                      }
                      <img className="form-validation-image"/>
                  </div>

                  <div className="form-field">
                      <Field as="select" name="country" className="form-input form-input-country">
                          <option value="" disabled selected>Country</option>
                          <option value="France">France</option>
                          <option value="Angleterre">London</option>
                          <option value="Allemagne">Germany</option>
                      </Field>
                      {
                          errors.country && touched.country ? (<div className="text-danger">{errors.country}</div>) : null
                      }
                      <img className="form-validation-image hidden"/>
                  </div>

                  <div>
                      <button type="submit" disabled={isSubmitting} className="form-submit-button">Submit</button>
                  </div>
                </form>
            </div>)}
        </Formik>
    </div>
}

export default FormWithFormikAndYup