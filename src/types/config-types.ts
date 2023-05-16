import { AxiosRequestConfig } from 'axios';

export type Config = Partial<{
  apiKey: string;
  appId: string;
  appToken: string;
  baseUrl: string;
  env: string;
}> &
  Required<{ apiKey: string } | { appId: string } | { appToken: string }>;

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig;
}
