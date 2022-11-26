import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useMultistepForm } from './hooks/useMultistepForm';
import UserForm from './components/UserForm';
import AdressForm from './components/AdressForm';
import AccountForm from './components/AccountForm';
import { Form } from 'react-bootstrap';
import { FormEvent } from 'react';

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}


const App = () => {
  const [data, setData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<FormData>): void => {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AdressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!isLastStep) return next()

    console.log('Successful login')
    console.log('data =', data)
  }

  return (
    <Container className="form-container">
      <>
        <div className="paginator">
          {currentStepIndex + 1} / {steps.length}
        </div>

        <Form onSubmit={onSubmit}>
          {step}

          <div className="buttons">
            {<Button variant="dark" disabled={isFirstStep} onClick={back}>Back</Button>}
            {<Button type="submit" variant={isLastStep ? 'primary' : 'dark'} disabled={false}>{isLastStep ? 'Finish' : 'Next'}</Button>}
          </div>
        </Form>

      </>
    </Container>
  );
}

export default App;
