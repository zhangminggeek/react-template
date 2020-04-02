import request from '@/utils/request';

export async function getUserInfo(): Promise<any> {
  return request('/developer/info', {
    method: 'get',
  });
}
