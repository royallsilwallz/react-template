/* eslint-disable import/prefer-default-export */
import { api } from '.';

export const getUser = () => api.get('https://randomuser.me/api/');
