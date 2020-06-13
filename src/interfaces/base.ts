export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface Pagination {
  total: number;
  size: number;
  index: number;
  length: number;
  beginIndex: number;
  endIndex: number;
}

export interface BaseResponse {
  code: string;
  msg: string;
  memo: string;
  data: any;
  page?: Pagination;
  result: number;
  success: boolean;
  requestId: string;
  linkTime: number;
}
