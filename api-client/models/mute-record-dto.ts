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


import { UserTuple } from './user-tuple';

/**
 * 
 * @export
 * @interface MuteRecordDTO
 */
export interface MuteRecordDTO {
    /**
     * 
     * @type {number}
     * @memberof MuteRecordDTO
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof MuteRecordDTO
     */
    'uuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof MuteRecordDTO
     */
    'ip'?: string;
    /**
     * 
     * @type {UserTuple}
     * @memberof MuteRecordDTO
     */
    'staff': UserTuple;
    /**
     * 
     * @type {string}
     * @memberof MuteRecordDTO
     */
    'reason'?: string;
    /**
     * 
     * @type {string}
     * @memberof MuteRecordDTO
     */
    'server': string;
    /**
     * 
     * @type {string}
     * @memberof MuteRecordDTO
     */
    'begin': string;
    /**
     * 
     * @type {string}
     * @memberof MuteRecordDTO
     */
    'end'?: string;
    /**
     * 
     * @type {number}
     * @memberof MuteRecordDTO
     */
    'state': number;
    /**
     * 
     * @type {string}
     * @memberof MuteRecordDTO
     */
    'unmuteDate'?: string;
    /**
     * 
     * @type {UserTuple}
     * @memberof MuteRecordDTO
     */
    'unmuteStaff'?: UserTuple;
    /**
     * 
     * @type {string}
     * @memberof MuteRecordDTO
     */
    'unmuteReason'?: string;
}

