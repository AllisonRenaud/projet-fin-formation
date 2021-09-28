/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

import './field.scss';

const Field = ({
  name, value, type, placeholder, onChange, updateMode,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <Form.Field>
      <label htmlFor={inputId}>{placeholder}</label>
      <input
        id={inputId}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={updateMode}
      />
    </Form.Field>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  updateMode: PropTypes.bool.isRequired,
};

Field.defaultProps = {
  value: '',
};

export default Field;
