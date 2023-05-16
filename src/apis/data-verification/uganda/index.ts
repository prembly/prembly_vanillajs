import { BaseSDK } from '../../base-config';
import { ugBusParams } from '@/src/types';
import { VERIFY_BUSINESS_UGANDA_ENDPOINT } from '@/src/utils/consts';

export class UgandaVerificationService extends BaseSDK {
  //These API are not tested yet
  business(datas: ugBusParams) {
    return this.post(VERIFY_BUSINESS_UGANDA_ENDPOINT, datas);
  }
}
