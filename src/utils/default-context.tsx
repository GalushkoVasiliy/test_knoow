import React from 'react';
import {Question} from '../interface/interface';

interface Props {
  saveItem: (param: Question) => void;
}

export const DefaultContext = React.createContext<Props>({
  saveItem: param => param,
});
