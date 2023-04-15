import { kyNationalIdentityParams, saBusParams } from '@/src/types';
import {
  VERIFY_BUSINESS_SOUTH_AFRICA_ENDPOINT,
  VERIFY_NATIONAL_IDENTITY_SOUTH_AFRICA_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';

export class SouthAfricaVerificationService extends BaseSDK {
  //These APi are not tested yet
  nationalIdentity(
    datas: Omit<
      kyNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_NATIONAL_IDENTITY_SOUTH_AFRICA_ENDPOINT, datas);
  }

  business(datas: saBusParams) {
    return this.post(VERIFY_BUSINESS_SOUTH_AFRICA_ENDPOINT, datas);
  }
}
