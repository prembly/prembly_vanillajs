import { Config } from '@/src/types/config-types';
import { BaseSDK } from '../base-config';
import { NgVerificationService } from './nigeria';
import { GhanaVerificationService } from './ghana';
import { KenyaVerificationService } from './kenya';
import { SierraLeoneVerificationService } from './sierra-leone';
import { RwandaVerificationService } from './rwanda';
import { SouthAfricaVerificationService } from './south-africa';
import { UgandaVerificationService } from './uganda';
import { MashupVerificationService } from './mashup';

export default class DataVerificationService extends BaseSDK {
  public ngService: NgVerificationService;
  public ghService: GhanaVerificationService;
  public kyService: KenyaVerificationService;
  public rwServices: RwandaVerificationService;
  public slService: SierraLeoneVerificationService;
  public saService: SouthAfricaVerificationService;
  public ugService: UgandaVerificationService;
  public mashupService: MashupVerificationService;

  protected config: Config;

  constructor(config: Config) {
    super(config);
    this.config = config;
    this.ngService = new NgVerificationService(config);
    this.ghService = new GhanaVerificationService(config);
    this.kyService = new KenyaVerificationService(config);
    this.rwServices = new RwandaVerificationService(config);
    this.slService = new SierraLeoneVerificationService(config);
    this.saService = new SouthAfricaVerificationService(config);
    this.ugService = new UgandaVerificationService(config);
    this.mashupService = new MashupVerificationService(config);
  }
}
