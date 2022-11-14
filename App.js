import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import UsersPage from './src/pages/users-page';
import LoginPage from './src/pages/login/login-page';

const App = () => {
  const [page, setPage] = useState(1);

  const onPressLogin = () => setPage(2);
  const onPressBackToLogin = () => setPage(1);

  return page === 1 ? (
    <LoginPage onPressLogin={onPressLogin} />
  ) : (
    <UsersPage onPressBackToLogin={onPressBackToLogin} />
  );
};

const styles = StyleSheet.create({});

export default App;
