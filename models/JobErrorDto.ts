/**
 * Neptis
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class JobErrorDto {
    'message'?: string | null;
    'during'?: string | null;
    'item'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "during",
            "baseName": "during",
            "type": "string",
            "format": ""
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JobErrorDto.attributeTypeMap;
    }

    public constructor() {
    }
}
