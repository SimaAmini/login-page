import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import colors from '../config/colors';

export const ListItem = ({user, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.primary}>
      <View style={styles.item}>
        <Image style={styles.avatar} source={{uri: user.image}} />
        <Text style={styles.title}>
          {user.firstName} {user.lastName}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.light,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  title: {
    fontSize: 16,
  },
});
