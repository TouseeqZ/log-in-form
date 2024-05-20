"use client";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";



import { ChangeEvent, useState } from "react";

const ThinkingInReact = () => {
  const [search, setSearch] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name,setName]=useState("");
  console.log("🚀 ~ ThinkingInReact ~ search:", search);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setSearch(event.target.value);
     console.log("onChange", event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setEmail(event.target.value);
     console.log("onEmailChange", event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setPassword(event.target.value);
     console.log("onPasswordChange", event.target.value);
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setName(event.target.value);
     console.log("onNameChange", event.target.value);
  };

  return (
    <div className="flex min-h-screen flex-col  bg-gradient-to-r from-slate-700 to-amber-100">
    <div className="gap-8  place-content-center  grid container mt-24 mx-auto px-12 py-4">
     
      
     <div className="flex space-x-2"> 
     
      <Input
        placeholder="Quick Search"
        value={search}
        onChange={onChange}
        name="search"
        type="search"
      />
       
      <Button button_value="Search" />
      </div>
      <Input
        type="text"
        placeholder="First Name  Last Name"
        value={name}
        onChange={onNameChange}
        name="input"
      />
      

<Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        name="input"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        name="input"
      />
      
      
     <Button button_value={"Login"} />
       
      </div>
      
      </div>
      
  );
};

export default ThinkingInReact;
