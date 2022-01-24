// Import Formik
import { useFormik } from 'formik';
import React, {useState} from 'react';
import * as Yup from 'yup'


export default function Signup() {

    // Create initial values for form
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
            lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
            email: Yup.string()
            .max(30, "Invalid email address")
            .required('Required')
        }),
        
        // Method that handles logic for when the submit button is clicked
        onSubmit: (values) => {
            console.log(values)
        }
    })
    console.log(formik.touched)
            // Add the onSubmit prop to the form so the logic from the method can work
  return <form onSubmit={formik.handleSubmit}>
      <div className='input-container'>
          <input 
            id="firstName"
            name="firstName"
            type='text'
            placeholder='First Name'
            // use handle change to allow for tracking of state as they type
            // Use formik values to pick from the object of initial values
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
          <input 
            id="lastName"
            name="lastName"
            type='text'
            placeholder='Last Name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
          <input 
            id="email"
            name="email"
            type='email'
            placeholder='Email Address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
      </div>
      {/* Button type has to be submit */}
      <button type="submit">Submit</button>
  </form>;
 
}

