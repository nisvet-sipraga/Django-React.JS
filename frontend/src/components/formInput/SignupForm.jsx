import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'

const InputLogin = ({htmlFor, value, type, id, label, change } ) => {
    return (
        <FormGroup>
            <FormLabel htmlFor={htmlFor}>{label}</FormLabel> <br/>
            <FormControl type={type} id={id} value={value} onChange={change} />
        </FormGroup>
    )
}

InputLogin.propTypes = {
    htmlFor: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    change: PropTypes.func
}

export default InputLogin 