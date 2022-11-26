import Form from 'react-bootstrap/Form';
import { FormWrapper } from './FormWrapper';


type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

const AccountForm = ({
  email,
  password,
  updateFields,
}: AccountFormProps) => {
  return (
    <FormWrapper title='Account Creation'>
        <Form.Group className="mb-3" controlId="formAccountEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control autoFocus required type="email" placeholder="Enter email" value={email} onChange={e => updateFields({ email: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAccountPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Enter password" value={password} onChange={e => updateFields({ password: e.target.value })} />
        </Form.Group>
    </FormWrapper>
  );
}

export default AccountForm;