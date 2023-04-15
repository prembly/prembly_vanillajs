import { BaseSDK } from './apis/base-config';
import DataVerificationService from '@/src/apis/data-verification';
import { Config } from './types/config-types';
import { GlobalVerificationService } from './apis/global';
import { DocumentVerificationService } from './apis/document-verification';
import { BiometricVerificationService } from './apis/biometric/face-recognition';
import { RadarVerificationService } from './apis/radar';

class PremblyVerificationService extends BaseSDK {
  public globalService: GlobalVerificationService;
  public documentService: DocumentVerificationService;
  public biometricService: BiometricVerificationService;
  protected config: Config;

  constructor(config: Config) {
    super(config);
    this.config = config;
    this.globalService = new GlobalVerificationService(config);
    this.documentService = new DocumentVerificationService(config);
    this.biometricService = new BiometricVerificationService(config);
  }
}

export { DataVerificationService, RadarVerificationService };

export default PremblyVerificationService;
