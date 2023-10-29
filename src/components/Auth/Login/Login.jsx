import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";
import useInputForm from "../../../hooks/useInputForm";

export default function Login({ hadleSubmitLogin }) {
  const { values, onChange } = useInputForm([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    hadleSubmitLogin(values);
  };

  return (
    <Form title="Рады видеть!" handleSubmit={handleSubmit}>
      <Input
        inputName="E-mail"
        required=""
        onChange={onChange}
        value={values.email || ""}
        name="email"
        // placeholder="Email"
        aria-label="строка ввода email"
        type="email"
        minLength={2}
        maxLength={30}
      />
      <Input
        inputName="Пороль"
        required=""
        onChange={onChange}
        value={values.password || ""}
        name="password"
        // placeholder="Пороль"
        aria-label="строка ввода пороля"
        type="password"
        minLength={2}
        maxLength={30}
      />
    </Form>
  );
}
