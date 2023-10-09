import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";
import Button from "../../Form/Button/Button";
import ToAction from "../../Form/ToAction/ToAction";

export default function Login() {
  return (
    <Form title="Рады видеть!">
      <Input inputName="E-mail" />
      <Input inputName="Пороль" />
      <Button buttonName="Войти" />
      <ToAction
        actionTitle="Ещё не зарегистрированы?"
        nameButton="Регистрация"
        patch="/signup"
      />
    </Form>
  );
}
