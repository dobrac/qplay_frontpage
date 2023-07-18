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
 * @enum {string}
 */

export enum Permission {
    NOBODY = 'NOBODY',
    COINS_TRANSACTIONS_GET = 'COINS_TRANSACTIONS_GET',
    COINS_TRANSACTIONS_REVERT = 'COINS_TRANSACTIONS_REVERT',
    ACCOUNT_DELETE = 'ACCOUNT_DELETE',
    ACCOUNT_UPDATE_EMAIL = 'ACCOUNT_UPDATE_EMAIL',
    USERS_INFO = 'USERS_INFO',
    USERS_INFO_SEARCH_BY_EMAIL = 'USERS_INFO_SEARCH_BY_EMAIL',
    USERS_INFO_SEARCH_BY_IP = 'USERS_INFO_SEARCH_BY_IP',
    USERS_PROFILE = 'USERS_PROFILE',
    USERS_CRATES_GET = 'USERS_CRATES_GET',
    USERS_BANS_GET = 'USERS_BANS_GET',
    USERS_MUTES_GET = 'USERS_MUTES_GET',
    USERS_COINS_TRANSACTIONS_GET = 'USERS_COINS_TRANSACTIONS_GET',
    USERS_COINS_TRANSFERS_GET = 'USERS_COINS_TRANSFERS_GET',
    USERS_MIGRATIONS_GET = 'USERS_MIGRATIONS_GET',
    USERS_GROUPS_GET = 'USERS_GROUPS_GET',
    USERS_MIGRATIONS_DELAY_GET = 'USERS_MIGRATIONS_DELAY_GET',
    STATS_USER_GET = 'STATS_USER_GET',
    USERS_MIGRATIONS_DELAY_SET = 'USERS_MIGRATIONS_DELAY_SET',
    USERS_MIGRATIONS_DELAY_DELETE = 'USERS_MIGRATIONS_DELAY_DELETE',
    USERS_PREMIUM_SET = 'USERS_PREMIUM_SET',
    USERS_IPWHITELIST_SET = 'USERS_IPWHITELIST_SET',
    TICKETGROUP_ALL = 'TICKETGROUP_ALL',
    TICKETGROUP_VEDENI = 'TICKETGROUP_VEDENI',
    TICKETGROUP_HLHELPER = 'TICKETGROUP_HLHELPER',
    TICKETGROUP_HLBUILDER = 'TICKETGROUP_HLBUILDER',
    TICKETGROUP_SHELPER = 'TICKETGROUP_SHELPER',
    TICKETGROUP_HLCHEATHUNTER = 'TICKETGROUP_HLCHEATHUNTER',
    TICKETGROUP_DEVELOPER = 'TICKETGROUP_DEVELOPER',
    TICKETGROUP_PRMANAGER = 'TICKETGROUP_PRMANAGER',
    TICKETGROUP_HLMODERATOR = 'TICKETGROUP_HLMODERATOR',
    TICKETS_NOTE_SET = 'TICKETS_NOTE_SET',
    TICKETS_STAR_SET = 'TICKETS_STAR_SET',
    TICKETS_STATE_SET = 'TICKETS_STATE_SET',
    TICKETS_HEAD_SET = 'TICKETS_HEAD_SET',
    TICKETS_REWARD_COINS = 'TICKETS_REWARD_COINS',
    TICKETS_EDIT_PERMANENT = 'TICKETS_EDIT_PERMANENT',
    TICKETS_DUPLICATE = 'TICKETS_DUPLICATE',
    TICKETS_USER_GET = 'TICKETS_USER_GET',
    TICKETS_PREDEFINED_MESSAGES = 'TICKETS_PREDEFINED_MESSAGES',
    TICKETS_PREDEFINED_MESSAGES_ADMIN = 'TICKETS_PREDEFINED_MESSAGES_ADMIN',
    TICKETS_ADMIN_LIST = 'TICKETS_ADMIN_LIST',
    TICKETS_BLACKLIST = 'TICKETS_BLACKLIST',
    TICKETS_BLACKLIST_ADMIN = 'TICKETS_BLACKLIST_ADMIN',
    TICKETS_STATS = 'TICKETS_STATS',
    TICKETS_STATS_VIEW_ANYBODY = 'TICKETS_STATS_VIEW_ANYBODY',
    TICKETS_STATS_VIEW_ANYBODY_HELPER = 'TICKETS_STATS_VIEW_ANYBODY_HELPER',
    TICKETS_STATS_VIEW_ANYBODY_MODERATOR = 'TICKETS_STATS_VIEW_ANYBODY_MODERATOR',
    TICKETS_STATS_VIEW_ANYBODY_BUILDER = 'TICKETS_STATS_VIEW_ANYBODY_BUILDER',
    TICKETS_STATS_VIEW_ANYBODY_CHEATHUNTER = 'TICKETS_STATS_VIEW_ANYBODY_CHEATHUNTER',
    TICKETS_RATINGS = 'TICKETS_RATINGS',
    TICKETS_RATINGS_ADMIN = 'TICKETS_RATINGS_ADMIN',
    IMPERSONATE = 'IMPERSONATE',
    IMPERSONATE_ADMIN = 'IMPERSONATE_ADMIN',
    SESSIONS_MANAGEMENT = 'SESSIONS_MANAGEMENT',
    VIEW_IP = 'VIEW_IP',
    VIEW_EMAIL = 'VIEW_EMAIL',
    PAYMENTS_VIP_GENERATE = 'PAYMENTS_VIP_GENERATE',
    CHANGELOG_EDIT = 'CHANGELOG_EDIT',
    SERVERS_MANAGE = 'SERVERS_MANAGE',
    SERVERS_MONITOR = 'SERVERS_MONITOR',
    PUNISHMENTS_UNBAN_REQUEST = 'PUNISHMENTS_UNBAN_REQUEST',
    PUNISHMENTS_UNBAN_REQUEST_APPROVE = 'PUNISHMENTS_UNBAN_REQUEST_APPROVE',
    PUNISHMENTS_TEMPMUTE = 'PUNISHMENTS_TEMPMUTE',
    PUNISHMENTS_TEMPBAN = 'PUNISHMENTS_TEMPBAN',
    PUNISHMENTS_BAN = 'PUNISHMENTS_BAN',
    PUNISHMENTS_IPBAN = 'PUNISHMENTS_IPBAN',
    ADMINTEAM_CHEATHUNTERS = 'ADMINTEAM_CHEATHUNTERS',
    ABSENCES = 'ABSENCES',
    ABSENCES_ADMIN = 'ABSENCES_ADMIN'
}

