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



/**
 * 
 * @export
 * @interface UpdateUnbanRequest
 */
export interface UpdateUnbanRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateUnbanRequest
     */
    'state': UpdateUnbanRequestStateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateUnbanRequestStateEnum {
    NEW = 'NEW',
    APPROVED = 'APPROVED',
    DENIED = 'DENIED'
}


