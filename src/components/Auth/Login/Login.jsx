import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";
import useValidation from "../../../hooks/useValidation";

export default function Login({ hadleSubmitLogin }) {
  const {
    values,
    errors,
    isValidInputs,
    isValidForm,
    handleChange,
    reset,
    isEmpty,
    onBlur,
    isDirty,
  } = useValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    hadleSubmitLogin(values);
  };

  return (
    <Form
      title="Рады видеть!"
      handleSubmit={handleSubmit}
      isValidForm={isValidForm}
    >
      <Input
        isEmpty={isEmpty}
        isDirty={isDirty}
        error={errors.email}
        inputName="E-mail"
        required=""
        onChange={handleChange}
        onBlur={onBlur}
        value={values.email || ""}
        name="email"
        placeholder="Введите ваш Email"
        aria-label="строка ввода email"
        type="email"
        minLength={2}
        maxLength={30}
      />
      <Input
        isEmpty={isEmpty}
        isDirty={isDirty}
        error={errors.password}
        inputName="Пороль"
        required=""
        onChange={handleChange}
        onBlur={onBlur}
        value={values.password || ""}
        name="password"
        placeholder="Введите ваш пороль"
        aria-label="строка ввода пороля"
        type="password"
        minLength={2}
        maxLength={30}
      />
    </Form>
  );
}
