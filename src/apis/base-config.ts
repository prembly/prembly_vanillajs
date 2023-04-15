import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { indexSignatureBaseParams } from '../types';
import { Config } from '../types/config-types';
import { processApi, sanitizeInputFields } from '../utils';
import {
  PREMBLY_SDK_BASEURL,
  PREMBLY_SDK_RADAR_ENDPOINT,
  PREMBLY_SDK_TEST_BASE_URL,
} from '../utils/consts';

const envUrl = {
  test: PREMBLY_SDK_TEST_BASE_URL,
  live: PREMBLY_SDK_BASEURL,
};

/**
 * Base class for SDKs
 */
export abstract class BaseSDK {
  /**
   * The AxiosInstance used to make API requests
   */
  protected apiClient: AxiosInstance;

  /**
   * The AxiosInstance used to make API requests
   */
  protected radarApiClient: AxiosInstance;

  /**
   * The API key used to authenticate API requests
   */
  protected apiKey: string;

  /**
   * The App ID used to authenticate API requests
   */
  protected appId: string;

  /**
   * The App Token used to authenticate API requests
   */
  protected appToken: string;

  /**
   * Constructor for BaseSDK
   * @param {Object} config - The configuration options for the SDK
   * @param {string} config.apiKey - The API key used to authenticate API requests
   * @param {string} config.appId - The App ID used to authenticate API requests
   * @param {"test" | "live"} config.env - The environment to use for API requests ("test" or "live")
   * @param {string} config.appToken - The App Token to use for authenticating API requests
   */

  constructor(config: Config) {
    this.apiKey = config.apiKey as string;
    this.appId = config.appId as string;
    this.appToken = config.appToken as string;

    /**
     * The AxiosInstance used to make API requests
     * @type {AxiosInstance}
     */

    this.apiClient = axios.create({
      baseURL: config.env === 'live' ? envUrl[config.env] : envUrl['test'],
      headers: {
        'app-id': this.appId, // eslint-disable-line @typescript-eslint/naming-convention
        'x-api-key': this.apiKey, // eslint-disable-line @typescript-eslint/naming-convention
      },
    });

    this.radarApiClient = axios.create({
      headers: {
        Authorization: this.appToken,
      },
    });
  }

  /**
   * Makes a POST request to the API
   * @param {string} endpoint - The API endpoint to request
   * @param {Object} data - The data to send with the request
   * @returns {Promise<T>} - The API response
   * @template T
   */

  protected post<T>(endpoint: string, data: T): Promise<AxiosResponse<T>> {
    const sanitizedData = sanitizeInputFields(data as indexSignatureBaseParams);
    return processApi<T>(() => this.apiClient.post(endpoint, sanitizedData));
  }

  protected radarPost<T>(data: T): Promise<AxiosResponse<T>> {
    const sanitizedData = sanitizeInputFields(data as indexSignatureBaseParams);
    return processApi<T>(() =>
      this.radarApiClient.post(PREMBLY_SDK_RADAR_ENDPOINT, sanitizedData)
    );
  }

  /**
   * Makes a GET request to the API
   * @param {string} endpoint - The API endpoint to request
   * @returns {Promise<T>} - The API response
   */
  protected get(endpoint: string): Promise<AxiosResponse> {
    return processApi(() => this.apiClient.get(endpoint));
  }
}
