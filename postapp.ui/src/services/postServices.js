import http from './httpService';

const endpoint = '/posts';

export function getPosts()
{
    return http.get(endpoint);
}

export default {
    getPosts
};