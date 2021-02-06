import React from 'react';
import Button from '../Button/Button';

const EditForm = ({ setPage }) => (
  <div>
    <Button text="&larr;" page="pillbox" click={setPage} type="back" />
  </div>
);

export default EditForm;
