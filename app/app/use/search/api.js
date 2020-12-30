import {utils} from '@common';
const {wrapPromise}=utils;
import {fetchUsers} from '@app/api';

export const fetchList=wrapPromise(fetchUsers());





