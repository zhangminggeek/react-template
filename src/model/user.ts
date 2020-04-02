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
    *fetchUser(_, { call, put }) {
      const response = yield call(getUserInfo);
      yield put({
        type: 'setUserInfo',
        payload: response,
      });
    },
  },
  reducers: {
    setUserInfo(state, action) {
      return {
        ...state,
        info: action.payload || {},
      };
    },
  },
};

export default UserModel;
