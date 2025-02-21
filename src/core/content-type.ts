/**
 * File Generated by Sideko (sideko.dev)
 */

// use a pattern to match json content type to handle
// base case of application/json as well as vendor specfic
// headers e.g. application/vnd.github+json
export const JSON_PATTERN = /application\/.*json/g;

// use a pattern to match text types to handle base case
// of text/plain as well as more specfic cases e.g. text/html
export const TEXT_PATTERN = /text\/.+/g;

export const MULTIPART_FORM = "multipart/form-data";

export const URL_FORM = "application/x-www-form-urlencoded";
