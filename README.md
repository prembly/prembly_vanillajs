# Prembly_vanillajs Identitypass SDK

The Prembly Identitypass SDK is a library that allows you to easily integrate verification services into your app. The SDK is based on the Prembly Identitypass API, which provides a range of verification services, including data verification, identity verification, document verification, biometric verification, radar verification and other verification services.

## Features

The Prembly Identitypass SDK offers the following features:

- Data verification: verify the authenticity of datas from different countries and sources such as stamp duty, plate numbers, NIN, international passport, bvn, government-issued IDs, credit reports etc.

- Global business verification: get essential company information you are doing/want to have a business with by verifying their authenticity, as well as for marketing and sales purposes by searching using company name, customer details, email, or country code, adhering to ISO-3166-1 Alpha-2 standards, and biometric-based registration verification.

- Document verification: you can easily add document verification to your software applications by using document image verification method. It's a simple and efficient way to automate document verification across regions like Asia-Pacific (APAC), Europe, Middle East, and Africa (EMEA), North America (NA), and South America (SA).

- Biometrics: Enroll and authenticate your users by utilizing facial recognition method. This allows you to register and verify your users' identities using their unique facial features.

- Identity Radar: prevents fraud in digital businesses using quality data and our AI engine. Choose our Fraud Detection & Prevention solution for peace of mind.

- General: you can also use other verification services.

## Requirements

- node.js
- API credentials from <a href="https://docs.prembly.com/docs/getting-the-live-api-keys" target="_blank">Prembly Identitypass</a>

## Installation

To install the Prembly IdentityPass SDK, you can use npm, yarn and pnpm.

Using npm:

```ts
npm install prembly-identitypass-sdk
```

Using yarn:

```ts
yarn add prembly-identitypass-sdk
```

Using pnpm:

```ts
pnpm install prembly-identitypass-sdk
```

## Configuration

After installing the app, you can import the SDK to use as follow:

```ts
import PremblyVerificationService,{ DataVerificationService, RadarVerificationService } from 'prembly-identitypass-sdk';

const config = {
apiKey = 'your_prembly_app_api_key';
appId = 'your_prembly_app_id';
env = 'default is set to test'; //should be changed to live
}

//creating an instance
const premblyVerifier = new PremblyVerificationService(config);

//you can access all prembly verification service here with their method aside data-verification and radar which has its own instance.

premblyVerifier.scope.method.then((res) => console.log(res));


//for radar, its different you have to create an instance of its own as follow:

const config = {appToken: 'your_prembly_apptoken'}

const premblyRadarVerifier = new RadarVerificationService(config)

//to use it

premblyRadarVerifier.radar({your field}).then(res => console.log(res))
```

## Documentation

You can access all the verification services from the prembly instance aside from the data verification and radar service that has its own instance.

### Data Verification

Each country service can be accessed by their acronym as follow:

```ts
import { DataVerificationService } from 'prembly-identitypass-sdk';

//for data verification its different you have to create an instance of its own as follow:

const premblyDataVerifier = new DataVerificationService(config)

//after setting the config, you can access different country and their data verification service as shown:

premblyDataVerifier.countryService.method.then((res)=> console.log(res))

eg: verify bvn data method in Nigeria service

premblyDataVerifier.ngService.bvn({ number: XXXX XXXX XXXX XXXX }).then((res) => console.log(res))
```

| Sn  | Country      | Acronym       |
| --- | ------------ | ------------- |
| 1   | Nigeria      | ngService     |
| 2   | Ghana        | ghService     |
| 3   | Kenya        | kyService     |
| 4   | Rwanda       | rwService     |
| 5   | Sierra Leone | slService     |
| 6   | South Africa | saService     |
| 7   | Uganda       | ugService     |
| 8   | Mashup       | mashupService |

### Methods available in each country are:

#### Nigeria

Available methods are:

