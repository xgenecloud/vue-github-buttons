/**
 * Send GET request from GitHub API.
 *
 * @export
 * @param {string} path GitHub API request path
 * @param {boolean} [useCache=true] Enable caching
 * @returns {Promise<any>}
 */
export default function ghGet(path: string, useCache?: boolean): Promise<any>;
