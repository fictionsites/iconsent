import React, { useState } from "react";
import Cookies from "js-cookie";
import Modal from "./components/modal.js";
import "./styles/globals.css";

function getCookie(name) {
  return Cookies.get("iconsent_" + name);
}

function setCookie(name, value) {
  Cookies.set("iconsent_" + name, value, { expires: 365 });
}

const config = {
  steps: {
    age: {
      isValid: () => {
        return getCookie("age") === "18+";
      },
      onConsent: () => {
        setCookie("age", "18+");
      },
      onDissent: () => {
        window.location.href = "https://www.google.com";
      },
    },
  },
};

export default function Plugin(props) {
  const [open, setOpen] = useState(!config.steps.age.isValid());

  return (
    <Modal
      open={open}
      onConsent={() => {
        config.steps.age.onConsent();
        setOpen(false);
      }}
      onDissent={config.steps.age.onDissent}
      {...props.content}
    />
  );
}
