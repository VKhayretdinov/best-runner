// import React from 'react';
// import PropTypes from 'prop-prop-types';
// import {
//   Form,
//   Input,
//   Button,
// } from 'reactstrap';
// import { Field } from 'redux-form';
// import { CustomField, Select } from '../../../shared/redux-form-components';
//
// // TODO: options
//
// const options = [
//   { label: 'running', value: 'running' },
//   { label: 'bike', value: 'bike' },
//   { label: 'walking', value: 'walking' },
//   { label: 'skiing', value: 'skiing' },
// ];
//
// const required = value => (value ? undefined : 'Required');
//
// const WorkoutForm = ({ handleSubmit, onSubmit }) => (
//   <Form onSubmit={handleSubmit(onSubmit)}>
//     <CustomField
//       id="date"
//       name="date"
//       type="date"
//       component={Input}
//       placeholder="Date"
//       label="Date"
//       validate={[required]}
//     />
//     <Field
//       name="type"
//       id="type"
//       component={Select}
//       options={options}
//       validate={[required]}
//     />
//     <CustomField
//       id="distance"
//       name="distance"
//       type="number"
//       component={Input}
//       placeholder="0"
//       label="Distance"
//       validate={[required]}
//     />
//     <Button
//       type="submit"
//       color="primary"
//       className="mr-3"
//     >
//       Add
//     </Button>
//   </Form>
// );
//
// WorkoutForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
//
// export default WorkoutForm;