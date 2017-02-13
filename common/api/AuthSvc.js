import {post, get} from './utils';
import * as store from 'store2'

export function getLocalToken() {
    return store.get('auth_token')
}

export function resetLocalToken() {
    console.log('remove local token')
    store.remove('auth_token')
}
export function setLocalToken(token) {
    console.log('set new local token')
    store.set('auth_token', token)
}

export function isLoggedIn() {
    console.log('local token is null:', getLocalToken() === null)
    let localToken = getLocalToken()
    if (localToken === null) {
        return false
    }
    return true
}

export async function verifyToken() {
    return await get('/auth/verify')
}
export async function refreshToken() {
    return await get('/auth/refresh')
}

export async function login_API(data) {
    return await post('/auth', data)
}

export async function recoverPassword_API(data) {
    return await post('/auth/recover', data)
}

export async function register_API(data) {
    return await post('/auth/register', data)
}
