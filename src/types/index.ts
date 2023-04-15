/*eslint-disable @typescript-eslint/no-empty-interface*/

export interface indexSignatureBaseParams {
  [key: string]: string | number | undefined;
  number: number | string;
  image: string;
  first_name: string;
  last_name: string;
  dob: string;
  customer_reference?: string;
  customer_name?: string;
  rc_number?: string | number;
}

export type radarParams = Required<
  { phone_number: string | number } | { email: string } | { ip_address: string }
>;

export interface otherVerificationsParams
  extends Partial<
    Pick<
      indexSignatureBaseParams,
      'image' | 'number' | 'customer_name' | 'customer_reference'
    >
  > {
  company_number: string | number;
  company_name: string;
  country_code: string;
  email: string;
  vin: string;
}

export interface interpolBanListParams {
  search_mode: Required<'IMAGE' | 'NAME'>;
  name?: string;
  image?: string;
}

export interface biometricFaceParams
  extends Partial<
    Pick<indexSignatureBaseParams, 'image' | 'first_name' | 'last_name'>
  > {
  image_one: string;
  image_two: string;
  face_image: string;
}

export interface documentParams {
  doc_type: 'PP' | 'DL' | 'ID' | 'RP' | 'UB';
  doc_country: string;
  doc_image: string;
}

export interface faceComparisonParams
  extends Partial<Pick<biometricFaceParams, 'image_one' | 'image_two'>> {}

export interface bankAcctParams
  extends Pick<
    indexSignatureBaseParams,
    'number' | 'customer_name' | 'customer_reference'
  > {
  bank_code: number;
}

type companyTypes = 'RC' | 'BN' | 'IT' | 'LL' | 'LLP';

export interface cacParams extends Pick<indexSignatureBaseParams, 'rc_number'> {
  company_name: string;
  company_type: companyTypes;
}

export interface creditBureauParams
  extends Pick<
    indexSignatureBaseParams,
    | 'first_name'
    | 'dob'
    | 'customer_reference'
    | 'customer_name'
    | 'number'
    | 'rc_number'
  > {
  phone_number: string;
  mode: 'ID' | 'BIO';
}

export interface intlPassPortParams
  extends Pick<indexSignatureBaseParams, 'last_name' | 'number' | 'image'> {}

export interface stampDutyParams
  extends Pick<
    indexSignatureBaseParams,
    'customer_reference' | 'customer_name' | 'number'
  > {}

export interface votersCardParams
  extends Pick<
    indexSignatureBaseParams,
    'number' | 'last_name' | 'image' | 'first_name' | 'dob'
  > {
  state: string;
  lga: string;
}

export interface ninParams extends Pick<indexSignatureBaseParams, 'number'> {
  number_nin: number;
}

export interface tinParams extends Pick<indexSignatureBaseParams, 'number'> {
  channel: 'TIN' | 'CAC' | 'Phone';
}

export interface vehiclePlateNoParams {
  vehicle_number: string;
}

export interface ugBusParams
  extends Pick<
    indexSignatureBaseParams,
    'customer_name' | 'customer_reference'
  > {
  reservation_number: string;
}

export interface saBusParams extends Omit<ugBusParams, 'reservation_number'> {
  reg_number: string;
}

export interface ghVotersCardParams
  extends Pick<indexSignatureBaseParams, 'number'> {
  type: 'OLD' | 'MAIN';
}

export interface kyNationalIdentityParams
  extends Pick<indexSignatureBaseParams, 'dob' | 'number'> {
  firstname: string;
  lastname: string;
  nationalid: string;
  customer_name: string;
  customer_reference: string;
}

export interface slDriversLicenseParams
  extends Partial<Pick<indexSignatureBaseParams, 'dob' | 'number'>> {
  firstname?: string;
  lastname?: string;
  middlename?: string;
  search_mode: 'ID' | 'BIO';
}

export interface mashupParams extends Pick<indexSignatureBaseParams, 'number'> {
  channel: 'BVN' | 'PHONE';
}
