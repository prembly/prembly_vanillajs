import PremblyVerificationService, { DataVerificationService } from '..';
import {
  NIN_BASE_64_TEST_IMAGE,
  VERIFY_DOC_IMG_64_TST_IMG,
} from '../utils/consts';

describe('Errors are handled', () => {
  const config = {
    apiKey: 'test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY',
    appId: 'test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY',
    env: 'test',
  };
  const verifyServices = new DataVerificationService(config);
  const premblyClient = new PremblyVerificationService(config);
  const successCode = 200;
  const badRequestCode = 400;
  describe('Prembly SDK Test', () => {
    it('throws a bad request error when bad input is inserted', async () => {
      try {
        await verifyServices.ngService.bankAcctAdvance({
          bank_code: 676,
          number: 88888888,
        });
      } catch (err) {
        expect(err).toHaveProperty(
          'message',
          'An AxiosError occurred: Bad Request'
        );
        expect(err).toHaveProperty('code', badRequestCode);
      }
    });
  });

  describe('Verifying all Nigeria banks and bvn APIs are working', () => {
    it('get all Nigeria bank codes', async () => {
      const res = await verifyServices.ngService.bankCodes();

      expect(res.data).toBeDefined();
      expect(Array.isArray(res.data.data)).toBe(true); // eslint-disable-line @typescript-eslint/no-unsafe-member-access
    });
    it('verify Nigeria bank account with full details', async () => {
      const res = await verifyServices.ngService.bankAcctAdvance({
        number: 4444444444,
        bank_code: 214,
      });
      expect(res).toHaveProperty('status', successCode);
    });

    it('verify Nigeria bvn', async () => {
      const res = await verifyServices.ngService.bvn({ number: 54651333604 });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('bvn_data');
    });

    it('verify Nigeria bvn with full details', async () => {
      const res = await verifyServices.ngService.bvnAdvance({
        number: 54651333604,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('bvn_data');
    });
    it('verify Nigeria bvn with face image', async () => {
      const res = await verifyServices.ngService.bvnWithFace({
        number: 54651333604,
        image:
          'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('bvn_data');
    });
  });

  describe('Verify all Nigeria government issued documents APIs are working ', () => {
    it('verify Nigeria CaC', async () => {
      const res = await verifyServices.ngService.cac({
        company_type: 'RC',
        rc_number: '092932',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria CaC with full details', async () => {
      const res = await verifyServices.ngService.cacAdvance({
        company_name: 'TEST COMPANY',
        rc_number: '092932',
        company_type: 'RC',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria credit bureau', async () => {
      const res = await verifyServices.ngService.creditBureau({
        phone_number: '08080808080',
        first_name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria credit bureau consumer basic is working', async () => {
      const res = await verifyServices.ngService.creditBureauConsumerBasic({
        mode: 'ID',
        customer_name: 'Test Name',
        number: 11111111111,
        dob: '1990-08-01',
        customer_reference: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria credit bureau consumer advance is working', async () => {
      const res = await verifyServices.ngService.creditBureauConsumerAdvance({
        mode: 'ID',
        customer_name: 'Test Name',
        number: '22222222222',
        dob: '1990-08-01',
        customer_reference: 'test',
      });

      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria credit bureau business basic is working', async () => {
      const res = await verifyServices.ngService.creditBureauComBasic({
        customer_name: 'Test Name',
        customer_reference: 'test',
        rc_number: 59002,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria credit bureau business advance is working', async () => {
      const res = await verifyServices.ngService.creditBureauComAdvance({
        customer_name: 'Test Name',
        rc_number: 59001,
        customer_reference: 'test',
      });

      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria drivers license', async () => {
      const res = await verifyServices.ngService.driversLicense({
        number: 'AAD23208212298',
        dob: '1999-12-21',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria basic drivers license', async () => {
      const res = await verifyServices.ngService.basicDriversLicense({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        first_name: 'test',
        last_name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria full drivers license', async () => {
      const res = await verifyServices.ngService.driversLicenseAdvance({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        first_name: 'test',
        last_name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria drivers license image', async () => {
      const res = await verifyServices.ngService.driversLicenseImage({
        image: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEB==',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria drivers license face_id', async () => {
      const res = await verifyServices.ngService.driversLicenseFaceID({
        number: 'AAD23208212298',
        dob: '1999-12-21',
        image:
          'https://res.cloudinary.com/dh3i1wodq/image/upload/v1675417496/cbimage_3_drqdoc.jpg',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with image', async () => {
      const res = await verifyServices.ngService.ninWithImage({
        image:
          'https://asset.cloudinary.com/dh3i1wodq/089761016db6dab086ca450bf2465898',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with base 64 image', async () => {
      const res = await verifyServices.ngService.ninWithImage({
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with face', async () => {
      const res = await verifyServices.ngService.ninWithFace({
        number: 12345678909,
        image:
          'https://res.cloudinary.com/dh3i1wodq/image/upload/v1675417496/cbimage_3_drqdoc.jpg',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with virtual nin', async () => {
      const res = await verifyServices.ngService.nin({
        number: 'AA1234567890123B',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria nin with raw nin', async () => {
      const res = await verifyServices.ngService.nin({
        number_nin: 12345678909,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria phone number with basic details', async () => {
      const res = await verifyServices.ngService.phoneNo({
        number: '08082838283',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria phone number with full details', async () => {
      const res = await verifyServices.ngService.phoneNoAdvance({
        number: '08082838283',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria TIN', async () => {
      const res = await verifyServices.ngService.tin({
        number: '08082838487',
        channel: 'Phone',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria vehicle with plate no', async () => {
      const res = await verifyServices.ngService.vehiclePlateNo({
        vehicle_number: 'AAA000000',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria voters card is working', async () => {
      const res = await verifyServices.ngService.votersCard({
        number: '987f545AJ67890',
        last_name: 'test',
        first_name: 'test',
        lga: 'Ikeja',
        dob: '2000-01-18',
        state: 'Lagos',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria voters card is working with image only but return with 01 for unverified data', async () => {
      const res = await verifyServices.ngService.votersCardWithImg({
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', successCode);
    });
    it('verify Nigeria stamp duty is working', async () => {
      const res = await verifyServices.ngService.stampDuty({
        number: '2022-0000-1111-2222',
        customer_name: 'Test Account',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Nigeria International passport Sync is working', async () => {
      const res = await verifyServices.ngService.intlPassportSync({
        number: 'A00400000',
        last_name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria International passport with face is working', async () => {
      const res = await verifyServices.ngService.intlPassportWithFace({
        number: 'A00400000',
        last_name: 'test',
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify Nigeria International passport with image is working', async () => {
      const res = await verifyServices.ngService.intlPassportWithImg({
        image: NIN_BASE_64_TEST_IMAGE,
      });
      expect(res).toHaveProperty('status', successCode);
    });
  });

  describe('Verifying All Ghana APIs are working', () => {
    it('verify Ghana International Passport', async () => {
      const res = await verifyServices.ghService.intlPassport({
        number: 'G0000575',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
    it('verify Ghana Voters Card failed for unverified data', async () => {
      const res = await verifyServices.ghService.votersCard({
        number: 9001332866,
        type: 'OLD',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '01');
    });
  });

  describe('Verifying All South Africa APIs are working', () => {
    it('verify South Africa National Identity is working', async () => {
      const res = await verifyServices.saService.nationalIdentity({
        nationalid: '0123474827482',
        dob: '1985-01-20',
        firstname: 'Khayone',
        lastname: 'Lethabo',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
  });

  describe('Verifying Biometric APIs are working', () => {
    it('verify face liveliness is working', async () => {
      const res =
        await premblyClient.biometricService.checkUserLivenessWithFace({
          image:
            'https://res.cloudinary.com/dh3i1wodq/image/upload/v1677955197/face_image_tkmmwz.jpg',
        });
      expect(res).toHaveProperty('status', successCode);
    });
    it('verify user with face id is working', async () => {
      const res = await premblyClient.biometricService.userWithFaceID({
        image: 'https://asset.cloudinary.com/dh3i1wodq/a52b7d',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
  });
  describe('Verifying Documents API are working', () => {
    it('verify a document image API is working', async () => {
      const res = await premblyClient.documentService.docImage({
        doc_country: 'GBR',
        doc_image: VERIFY_DOC_IMG_64_TST_IMG,
        doc_type: 'PP',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
  });
  describe('Verifying Global API are working', () => {
    it('verify a company information globally is working', async () => {
      const res = await premblyClient.globalService.compInfo({
        company_number: 1000010,
        country_code: 'ng',
        customer_name: 'test',
        customer_reference: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('search for a company is working', async () => {
      const res = await premblyClient.globalService.searchBusiness({
        company_name: 'Test Company',
        country_code: 'ng',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify an email address is working', async () => {
      const res = await premblyClient.globalService.email({
        email: 'test@mail.com',
      });
      expect(res).toHaveProperty('status', successCode);
    });

    it('verify vin/car identification number is working', async () => {
      const res = await premblyClient.globalService.vinCarChasis({
        vin: 'AAA00000000',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });

    it('verify interpol ban list is working', async () => {
      const res = await premblyClient.globalService.interpolBanList({
        search_mode: 'NAME',
        name: 'test',
      });
      expect(res).toHaveProperty('status', successCode);
      expect(res.data).toHaveProperty('response_code', '00');
    });
  });
});
