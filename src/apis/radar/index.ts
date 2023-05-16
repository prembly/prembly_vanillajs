import { radarParams } from '@/src/types';
import { BaseSDK } from '../base-config';

export class RadarVerificationService extends BaseSDK {
  radar(data: radarParams) {
    return this.radarPost(data);
  }
}
