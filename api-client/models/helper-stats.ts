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


import { HelperBansMutesStatDTO } from './helper-bans-mutes-stat-dto';
import { UserTuple } from './user-tuple';

/**
 * 
 * @export
 * @interface HelperStats
 */
export interface HelperStats {
    /**
     * 
     * @type {UserTuple}
     * @memberof HelperStats
     */
    'user': UserTuple;
    /**
     * 
     * @type {HelperBansMutesStatDTO}
     * @memberof HelperStats
     */
    'bans': HelperBansMutesStatDTO;
    /**
     * 
     * @type {HelperBansMutesStatDTO}
     * @memberof HelperStats
     */
    'mutes': HelperBansMutesStatDTO;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'messageCount': number;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'chars': number;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'waitingRoomsSolved': number;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'coinsReward': number;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'ratingAverage': number;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'ratingCount': number;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'coinsTickets': number;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'coinsPunishments': number;
    /**
     * 
     * @type {number}
     * @memberof HelperStats
     */
    'coinsPerTicket': number;
}

