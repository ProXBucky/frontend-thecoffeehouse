
import { useState } from 'react';

function useMultiValueValidation(initialValues) {
    const [values, setValues] = useState(initialValues);

    const validateValues = () => {
        for (let i = 0; i < values.length; i++) {
            if (!values[i]) {
                alert("Missing value at index " + i);
                return false;
            }
        }
        return true;
    };

    return [values, setValues, validateValues];
}

export default useMultiValueValidation;