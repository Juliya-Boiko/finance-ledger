import { useState } from "react";
import { Formik } from "formik";
import { Modal } from "../../../components/Modal";
import { SectionTitle } from "../../../styles/common/SectionTitle.styled";
import { ReactComponent as Warning } from '../../../images/icons/warning.svg';
import { ButtonSubmit } from "../../../components/buttons/ButtonSubmit";
import { CallbackSection, CallbackImage, CallbackContent, CallbackForm, CallbackLabel, CallbackInput, CallbackLegend, CallbackError } from "./Callback.styled";

const initialValues = { name: '', email: '' };

export const CallBack = () => {
  const [values, setValues] = useState({ name: '', email: '' });
  const [showError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues(prevState => { return { ...prevState, [name]: value }; });
  };

  const submitHandler = () => {
    if (!values.email) {
      setShowError(true);
    } else {
      setShowError(false);
      setShowModal(true);
      setValues(initialValues);
    }
  };
  
  return (
    <CallbackSection id="contact">
      <CallbackImage></CallbackImage>
      <CallbackContent>
        <SectionTitle maxWidth="auto">Request Callback</SectionTitle>
         <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
          >
          {() => (
            <CallbackForm>
              <CallbackLabel>
                <CallbackInput type="text" id="name" name="name" value={values.name} onChange={changeHandler} />
                <CallbackLegend value={values.name}>Enter your name</CallbackLegend>
              </CallbackLabel>
              <CallbackLabel>
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