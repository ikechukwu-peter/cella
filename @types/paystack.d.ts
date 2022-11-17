export interface IPaystack {
  reference: string;
  redirectUrl: string;
  trxref: string;
  trans: string;
  status: string;
  message: string;
  transaction: string;
}

export interface ITheme {
  border_color?: string;
  background_color?: string;
  button_color?: string;
}
export interface ICustomization {
  theme: ITheme;
  payment_method: Array;
  display_fee: boolean;
  display_type: string;
  logo?: string;
}

export interface ISeerbit {
  public_key: string;
  amount: number;
  tranref: string;
  customization: ICustomization;
}
