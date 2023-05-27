import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import useSWR, { SWRConfiguration } from 'swr'

const baseURL = process.env.API_URL
const axiosInstance = axios.create({ baseURL })

const fetcher = <T = unknown, D = unknown>(config: AxiosRequestConfig): Promise<T> =>
  axiosInstance
    .request<T, AxiosResponse<T>, D>({
      ...config,
      params: {
        ...config.params,
        serviceKey: process.env.API_KEY,
      },
    })
    .then(({ data }) => data)

export const useSwr = <T = unknown, D = unknown>(path: string, params: D, swrOptions?: SWRConfiguration) => {
  return useSWR(path, (url) => fetcher({ url, params }), swrOptions)
}
