
// import 'dotenv/config'
import React, {useEffect, useRef, useState} from "react";
import "./footer.css"
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
 import { Link } from "react-router-dom";
 import emailjs from '@emailjs/browser';

// import nodemailer from 'nodemailer';

const LandingSection = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const sendEmail2 = async () => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
      },
    });
    const mailOptions = {
      from: 'your-email@example.com',
      to: email,
      subject: 'Hello from ReactJS',
      text: message,
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };







  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("")
    },
    validationSchema: Yup.object({}),
  });







  const form = useRef();

const sendEmail = (e) => {
e.preventDefault();
// service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
emailjs.sendForm("service_i87a8cr", "template_6lzlcdm", form.current, "2sLUd6sdcxz6mhAaE")
  .then((result) => {
      console.log(result);
      document.getElementById("form").reset()
      alert("success")
      
  
  }, (error) => {
      console.log(error);
  });
};


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={15}
      spacing={8}
    >
      <VStack w="100%" alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form ref={form} onSubmit={sendEmail} id="form">
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="name"
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="job">
                  <option value="Ui/ux">Ui/Ux</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphics Design">Graphics Design</option>

                </Select>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full"   >
                  submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;