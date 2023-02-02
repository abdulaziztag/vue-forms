import * as yup from 'yup';

export const schema = yup.object({
  card: yup.string().required('This field is required').min(19, 'Please type properly card number'),
  fiveDigitNum: yup
    .string()
    .required('This field is required')
    .min(5, 'Must be exactly 5 digits'),
  onlyString: yup
    .string()
    .required('This field is required')
    .matches(/^[aA-zZ\s]+$/, 'Should contain only letters'),
  sum: yup
    .string()
    .required('This field is required')
    .max(7, 'Max number is 1,000,000'),
  password: yup.string()
    .min(8, 'Password must be 8 characters long')
    .required('This field is required')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  selectField: yup.string().required('This field is required'),
  cities: yup.string().required('This field is required'),
  towns: yup.string().required('This field is required')
});