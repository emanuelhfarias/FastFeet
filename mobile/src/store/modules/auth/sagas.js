import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, 'deliveryman', { params: { id } });

    yield put(signInSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha ao autenticar entregador',
      'Verifique se o ID de cadastro está correto.'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
