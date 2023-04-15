import { BaseSDK } from '../../base-config';

import {
  VERIFY_DRIVERS_LICENSE_GHANA_ENDPOINT,
  VERIFY_INTERNATIONAL_PASSPORT_GHANA_ENDPOINT,
  VERIFY_SSNIT_GHANA_ENDPOINT,
  VERIFY_VOTERS_CARD_GHANA_ENDPOINT,
} from '@/src/utils/consts';
import { ghVotersCardParams, indexSignatureBaseParams } from '@/src/types';

export class GhanaVerificationService extends BaseSDK {
  intlPassport(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_INTERNATIONAL_PASSPORT_GHANA_ENDPOINT, datas);
  }

  //These APis are not tested yet

  votersCard(datas: ghVotersCardParams) {
    return this.post(VERIFY_VOTERS_CARD_GHANA_ENDPOINT, datas);
  }

  driversLicense(datas: Pick<indexSignatureBaseParams, 'dob' | 'number'>) {
    return this.post(VERIFY_DRIVERS_LICENSE_GHANA_ENDPOINT, datas);
  }

  ssnit(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_SSNIT_GHANA_ENDPOINT, datas);
  }
}
