import axiosLib, {AxiosError} from "axios";

let basePathLocal = process.env.NEXT_PUBLIC_API_URL;
if (basePathLocal?.endsWith("/")) {
  basePathLocal = basePathLocal.replace(/\/$/, ""); // Remove trailing slash (/)
}
export const basePath = basePathLocal;

export const axios = axiosLib.create({
  baseURL: basePath,
  timeout: 60000,
});

export function isAxiosError(payload: any): payload is AxiosError {
  return axiosLib.isAxiosError(payload);
}
