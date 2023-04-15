import {
  GET_ALL_BANK_CODES_ENDPOINT,
  VERIFY_BANK_ACCOUNT_ADVANCE_ENDPOINT,
  VERIFY_BANK_ACCOUNT_COMPARISON_ENDPOINT,
  VERIFY_BANK_ACCOUNT_ENDPOINT,
  VERIFY_BVN_ADVANCE_ENDPOINT,
  VERIFY_BVN_ENDPOINT,
  VERIFY_BVN_WITH_IMAGE_ENDPOINT,
  VERIFY_CAC_ADVANCE_ENDPOINT,
  VERIFY_CAC_ENDPOINT,
  VERIFY_CAC_WITH_NAME_ENDPOINT,
  VERIFY_CREDIT_BUREAU_BUSINESS_BASIC_ENDPOINT,
  VERIFY_CREDIT_BUREAU_BUSINESS_FULL_ENDPOINT,
  VERIFY_CREDIT_BUREAU_CONSUMER_BASIC_ENDPOINT,
  VERIFY_CREDIT_BUREAU_CONSUMER_FULL_ENDPOINT,
  VERIFY_CREDIT_BUREAU_ENDPOINT,
  VERIFY_CREDIT_BUREAU_MASHUP_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_BASIC_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_FACE_ID_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_FULL_ENDPOINT,
  VERIFY_DRIVERS_LICENSE_IMAGE_ENDPOINT,
  VERIFY_INTL_PASSPORT_ASYNC_ENDPOINT,
  VERIFY_INTL_PASSPORT_ENDPOINT,
  VERIFY_INTL_PASSPORT_WITH_FACE_ENDPOINT,
  VERIFY_INTL_PASSPORT_WITH_IMAGE_ENDPOINT,
  VERIFY_NIN_WITH_FACE_ENDPOINT,
  VERIFY_NIN_WITH_IMAGE_ENDPOINT,
  VERIFY_NIN_WITH_NO_IMAGE_ENDPOINT,
  VERIFY_PHONE_NUMBER_BASIC_ENDPOINT,
  VERIFY_PHONE_NUMBER_FULL_ENDPOINT,
  VERIFY_STAMP_DUTY_ENDPOINT,
  VERIFY_TIN_ENDPOINT,
  VERIFY_VEHICLE_ENDPOINT,
  VERIFY_VOTERS_CARD_ENDPOINT,
  VERIFY_VOTERS_CARD_IMAGE_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';
import {
  bankAcctParams,
  cacParams,
  creditBureauParams,
  indexSignatureBaseParams,
  intlPassPortParams,
  ninParams,
  stampDutyParams,
  tinParams,
  vehiclePlateNoParams,
  votersCardParams,
} from '@/src/types';

export class NgVerificationService extends BaseSDK {
  bankCodes() {
    return this.get(GET_ALL_BANK_CODES_ENDPOINT);
  }
  bankAcctAdvance(datas: Pick<bankAcctParams, 'number' | 'bank_code'>) {
    return this.post(VERIFY_BANK_ACCOUNT_ADVANCE_ENDPOINT, datas);
  }
  bvnWithFace(datas: Pick<indexSignatureBaseParams, 'image' | 'number'>) {
    return this.post(VERIFY_BVN_WITH_IMAGE_ENDPOINT, datas);
  }
  bvn(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_BVN_ENDPOINT, datas);
  }
  bvnAdvance(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_BVN_ADVANCE_ENDPOINT, datas);
  }
  bankAcctBasic(datas: Pick<bankAcctParams, 'number' | 'bank_code'>) {
    return this.post(VERIFY_BANK_ACCOUNT_ENDPOINT, datas);
  }

  bankAcctComparism(datas: bankAcctParams) {
    return this.post(VERIFY_BANK_ACCOUNT_COMPARISON_ENDPOINT, datas);
  }
  cac(datas: Pick<cacParams, 'company_type' | 'rc_number'>) {
    return this.post(VERIFY_CAC_ENDPOINT, datas);
  }

  cacAdvance(datas: cacParams) {
    return this.post(VERIFY_CAC_ADVANCE_ENDPOINT, datas);
  }

  creditBureau(datas: Pick<creditBureauParams, 'phone_number' | 'first_name'>) {
    return this.post(VERIFY_CREDIT_BUREAU_ENDPOINT, datas);
  }

  creditBureauConsumerBasic(
    datas: Omit<creditBureauParams, 'phone_number' | 'first_name' | 'rc_number'>
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_CONSUMER_BASIC_ENDPOINT, datas);
  }

  creditBureauConsumerAdvance(
    datas: Omit<creditBureauParams, 'phone_number' | 'first_name' | 'rc_number'>
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_CONSUMER_FULL_ENDPOINT, datas);
  }

  creditBureauComBasic(
    datas: Pick<
      creditBureauParams,
      'rc_number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_BUSINESS_BASIC_ENDPOINT, datas);
  }

  creditBureauComAdvance(
    datas: Pick<
      creditBureauParams,
      'rc_number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_BUSINESS_FULL_ENDPOINT, datas);
  }

  driversLicense(datas: Pick<indexSignatureBaseParams, 'number' | 'dob'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_ENDPOINT, datas);
  }

  basicDriversLicense(datas: Omit<indexSignatureBaseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_BASIC_ENDPOINT, datas);
  }

  driversLicenseAdvance(datas: Omit<indexSignatureBaseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_FULL_ENDPOINT, datas);
  }

  driversLicenseImage(datas: Pick<indexSignatureBaseParams, 'image'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_IMAGE_ENDPOINT, datas);
  }

  driversLicenseFaceID(
    datas: Omit<indexSignatureBaseParams, 'first_name' | 'last_name'>
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_FACE_ID_ENDPOINT, datas);
  }

  ninWithImage(datas: Pick<indexSignatureBaseParams, 'image'>) {
    return this.post(VERIFY_NIN_WITH_IMAGE_ENDPOINT, datas);
  }

  ninWithFace(datas: Pick<indexSignatureBaseParams, 'image' | 'number'>) {
    return this.post(VERIFY_NIN_WITH_FACE_ENDPOINT, datas);
  }

  nin(datas: Partial<ninParams>) {
    return this.post(VERIFY_NIN_WITH_NO_IMAGE_ENDPOINT, datas);
  }

  phoneNo(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_PHONE_NUMBER_BASIC_ENDPOINT, datas);
  }

  phoneNoAdvance(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_PHONE_NUMBER_FULL_ENDPOINT, datas);
  }

  tin(datas: tinParams) {
    return this.post(VERIFY_TIN_ENDPOINT, datas);
  }

  vehiclePlateNo(datas: vehiclePlateNoParams) {
    return this.post(VERIFY_VEHICLE_ENDPOINT, datas);
  }

  votersCard(datas: Omit<votersCardParams, 'image'>) {
    return this.post(VERIFY_VOTERS_CARD_ENDPOINT, datas);
  }

  votersCardWithImg(datas: Pick<votersCardParams, 'image'>) {
    return this.post(VERIFY_VOTERS_CARD_IMAGE_ENDPOINT, datas);
  }

  stampDuty(datas: stampDutyParams) {
    return this.post(VERIFY_STAMP_DUTY_ENDPOINT, datas);
  }

  intlPassportSync(datas: Omit<intlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_ENDPOINT, datas);
  }

  intlPassportWithFace(datas: intlPassPortParams) {
    return this.post(VERIFY_INTL_PASSPORT_WITH_FACE_ENDPOINT, datas);
  }

  intlPassportWithImg(datas: Pick<intlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_WITH_IMAGE_ENDPOINT, datas);
  }

  //newly added but not tested

  intlPassportAsync(datas: Omit<intlPassPortParams, 'image'>) {
    return this.post(VERIFY_INTL_PASSPORT_ASYNC_ENDPOINT, datas);
  }
  cacWithName(datas: Pick<cacParams, 'company_name'>) {
    return this.post(VERIFY_CAC_WITH_NAME_ENDPOINT, datas);
  }

  creditBureauMashup(
    datas: Pick<
      creditBureauParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_CREDIT_BUREAU_MASHUP_ENDPOINT, datas);
  }
}
