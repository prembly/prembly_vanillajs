import { BaseSDK } from '../../base-config';
import { kyNationalIdentityParams } from '@/src/types';
import {
  VERIFY_DRIVERS_LICENSE_KENYA_ENDPOINT,
  VERIFY_NATIONAL_IDENTITY_KENYA_ENDPOINT,
  VERIFY_NATIONAL_IDENTITY_NUMBER_KENYA_ENDPOINT,
  VERIFY_PASSPORT_KENYA_ENDPOINT,
  VERIFY_SERIAL_NUMBER_KENYA_ENDPOINT,
} from '@/src/utils/consts';

export class KenyaVerificationService extends BaseSDK {
  //These APi are not tested yet
  nationalIdentity(
    datas: Omit<
      kyNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_NATIONAL_IDENTITY_KENYA_ENDPOINT, datas);
  }

  nin(
    datas: Pick<
      kyNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_NATIONAL_IDENTITY_NUMBER_KENYA_ENDPOINT, datas);
  }

  passport(
    datas: Pick<
      kyNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_PASSPORT_KENYA_ENDPOINT, datas);
  }

  serialNo(
    datas: Pick<
      kyNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_SERIAL_NUMBER_KENYA_ENDPOINT, datas);
  }

  driversLicense(
    datas: Pick<
      kyNationalIdentityParams,
      'number' | 'customer_name' | 'customer_reference'
    >
  ) {
    return this.post(VERIFY_DRIVERS_LICENSE_KENYA_ENDPOINT, datas);
  }
}
