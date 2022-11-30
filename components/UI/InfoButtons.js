import React from "react";
import Button from "./Button";

function InfoButtons() {
  return (
    <div className="px-8 py-5">
      <Button link="howitworks" title="How it works" />
      <Button link="blog" title="Blog" />
      <Button link="faqs" title="FAQ's" />
    </div>
  );
}

export default InfoButtons;
