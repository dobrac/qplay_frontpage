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
import { LoginRequest } from '../models';
// @ts-ignore
import { LoginResult } from '../models';
/**
 * PublicTokenControllerApi - axios parameter creator
 * @export
 */
export const PublicTokenControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (loginRequest: LoginRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequest' is not null or undefined
            assertParamExists('login', 'loginRequest', loginRequest)
            const localVarPath = `/public/token/login`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        secureAccount: async (loginRequest: LoginRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequest' is not null or undefined
            assertParamExists('secureAccount', 'loginRequest', loginRequest)
            const localVarPath = `/public/token/login/secure`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PublicTokenControllerApi - functional programming interface
 * @export
 */
export const PublicTokenControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PublicTokenControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(loginRequest: LoginRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(loginRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secureAccount(loginRequest: LoginRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.secureAccount(loginRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PublicTokenControllerApi - factory interface
 * @export
 */
export const PublicTokenControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PublicTokenControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(loginRequest: LoginRequest, options?: any): AxiosPromise<LoginResult> {
            return localVarFp.login(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        secureAccount(loginRequest: LoginRequest, options?: any): AxiosPromise<string> {
            return localVarFp.secureAccount(loginRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PublicTokenControllerApi - object-oriented interface
 * @export
 * @class PublicTokenControllerApi
 * @extends {BaseAPI}
 */
export class PublicTokenControllerApi extends BaseAPI {
    /**
     * 
     * @param {LoginRequest} loginRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicTokenControllerApi
     */
    public login(loginRequest: LoginRequest, options?: AxiosRequestConfig) {
        return PublicTokenControllerApiFp(this.configuration).login(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {LoginRequest} loginRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicTokenControllerApi
     */
    public secureAccount(loginRequest: LoginRequest, options?: AxiosRequestConfig) {
        return PublicTokenControllerApiFp(this.configuration).secureAccount(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
