import { Reducer, Effect } from 'umi';
import { getUserInfo } from '@/services/user';

export interface UserInfo {
  name?: string;
}

export interface UserModelState {
  info: UserInfo;
  login: boolean;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchUser: Effect;
  };
  reducers: {
    setUserInfo: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    info: {},
    login: false,
  },
  effects: {
    // 获取用户信息
    *fetchUser(_, { call, put }) {
      const response = yield call(getUserInfo);
      yield put({
        type: 'setUserInfo',
        payload: response,
      });
    },
  },
  reducers: {
    // 修改用户信息
    setUserInfo(
      state = { login: false, info: {} },
      { payload },
    ): UserModelState {
      return {
        login: false,
        ...state,
        info: payload || {},
      };
    },
  },
};

export default UserModel;
