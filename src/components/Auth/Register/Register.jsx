import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";
import useInputForm from "../../../hooks/useInputForm";
import {register} from "../../../utils/Auth";


export default function Register() {
  const { values, onChange } = useInputForm([]);

  console.log(values);

  const handleSubmit = (event) => {
    event.preventDefault();
    register(values).then((res) => {
      console.log(res);
    })
  };
  return (
    <Form title="Добро пожаловать!" handleSubmit={handleSubmit}>
      <Input
        inputName="Имя"
        required=""
        onChange={onChange}
        value={values.name || ""}
        name="name"
        // placeholder="Email"
        aria-label="строка ввода email"
        type="name"
        minLength={2}
        maxLength={30}
      />
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
        // placeholder="Email"
        aria-label="строка ввода email"
        type="password"
        minLength={2}
        maxLength={30}
      />
    </Form>
  );
}
