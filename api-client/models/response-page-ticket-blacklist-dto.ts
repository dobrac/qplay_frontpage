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


import { TicketBlacklistDTO } from './ticket-blacklist-dto';

/**
 * 
 * @export
 * @interface ResponsePageTicketBlacklistDTO
 */
export interface ResponsePageTicketBlacklistDTO {
    /**
     * 
     * @type {number}
     * @memberof ResponsePageTicketBlacklistDTO
     */
    'totalPages': number;
    /**
     * 
     * @type {number}
     * @memberof ResponsePageTicketBlacklistDTO
     */
    'totalElements': number;
    /**
     * 
     * @type {Array<TicketBlacklistDTO>}
     * @memberof ResponsePageTicketBlacklistDTO
     */
    'content': Array<TicketBlacklistDTO>;
}

