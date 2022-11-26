import Form from 'react-bootstrap/Form';
import { FormWrapper } from './FormWrapper';

type AddressData = {
  street: string
  city: string
  state: string
  zip: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

const AdressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title='Address'>
        <Form.Group className="mb-3" controlId="formAdressStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control autoFocus required type="text" placeholder="Enter street" value={street} onChange={e => updateFields({ street: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAdressCity">
          <Form.Label>City</Form.Label>
          <Form.Control required type="text" placeholder="Enter city" value={city} onChange={e => updateFields({ city: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAdressState">
          <Form.Label>State</Form.Label>
          <Form.Control required type="text" placeholder="Enter state" value={state} onChange={e => updateFields({ state: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAdressZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control required type="text" placeholder="Enter zip code" value={zip} onChange={e => updateFields({ zip: e.target.value })} />
        </Form.Group>
    </FormWrapper>
  );
}

export default AdressForm;