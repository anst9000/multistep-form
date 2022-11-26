import Form from 'react-bootstrap/Form';
import { FormWrapper } from './FormWrapper';

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

const UserForm = ({ firstName, lastName, age, updateFields }: UserFormProps) => {
  return (
    <FormWrapper title='User Details'>
        <Form.Group className="mb-3" controlId="formUserFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control autoFocus required type="text" placeholder="Enter first name" value={firstName} onChange={e => updateFields({ firstName: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUserLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Enter last name" value={lastName} onChange={e => updateFields({ lastName: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUserAge">
          <Form.Label>Age</Form.Label>
          <Form.Control required type="number" placeholder="Enter age" value={age} onChange={e => updateFields({ age: e.target.value })} />
        </Form.Group>
    </FormWrapper>
  );
}

export default UserForm;