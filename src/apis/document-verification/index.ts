import { documentParams } from '@/src/types';
import { VERIFY_DOCUMENT_IMAGE_ENDPOINT } from '@/src/utils/consts';
import { BaseSDK } from '../base-config';

export class DocumentVerificationService extends BaseSDK {
  docImage(data: documentParams) {
    return this.post(VERIFY_DOCUMENT_IMAGE_ENDPOINT, data);
  }
}
