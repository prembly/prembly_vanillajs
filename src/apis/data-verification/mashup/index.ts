import { BaseSDK } from '../../base-config';
import { mashupParams } from '@/src/types';
import {
  VERIFY_MASHUP_BVN_CREDIT_BUREAU_ENDPOINT,
  VERIFY_MASHUP_BVN_NIN_PHONE_ENDPOINT,
  VERIFY_MASHUP_BVN_OR_PHONE_ENDPOINT,
} from '@/src/utils/consts';

export class MashupVerificationService extends BaseSDK {
  //newly added but not tested

  bvnWithCreditBureauMashup(datas: Pick<mashupParams, 'number'>) {
    return this.post(VERIFY_MASHUP_BVN_CREDIT_BUREAU_ENDPOINT, datas);
  }

  bvnOrPhoneMashup(datas: mashupParams) {
    return this.post(VERIFY_MASHUP_BVN_OR_PHONE_ENDPOINT, datas);
  }

  bvnOrPhoneOrNinMashup(datas: Pick<mashupParams, 'number'>) {
    return this.post(VERIFY_MASHUP_BVN_NIN_PHONE_ENDPOINT, datas);
  }
}
