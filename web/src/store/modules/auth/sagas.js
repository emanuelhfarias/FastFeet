import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'session', { email, password });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/deliveries');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
