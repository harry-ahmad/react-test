import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

export default function Spinner(props) { 

  return (
    <LoadingOverlay
        active={props.spinner}
        spinner
        text='Loading'
        >
        
      </LoadingOverlay>
  );
}