| SN  | METHOD NAME                 | DESCRIPTION && REQUIRED FIELD |                                                                                
| --- | ------------                | ----------------------------  |
| 1   | cac                         | _Verify a business using rc_number and company_type_                                                                                                                                                     |
| 2   | cacWithName                 | _Verify a business using company_name_                                                                                                                                                                   |
| 3   | cacAdvance                  | \_Verify a business using rc_number, company_name and company_type                                                                                                                                       |
| 4   | bvn                         | _Verify a Bank Verification Number using number (BVN)_                                                                                                                                                   |
| 5   | bvnAdvance                  | _Verify a Bank Verification Number using number (BVN) _                                                                                                                                                  |
| 6   | bvnWithFace                 | _Verify a Bank Verification Number (BVN) using image and number_                                                                                                                                         |
| 7   | phoneNo                     | _Verify a Phone Number using number (PHONE NUMBER)_                                                                                                                                                      |
| 8   | bankCodes                   | _Get all banks code_                                                                                                                                                                                     |
| 9   | bankAccount                 | _Verify bank account number using number(ACCT NO) and bank_code_                                                                                                                                         |
| 10  | bankAcctComparism           | _Verify bank account number and compare name with customer name using number(ACCT NO), bank_code, customer_name and customer_reference_                                                                  |
| 11  | bankAcctAdvance             | _Verify bank account number using number(ACCT NO) and bank_code _                                                                                                                                        |
| 12  | votersCard                  | _Verify voters card using number(VOTERS CARD NO), first_name, last_name, lga, dob, state_                                                                                                                |
| 13  | votersCardWithImage         | _Verify voters card ID image using image _                                                                                                                                                               |
| 14  | driversLicense              | _Verify drivers license using dob(DATE OF BIRTH) and number(FRSC NO)_                                                                                                                                    |
| 15  | basicDriversLicense         | _Verify drivers license using dob(DATE OF BIRTH), number(FRSC NO), first_name, and last_name :returns true or false_                                                                                     |
| 16  | driversLicenseAdvance       | _Verify drivers license using dob(DATE OF BIRTH), number(FRSC NO), first_name, and last_name returning full info_                                                                                        |
| 17  | driversLicenseImage         | _Verify drivers license ID image using image_                                                                                                                                                            |
| 18  | driversLicenseFaceID        | _Verify drivers license with face validation using dob(DATE OF BIRTH), number(FRSC NO), and image_                                                                                                       |
| 19  | intlPassportSync            | _Verify international passport using number(PASSPORT NO) and last_name_                                                                                                                                  |
| 20  | intlPassportWithImg         | _Verify international passport using image_                                                                                                                                                              |
| 21  | intlPassportWithFace        | _Verify international passport with face validation using number(PASSPORT NO), last_name, and image_                                                                                                     |
| 22  | intlPassportAsync           | _Verify international passport in an asynchronous manner using number(PASSPORT NO) and last_name_                                                                                                        |
| 23  | creditBureau                | _Get User Credit bureau statement using phone_number and first_name_                                                                                                                                     |
| 24  | creditBureauConsumerBasic   | _Get basic credit details of a user using number or dob, customer_reference, customer_name and select MODE (if mode is ID, then number will be bvn or if mode is BIO then dob else the number and dob)_  |
| 25  | creditBureauConsumerAdvance | _Get advance credit details of a user using number or dob, customer_reference, customer_name and select MODE (if mode is ID, then number will be bvn or if mode is BIO then dob else the number and dob_ |
| 26  | creditBureauComBasic        | _Get basic credit details of a business using rc_number, customer_reference, and customer_name)_                                                                                                         |
| 27  | creditBureauComAdvance      | _Get advance credit details of a business using rc_number, customer_reference, and customer_name_                                                                                                        |
| 28  | creditBureauMashup          | _Verify credit bureau statement of a user and returns data for two credit sources using customer_name, customer_reference and number(BVN)_                                                               |
| 29  | nin                         | _Verify a National Identification Number(NIN) Slip using number(VNIN) or number_nin(RAW NIN)_                                                                                                            |
| 30  | ninWithImage                | _Verify a National Identification Number(NIN) Slip using image_                                                                                                                                          |
| 31  | ninWithFace                 | _Verify a National Identification Number(NIN) with user's image using image and number(NIN)_                                                                                                             |
| 32  | stampDuty                   | _Verify a stamp duty reference number using number(STAMP DUTY NO), customer_name and customer_reference _                                                                                                |
| 33  | vehiclePlateNo              | _Verify a vehicle number plate using vehicle_number _                                                                                                                                                    |
| 34  | tin                         | \_Verify tax identification number using number(TIN                                                                                                                                                      | RC number | Phone number) select channel(TIN | CAC | Phone {defaults to TIN})\_ |

