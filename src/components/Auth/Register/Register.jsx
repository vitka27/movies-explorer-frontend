import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";
import Button from "../../Form/Button/Button";
import ToAction from "../../Form/ToAction/ToAction";

export default function Register() {
  return (
    <Form title="Добро пожаловать!">
      <Input inputName="Имя" />
      <Input inputName="E-mail" />
      <Input inputName="Пороль" />
      <Button buttonName="Зарегистрироваться" />
      <ToAction
        actionTitle="Уже зарегистрированы?"
        nameButton="Войти"
        patch="/signin"
      />
    </Form>
  );
}
