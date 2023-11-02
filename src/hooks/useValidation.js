import { useState } from "react";

function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidInputs, setIsValidInputs] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isDirty, setIsDirty] = useState(false);
  function handleChange(event) {
    const { name, value, validationMessage, validity, form } = event.target;
    setIsValidForm(form.checkValidity());
    setValues({ ...values, [name]: value });
    setIsValidInputs({ ...isValidInputs, [name]: validity.valid });
    setErrors({ ...errors, [name]: validationMessage });
    setIsEmpty({ ...isEmpty, [name]: !value });
  }
  const onBlur = () => {
    setIsDirty(true);
  };

  // const reset = useCallback(() => {
  //   setIsValidForm(false);
  //   setValues({});
  //   setIsValidInputs({});
  //   setErrors({});
  // }, [{}]);

  return {
    values,
    errors,
    isValidInputs,
    isValidForm,
    handleChange,
    // reset,
    onBlur,
    isEmpty,
    isDirty,
  };
}
export default useValidation;
