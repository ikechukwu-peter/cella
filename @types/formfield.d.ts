import { ReactElement } from "react";

export interface FormInterface {
  error?: any;
  label?: string;
  helper?: string;
  required?: boolean;
  readonly?: boolean;
  children: ReactElement;
}
