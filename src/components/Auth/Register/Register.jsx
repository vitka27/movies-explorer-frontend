import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";
import { register } from "../../../utils/Auth";
import useValidation from "../../../hooks/useValidation";

export default function Register() {
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
    register(values).then((res) => {
      console.log(res);
    });
  };
  return (
    <Form title="Добро пожаловать!" handleSubmit={handleSubmit}>
      <Input
        inputName="Имя"
        name="name"
        type="name"
        value={values.name || ""}
        error={errors.name}
        onChange={handleChange}
        onBlur={onBlur}
        isEmpty={isEmpty}
        isDirty={isDirty}
        required=""
        minLength={2}
        maxLength={30}
        placeholder="Введите ваше Имя"
        aria-label="строка ввода email"
      />
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
        minLength={2}
        maxLength={30}
        placeholder="Введите ваш адрес электронной почты"
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
        placeholder="Введите пороль"
        aria-label="строка ввода email"
      />
    </Form>
  );
}
