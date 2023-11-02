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
        inputName="E-mail"
        name="email"
        type="email"
        value={values.email || ""}
        error={errors.email}
        onChange={handleChange}
        onBlur={onBlur}
        isEmpty={isEmpty}
        isDirty={isDirty}
        required=""
        maxLength={30}
        minLength={2}
        placeholder="Введите ваш Email"
        aria-label="строка ввода email"
      />
      <Input
        inputName="Пороль"
        name="password"
        type="password"
        value={values.password || ""}
        error={errors.password}
        onChange={handleChange}
        onBlur={onBlur}
        isEmpty={isEmpty}
        isDirty={isDirty}
        required=""
        minLength={2}
        maxLength={30}
        placeholder="Введите ваш пороль"
        aria-label="строка ввода пороля"
      />
    </Form>
  );
}
