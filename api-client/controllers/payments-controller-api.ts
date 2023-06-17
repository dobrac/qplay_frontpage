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
import { ResultResponse } from '../models';
// @ts-ignore
import { VIPCode } from '../models';
// @ts-ignore
import { VIPCodeActivateRequest } from '../models';
// @ts-ignore
import { VIPCodeGenerateRequest } from '../models';
/**
 * PaymentsControllerApi - axios parameter creator
 * @export
 */
export const PaymentsControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} uuid 
         * @param {VIPCodeActivateRequest} vIPCodeActivateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        activateVIPCode: async (uuid: string, vIPCodeActivateRequest: VIPCodeActivateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            assertParamExists('activateVIPCode', 'uuid', uuid)
            // verify required parameter 'vIPCodeActivateRequest' is not null or undefined
            assertParamExists('activateVIPCode', 'vIPCodeActivateRequest', vIPCodeActivateRequest)
            const localVarPath = `/payments/vipcode/{uuid}/activate`
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(vIPCodeActivateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {VIPCodeGenerateRequest} vIPCodeGenerateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateVIPCode: async (vIPCodeGenerateRequest: VIPCodeGenerateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'vIPCodeGenerateRequest' is not null or undefined
            assertParamExists('generateVIPCode', 'vIPCodeGenerateRequest', vIPCodeGenerateRequest)
            const localVarPath = `/payments/vipcode`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(vIPCodeGenerateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaymentsControllerApi - functional programming interface
 * @export
 */
export const PaymentsControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaymentsControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} uuid 
         * @param {VIPCodeActivateRequest} vIPCodeActivateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async activateVIPCode(uuid: string, vIPCodeActivateRequest: VIPCodeActivateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.activateVIPCode(uuid, vIPCodeActivateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {VIPCodeGenerateRequest} vIPCodeGenerateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateVIPCode(vIPCodeGenerateRequest: VIPCodeGenerateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VIPCode>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateVIPCode(vIPCodeGenerateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PaymentsControllerApi - factory interface
 * @export
 */
export const PaymentsControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaymentsControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} uuid 
         * @param {VIPCodeActivateRequest} vIPCodeActivateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        activateVIPCode(uuid: string, vIPCodeActivateRequest: VIPCodeActivateRequest, options?: any): AxiosPromise<ResultResponse> {
            return localVarFp.activateVIPCode(uuid, vIPCodeActivateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {VIPCodeGenerateRequest} vIPCodeGenerateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateVIPCode(vIPCodeGenerateRequest: VIPCodeGenerateRequest, options?: any): AxiosPromise<VIPCode> {
            return localVarFp.generateVIPCode(vIPCodeGenerateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaymentsControllerApi - object-oriented interface
 * @export
 * @class PaymentsControllerApi
 * @extends {BaseAPI}
 */
export class PaymentsControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} uuid 
     * @param {VIPCodeActivateRequest} vIPCodeActivateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentsControllerApi
     */
    public activateVIPCode(uuid: string, vIPCodeActivateRequest: VIPCodeActivateRequest, options?: AxiosRequestConfig) {
        return PaymentsControllerApiFp(this.configuration).activateVIPCode(uuid, vIPCodeActivateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {VIPCodeGenerateRequest} vIPCodeGenerateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentsControllerApi
     */
    public generateVIPCode(vIPCodeGenerateRequest: VIPCodeGenerateRequest, options?: AxiosRequestConfig) {
        return PaymentsControllerApiFp(this.configuration).generateVIPCode(vIPCodeGenerateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
