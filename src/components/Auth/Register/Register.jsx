import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";

export default function Register() {
  return (
    <Form title="Добро пожаловать!">
      <Input inputName="Имя" />
      <Input inputName="E-mail" />
      <Input inputName="Пороль" />

    </Form>
  );
}
