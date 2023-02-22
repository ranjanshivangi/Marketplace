import React from 'react'
import './skillModal.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik';

const EmployeeModal = () => {
  const [value, setValue] = React.useState()
  const SkillForm = ({ onSubmit }) => {
    const initialValues = {
      skillName: '',
      skillDescription: '',
      skillLevel: '',
    };
  
    const validate = (values) => {
      const errors = {};
      if (!values.skillName) {
        errors.skillName = 'Skill name is required';
      }
      if (!values.skillDescription) {
        errors.skillDescription = 'Skill description is required';
      }
      if (!values.skillLevel) {
        errors.skillLevel = 'Skill level is required';
      }
      return errors;
    };
  
  return (
    <>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="skillName">Skill Name</label>
            <Field type="text" name="skillName" id="skillName" />
            <ErrorMessage name="skillName" />
          </div>
          <div>
            <label htmlFor="skillDescription">Skill Description</label>
            <Field type="text" name="skillDescription" id="skillDescription" />
            <ErrorMessage name="skillDescription" />
          </div>
          <div>
            <label htmlFor="skillLevel">Skill Level</label>
            <Field as="select" name="skillLevel" id="skillLevel">
              <option value="">Select a level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Field>
            <ErrorMessage name="skillLevel" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Skill
          </button>
        </Form>
      )}
    </Formik>
    
    </>
  )
}
}

export default EmployeeModal
{/* <FormGroup className="fr">
        <FormControl>
          <InputLabel>Skill name</InputLabel>
          <Input/> 
        </FormControl>
        
      </FormGroup> */}