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


import { UnbanRequestDTO } from './unban-request-dto';

/**
 * 
 * @export
 * @interface ResponsePageUnbanRequestDTO
 */
export interface ResponsePageUnbanRequestDTO {
    /**
     * 
     * @type {number}
     * @memberof ResponsePageUnbanRequestDTO
     */
    'totalPages': number;
    /**
     * 
     * @type {number}
     * @memberof ResponsePageUnbanRequestDTO
     */
    'totalElements': number;
    /**
     * 
     * @type {Array<UnbanRequestDTO>}
     * @memberof ResponsePageUnbanRequestDTO
     */
    'content': Array<UnbanRequestDTO>;
}

