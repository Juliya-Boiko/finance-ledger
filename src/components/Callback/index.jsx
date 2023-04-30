import { CallbackSection, CallbackImage, CallbackContent, CallbackTitle, CallbackForm, CallbackLabel, CallbackInput, CallbackLegend, CallbackError } from "./Callback.styled";
import { Formik } from "formik";
import { ButtonSubmit } from "../buttons/ButtonSubmit";
import { useState } from "react";
import { ReactComponent as Warning } from '../../images/icons/warning.svg';
import { Modal } from "../Modal";

const initialValues = {
  name: '',
  email: ''
};

export const CallBack = () => {
  const [values, setValues] = useState({ name: '', email: '' });
  const [showError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const submitHandler = () => {
    if (!values.email) {
      setShowError(true);
    } else {
      setShowError(false);
      setShowModal(true);
      //console.log(values);
    }
  };
  
  return (
    <CallbackSection>
      <CallbackImage></CallbackImage>
      <CallbackContent>
        <CallbackTitle>Request Callback</CallbackTitle>
         <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
          >
          {() => (
            <CallbackForm>
              <CallbackLabel htmlFor="name" >
                <CallbackInput type="text" id="name" name="name" value={values.name} onChange={changeHandler} />
                <CallbackLegend value={values.name}>Enter your name</CallbackLegend>
              </CallbackLabel>
              <CallbackLabel htmlFor="email" >
                <CallbackInput type="email" id="email" name="email" value={values.email} onChange={changeHandler} />
                <CallbackLegend value={values.email}>Enter email*</CallbackLegend>
                { showError ? <CallbackError><Warning /><span>This is a required field</span></CallbackError> : null }
              </CallbackLabel>
              <ButtonSubmit title="Send" />
            </CallbackForm>
          )}
        </Formik>
      </CallbackContent>
      {showModal ? <Modal onClick={() => setShowModal(false)} /> : null }
    </CallbackSection>
  );
};