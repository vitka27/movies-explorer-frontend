import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";

export default function Login() {
  return (
    <Form title="Рады видеть!">
      <Input inputName="E-mail" required/>
      <Input inputName="Пороль" required/>
    </Form>
  );
}
