import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex overflow-x-hidden  col-span-11">
      <Button name={"All"} />
      <Button name="Songs" />
      <Button name="movies" />
      <Button name="blogs" />
      <Button name="gaming" />
      <Button name="news" />
      <Button name="cricket" />
      <Button name="motivation" />
      <Button name="fan" />
      <Button name="engineer" />
      {/* <Button name="react" />
      <Button name="java" />
      <Button name="DSA" />
      <Button name="OS" />
      <Button name="google" /> */}
    </div>
  );
};

export default ButtonList;