#### Ghana

Available methods are:

| SN  | METHOD NAME    | DESCRIPTION && REQUIRED FIELD|                                                                                               
| --- | -------------- | ---------------------------  |
| 1   | driversLicense | _Verify user drivers license using dob and number(LICENSE NO) _                                                                |
| 2   | ssnit          | _Verify Social Security and National Insurance Trust Number using number(SSNIT NO)_                                            |
| 3   | ssnitWithFace  | _Verify Social Security and National Insurance Trust Number With Face Validation using number(SSNIT NO) and image(face image)_ |
| 4   | votersCard     | \_Verify voters card using number(VOTER'S CARD NO) and type (MAIN                                                              | OLD)\_ |
| 5   | intlPassport   | _Verify user international passport using number(PASSPORT NO)_                                                                 |

#### Kenya

Available methods are:

| SN  | METHOD NAME      | DESCRIPTION && REQUIRED FIELD                                                                |
| --- | ---------------- | -------------------------------------------------------------------------------------------- |
| 1   | driversLicense   | _Verify user drivers license using number(LICENSE NO), customer_name and customer_reference_ |
| 2   | passport         | _Verify user passport using number(PASSPORT NO), customer_name and customer_reference_       |
| 3   | serialNo         | _Verify user serial number_                                                                  |
| 4   | nin              | _Verify user national identity number_                                                       |
| 5   | nationalIdentity | _Verify and authenticate foreign resident_                                                   |

#### Sierra Leone

Available methods are:

| SN  | METHOD NAME    | DESCRIPTION && REQUIRED FIELD |
| --- | -------------- | ----------------------------- |
| 1   | driversLicense | _Verify user drivers license_ |
| 2   | votersCard     | _Verify voters card_          |

#### South Africa

Available methods are:

| SN  | METHOD NAME      | DESCRIPTION && REQUIRED FIELD  |
| --- | ---------------- | ------------------------------ |
| 1   | nationalIdentity | _Verify user national id card_ |
| 2   | business         | _Verify a business_            |

#### Rwanda

Available methods are:

| SN  | METHOD NAME      | DESCRIPTION && REQUIRED FIELD                     |
| --- | ---------------- | ------------------------------------------------- |
| 1   | passport         | _Verify Rwandan passport_                         |
| 2   | nationalIdentity | _Verify national identity card issued to Rwandan_ |

#### Uganda

Available methods are:

| SN  | METHOD NAME | DESCRIPTION && REQUIRED FIELD |
| --- | ----------- | ----------------------------- |
| 1   | business    | _Verify a business_           |

### Other verification services

Each verification service can be accessed by their acronym as follow:

| Sn  | Name      | Acronym          |
| --- | --------- | ---------------- |
| 1   | Biometric | biometricService |
| 2   | Document  | documentService  |
| 3   | Global    | globalService    |

## Author: [Abdulafeez(PragmaticAweds)](https://github.com/pragmaticAweds)

Follow me on

- Github [@pragmaticAweds](https://github.com/pragmaticAweds)
- LinkedIn [@abdulafeez (pragmaticaweds) jimoh](https://www.linkedin.com/in/abdulafeez-pragmaticaweds-jimoh-a174ba1b3/)
- Twitter [@pragmatic_aweds](https://twitter.com/pragmatic_aweds)
