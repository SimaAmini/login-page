import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Button,
  FlatList,
} from 'react-native';
import {Request} from '../api/request';
import ListItemSeparator from '../components/ListItemSeparator';
import {Loading} from '../components/loading';
import {ListItem} from '../components/listItem';
import colors from '../config/colors';

export default UsersPage = ({onPressBackToLogin}) => {
  const [users, setUsers] = useState([]);

  const renderItem = ({item}) => (
    <ListItem user={item} onPress={() => console.log(item.id)} />
  );

  const fetchData = async () => {
    const {users} = await Request.get({url: '/users?limit=25'});
    setUsers(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {users && users.length ? (
        <>
          <View>
            <Button title="Beck to Login Page" onPress={onPressBackToLogin} />
          </View>
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.light,
  },
});
