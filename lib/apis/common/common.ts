import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import useSWR, { SWRConfiguration } from 'swr'

const baseURL = process.env.API_URL
const axiosInstance = axios.create({ baseURL })

const fetcher = <D = unknown>(config: AxiosRequestConfig) =>
  axiosInstance
    .request<any, AxiosResponse<any>, D>({
      ...config,
      params: {
        serviceKey: process.env.API_KEY,
        ...config.params,
      },
    })
    .then(({ data }) => data)

export const useSwr = <T = unknown, D = unknown>(path: string | null, params: D, swrOptions?: SWRConfiguration) => {
  return useSWR(path, (url) => fetcher({ url, params }), swrOptions)
}
