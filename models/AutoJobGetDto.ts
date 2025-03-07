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

import { BasePointIdentifyDto } from '../models/BasePointIdentifyDto';
import { HttpFile } from '../http/http';

export class AutoJobGetDto {
    'name': string;
    'dataPoint'?: BasePointIdentifyDto;
    'repoPoint'?: BasePointIdentifyDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataPoint",
            "baseName": "dataPoint",
            "type": "BasePointIdentifyDto",
            "format": ""
        },
        {
            "name": "repoPoint",
            "baseName": "repoPoint",
            "type": "BasePointIdentifyDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AutoJobGetDto.attributeTypeMap;
    }

    public constructor() {
    }
}
