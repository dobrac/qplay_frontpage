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


import { CrateLog } from './crate-log';

/**
 * 
 * @export
 * @interface ResponsePageCrateLog
 */
export interface ResponsePageCrateLog {
    /**
     * 
     * @type {number}
     * @memberof ResponsePageCrateLog
     */
    'totalPages': number;
    /**
     * 
     * @type {number}
     * @memberof ResponsePageCrateLog
     */
    'totalElements': number;
    /**
     * 
     * @type {Array<CrateLog>}
     * @memberof ResponsePageCrateLog
     */
    'content': Array<CrateLog>;
}

