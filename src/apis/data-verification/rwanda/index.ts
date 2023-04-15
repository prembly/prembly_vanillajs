import { indexSignatureBaseParams } from '@/src/types';
import {
  VERIFY_NID_RWANDA_ENDPOINT,
  VERIFY_PASSPORT_RWANDA_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';

export class RwandaVerificationService extends BaseSDK {
  //These APi are not tested yet
  nid(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_NID_RWANDA_ENDPOINT, datas);
  }

  passport(datas: Pick<indexSignatureBaseParams, 'number'>) {
    return this.post(VERIFY_PASSPORT_RWANDA_ENDPOINT, datas);
  }
}
