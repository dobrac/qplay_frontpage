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
 * @interface TicketInfo
 */
export interface TicketInfo {
    /**
     * 
     * @type {string}
     * @memberof TicketInfo
     */
    'uid': string;
    /**
     * 
     * @type {UserTuple}
     * @memberof TicketInfo
     */
    'author': UserTuple;
    /**
     * 
     * @type {number}
     * @memberof TicketInfo
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof TicketInfo
     */
    'starred': number;
    /**
     * 
     * @type {number}
     * @memberof TicketInfo
     */
    'duplicate': number;
    /**
     * 
     * @type {string}
     * @memberof TicketInfo
     */
    'date': string;
    /**
     * 
     * @type {string}
     * @memberof TicketInfo
     */
    'type': string;
    /**
     * 
     * @type {number}
     * @memberof TicketInfo
     */
    'state': number;
    /**
     * 
     * @type {number}
     * @memberof TicketInfo
     */
    'group': number;
    /**
     * 
     * @type {string}
     * @memberof TicketInfo
     */
    'lastUpdate': string;
    /**
     * 
     * @type {string}
     * @memberof TicketInfo
     */
    'lastMessageTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TicketInfo
     */
    'params'?: string;
    /**
     * 
     * @type {string}
     * @memberof TicketInfo
     */
    'subject'?: string;
    /**
     * 
     * @type {string}
     * @memberof TicketInfo
     */
    'rateDate'?: string;
}

