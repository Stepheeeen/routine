import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  
  '& label.Mui-focused': {
    color: '#028960',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#028960',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#028960',
    },
  },
});

export const DefaultInput = ({ label, customStyling, id }) => {
  return (
    <div className={customStyling}>
      <CustomTextField
        id={id}
        label={label}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};
