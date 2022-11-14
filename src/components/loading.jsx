import {ActivityIndicator, Text, View} from 'react-native';
import colors from '../config/colors';

export const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={colors.medium} size="large" />
      <Text>Fetching users...</Text>
    </View>
  );
};
