import React from 'react';
import { FormInstance } from 'antd';
const FormContext = React.createContext<FormInstance | null>(null);

export default FormContext;