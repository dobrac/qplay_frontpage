/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PasswordChangeRequest } from '../models';
// @ts-ignore
import { PasswordResetRequest } from '../models';
// @ts-ignore
import { RegisterRequest } from '../models';
// @ts-ignore
import { RegisterVerifyRequest } from '../models';
// @ts-ignore
import { ResultResponse } from '../models';
// @ts-ignore
import { ResultResponseDataString } from '../models';
/**
 * PublicUserControllerApi - axios parameter creator
 * @export
 */
export const PublicUserControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} sessionUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNameFromSessionUuid: async (sessionUuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sessionUuid' is not null or undefined
            assertParamExists('getNameFromSessionUuid', 'sessionUuid', sessionUuid)
            const localVarPath = `/public/user/validation/secure/{sessionUuid}`
                .replace(`{${"sessionUuid"}}`, encodeURIComponent(String(sessionUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PasswordChangeRequest} passwordChangeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passwordChangeComplete: async (passwordChangeRequest: PasswordChangeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'passwordChangeRequest' is not null or undefined
            assertParamExists('passwordChangeComplete', 'passwordChangeRequest', passwordChangeRequest)
            const localVarPath = `/public/user/password/change`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(passwordChangeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PasswordResetRequest} passwordResetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passwordChangeRequest: async (passwordResetRequest: PasswordResetRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'passwordResetRequest' is not null or undefined
            assertParamExists('passwordChangeRequest', 'passwordResetRequest', passwordResetRequest)
            const localVarPath = `/public/user/password/request`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(passwordResetRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterVerifyRequest} registerVerifyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerComplete: async (registerVerifyRequest: RegisterVerifyRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerVerifyRequest' is not null or undefined
            assertParamExists('registerComplete', 'registerVerifyRequest', registerVerifyRequest)
            const localVarPath = `/public/user/register/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerVerifyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerRequest: async (registerRequest: RegisterRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerRequest' is not null or undefined
            assertParamExists('registerRequest', 'registerRequest', registerRequest)
            const localVarPath = `/public/user/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerResend: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('registerResend', 'uuid', uuid)
            const localVarPath = `/public/user/register/{uuid}/resend`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} premiumUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyPremiumUuid: async (premiumUuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'premiumUuid' is not null or undefined
            assertParamExists('verifyPremiumUuid', 'premiumUuid', premiumUuid)
            const localVarPath = `/public/user/validation/premium/{premiumUuid}`
                .replace(`{${"premiumUuid"}}`, encodeURIComponent(String(premiumUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PublicUserControllerApi - functional programming interface
 * @export
 */
export const PublicUserControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PublicUserControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} sessionUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNameFromSessionUuid(sessionUuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNameFromSessionUuid(sessionUuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PasswordChangeRequest} passwordChangeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async passwordChangeComplete(passwordChangeRequest: PasswordChangeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.passwordChangeComplete(passwordChangeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PasswordResetRequest} passwordResetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async passwordChangeRequest(passwordResetRequest: PasswordResetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.passwordChangeRequest(passwordResetRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {RegisterVerifyRequest} registerVerifyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerComplete(registerVerifyRequest: RegisterVerifyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerComplete(registerVerifyRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerRequest(registerRequest: RegisterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultResponseDataString>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerRequest(registerRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerResend(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerResend(uuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} premiumUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyPremiumUuid(premiumUuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyPremiumUuid(premiumUuid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PublicUserControllerApi - factory interface
 * @export
 */
export const PublicUserControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PublicUserControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} sessionUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNameFromSessionUuid(sessionUuid: string, options?: any): AxiosPromise<string> {
            return localVarFp.getNameFromSessionUuid(sessionUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PasswordChangeRequest} passwordChangeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passwordChangeComplete(passwordChangeRequest: PasswordChangeRequest, options?: any): AxiosPromise<ResultResponse> {
            return localVarFp.passwordChangeComplete(passwordChangeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PasswordResetRequest} passwordResetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passwordChangeRequest(passwordResetRequest: PasswordResetRequest, options?: any): AxiosPromise<ResultResponse> {
            return localVarFp.passwordChangeRequest(passwordResetRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RegisterVerifyRequest} registerVerifyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerComplete(registerVerifyRequest: RegisterVerifyRequest, options?: any): AxiosPromise<ResultResponse> {
            return localVarFp.registerComplete(registerVerifyRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerRequest(registerRequest: RegisterRequest, options?: any): AxiosPromise<ResultResponseDataString> {
            return localVarFp.registerRequest(registerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerResend(uuid: string, options?: any): AxiosPromise<ResultResponse> {
            return localVarFp.registerResend(uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} premiumUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyPremiumUuid(premiumUuid: string, options?: any): AxiosPromise<string> {
            return localVarFp.verifyPremiumUuid(premiumUuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PublicUserControllerApi - object-oriented interface
 * @export
 * @class PublicUserControllerApi
 * @extends {BaseAPI}
 */
export class PublicUserControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} sessionUuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicUserControllerApi
     */
    public getNameFromSessionUuid(sessionUuid: string, options?: AxiosRequestConfig) {
        return PublicUserControllerApiFp(this.configuration).getNameFromSessionUuid(sessionUuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PasswordChangeRequest} passwordChangeRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicUserControllerApi
     */
    public passwordChangeComplete(passwordChangeRequest: PasswordChangeRequest, options?: AxiosRequestConfig) {
        return PublicUserControllerApiFp(this.configuration).passwordChangeComplete(passwordChangeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PasswordResetRequest} passwordResetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicUserControllerApi
     */
    public passwordChangeRequest(passwordResetRequest: PasswordResetRequest, options?: AxiosRequestConfig) {
        return PublicUserControllerApiFp(this.configuration).passwordChangeRequest(passwordResetRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {RegisterVerifyRequest} registerVerifyRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicUserControllerApi
     */
    public registerComplete(registerVerifyRequest: RegisterVerifyRequest, options?: AxiosRequestConfig) {
        return PublicUserControllerApiFp(this.configuration).registerComplete(registerVerifyRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {RegisterRequest} registerRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicUserControllerApi
     */
    public registerRequest(registerRequest: RegisterRequest, options?: AxiosRequestConfig) {
        return PublicUserControllerApiFp(this.configuration).registerRequest(registerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicUserControllerApi
     */
    public registerResend(uuid: string, options?: AxiosRequestConfig) {
        return PublicUserControllerApiFp(this.configuration).registerResend(uuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} premiumUuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicUserControllerApi
     */
    public verifyPremiumUuid(premiumUuid: string, options?: AxiosRequestConfig) {
        return PublicUserControllerApiFp(this.configuration).verifyPremiumUuid(premiumUuid, options).then((request) => request(this.axios, this.basePath));
    }
}
