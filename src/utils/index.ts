import { message } from 'antd';
import CodeMsg from '@/assets/data/code';
import { BaseResponse } from '@/interfaces/base';
import { DEFAULT_TIP_MESSAGE } from './request';

/**
 * 错误处理
 * @param data {Object} 请求返回的信息
 */
export function handleError(data: BaseResponse): void {
  const msg = CodeMsg[data.code] || data.msg || DEFAULT_TIP_MESSAGE;
  message.error(msg);
}
