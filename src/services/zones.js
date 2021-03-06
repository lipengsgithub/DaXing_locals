import { stringify } from 'qs';
import request from '../utils/request';

export async function queryZones(params) {
  return request(`/api/v1/zones?${stringify(params)}`);
}

export async function createData(params) {
  return request('/api/v1/zones', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

export async function getDataInfo(id) {
  return request(`/api/v1/zones/${id}`);
}

export async function updateData(params) {
  return request(`/api/v1/zones/${params.id}`, {
    method: 'PUT',
    body: {
      ...params,
    },
  });
}

export async function deleteData(id) {
  return request(`/api/v1/zones/${id}`, {
    method: 'DELETE',
  });
}
