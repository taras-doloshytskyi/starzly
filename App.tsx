import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import { Navigator } from '@navigation';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />

      <Navigator />
    </Fragment>
  );
}
