// TODO: import useFormik from formik library
import React from 'react';
import {useFormik} from 'formik'

  // TODO: add a const called formik assigned to useFormik()


  function App() {
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      onSubmit: values =>{
        console.log('form: ', values);
        alert("Login Successful")
      },
      validate: values =>{
        let errors = {};
        if(!values.name) errors.name = 'Field required';
        if(!values.email) errors.email = 'Username should be an email';
        if(!values.password) errors.password = 'Field Required';
        return errors;
      }
    });
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>Name</div>
          <input name="name" type="text" onChange={formik.handleChange} 
          value={formik.values.name}/>  {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null}
            <div>Email</div>
            <input name="email" type="email" onChange={formik.handleChange} 
          value={formik.values.email}/>  {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
            <div>Password</div>
            <input name="password" type="text" onChange={formik.handleChange} 
          value={formik.values.password}/>  {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
              <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default App;
