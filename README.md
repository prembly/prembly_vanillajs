# Prembly Identitypass JavaScript SDK

The Prembly Identitypass SDK is a library that allows you to easily integrate verification services into your nodeJS app. The SDK is based on the Prembly Identitypass API, which provides a range of verification services, including data verification, identity verification, document verification, biometric verification, radar verification and other verification services.

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

### Other verification services

Each verification service can be accessed by their acronym as follow:

| Sn  | Name      | Acronym          |
| --- | --------- | ---------------- |
| 1   | Biometric | biometricService |
| 2   | Document  | documentService  |
| 3   | Global    | globalService    |
