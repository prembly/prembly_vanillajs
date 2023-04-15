import { biometricFaceParams, faceComparisonParams } from '@/src/types';
import {
  VERIFY_BIOMETRIC_FACE_AGE_AND_GENDER_ENDPOINT,
  VERIFY_BIOMETRIC_FACE_AUTHENTICATION_ENDPOINT,
  VERIFY_BIOMETRIC_FACE_COMPARISON_ENDPOINT,
  VERIFY_BIOMETRIC_FACE_ENROLLMENT_ENDPOINT,
  VERIFY_BIOMETRIC_FACE_LIVELINESS_ENDPOINT,
  VERIFY_BIOMETRIC_ID_FACE_MATCHING_ENDPOINT,
} from '@/src/utils/consts';
import { BaseSDK } from '../../base-config';

export class BiometricVerificationService extends BaseSDK {
  getUserAgeandGender(data: Required<Pick<biometricFaceParams, 'image'>>) {
    return this.post(VERIFY_BIOMETRIC_FACE_AGE_AND_GENDER_ENDPOINT, data);
  }

  compareUserFace(
    data: Required<
      | Pick<faceComparisonParams, 'image_one'>
      | Pick<faceComparisonParams, 'image_two'>
    >
  ) {
    return this.post(VERIFY_BIOMETRIC_FACE_COMPARISON_ENDPOINT, data);
  }

  enrollUsersWithFace(
    data: Required<
      Pick<biometricFaceParams, 'face_image' | 'first_name' | 'last_name'>
    >
  ) {
    return this.post(VERIFY_BIOMETRIC_FACE_ENROLLMENT_ENDPOINT, data);
  }

  checkUserLivenessWithFace(
    data: Required<Pick<biometricFaceParams, 'image'>>
  ) {
    return this.post(VERIFY_BIOMETRIC_FACE_LIVELINESS_ENDPOINT, data);
  }

  authenticateUserWithFace(data: Required<Pick<biometricFaceParams, 'image'>>) {
    return this.post(VERIFY_BIOMETRIC_FACE_AUTHENTICATION_ENDPOINT, data);
  }

  userWithFaceID(data: Required<Pick<biometricFaceParams, 'image'>>) {
    return this.post(VERIFY_BIOMETRIC_ID_FACE_MATCHING_ENDPOINT, data);
  }
}
