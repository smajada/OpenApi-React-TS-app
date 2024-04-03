/* tslint:disable */
/* eslint-disable */
/**
 * JSON Placeholder API
 * See https://jsonplaceholder.typicode.com/
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Post,
} from '../models/index';
import {
    PostFromJSON,
    PostToJSON,
} from '../models/index';

export interface GetPostRequest {
    id: number;
}

/**
 * 
 */
export class PostsApi extends runtime.BaseAPI {

    /**
     * Returns a post by id
     */
    async getPostRaw(requestParameters: GetPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Post>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/posts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostFromJSON(jsonValue));
    }

    /**
     * Returns a post by id
     */
    async getPost(requestParameters: GetPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Post> {
        const response = await this.getPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all posts
     */
    async getPostsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Post>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/posts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PostFromJSON));
    }

    /**
     * Returns all posts
     */
    async getPosts(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Post>> {
        const response = await this.getPostsRaw(initOverrides);
        return await response.value();
    }

}
