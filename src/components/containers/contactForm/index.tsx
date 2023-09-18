// React components
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Material UI components
import {Box} from '@material-ui/core';

// Utilities
import { useStyles } from './styles';
import { Form } from 'react-bootstrap';
import emailjs, { init } from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  init("user_vai3y2MPb2pTCY4qN6TaJ");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Your message received!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast"
    });
  };

  const onSubmit = async (data: any) => {
    const { name, email, company, message } = data;

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Company: ", company);
    console.log("Message: ", message);

    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        company,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        "feward",
        "feward",
        templateParams,
        "user_vai3y2MPb2pTCY4qN6TaJ"
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  const classes = useStyles();

  return (
    <Box>
      <Form onSubmit={handleSubmit(onSubmit)} className="form">

        <Form.Group className="form-group">
            <Form.Control
                id="name"
                type="text"
                placeholder="Name"
                className="form-control"
                {...register("name", {
                    required: true
                })}
            />
            {errors.name && (
              <span className={`${classes.errorText} form__errorMsg`}>Please enter your name</span>
            )}
        </Form.Group>

        <Form.Group className="form-group">
            <Form.Control
                id="email"
                type="email"
                placeholder="Email"
                className="form-control"
                {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
            />
            {errors.email && (
              <span className={`${classes.errorText} form__errorMsg`}>Please enter a valid email address</span>
            )}
        </Form.Group>

        <Form.Group className="form-group">
            <Form.Control
                id="company"
                type="text"
                placeholder="Company"
                className="form-control"
                {...register("company", {
                    required: true
                })}
            />
            {errors.company && (
              <span className={`${classes.errorText} form__errorMsg`}>Please enter your company name</span>
            )}
        </Form.Group>

        <Form.Group className="form-group">
            <Form.Control
                id="message"
                as="textarea" rows={3}
                placeholder="Message"
                className="form-control"
                {...register("message", {
                    required: true
                })}
            />
            {errors.message && (
              <span className={`${classes.errorText} form__errorMsg`}>Please enter your message here</span>
            )}
        </Form.Group>

        <button className={classes.button}>Submit</button>

      </Form>
      <ToastContainer />
    </Box>
  );
};

export default ContactForm;
