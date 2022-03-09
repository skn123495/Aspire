/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text, Alert, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {BASESTYLE} from '../../Constants';
import {USER_DATA} from '../../Constants/ActionsType';
import {getUserData} from '../../Redux/Actions/DebitCard.actions';
import {SCREEN_WIDTH} from '../../Utils/responsive';
import {styles} from './style';

function Profile() {
  const {UserDetails} = useSelector(store => store.UserDataReducer);
  const dispatch = useDispatch();
  const [UserData, setUserData] = React.useState(null);
  console.log('USER DATA', UserDetails);

  React.useEffect(() => {
    switch (UserDetails.Status) {
      case USER_DATA.USER_DATA_SUCCESS:
        setUserData(UserDetails.onSuccess.results[0]);
        break;

      case USER_DATA.USER_DATA_FAILED:
        Alert.alert(UserDetails.onFailed);
        break;

      default:
        break;
    }
  }, [UserDetails.Status]);

  React.useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <View style={[BASESTYLE.flex1, BASESTYLE.inCenter]}>
      {UserData == null ? (
        <Text>Loading Data....</Text>
      ) : (
        <View style={BASESTYLE.inCenter}>
          <Image
            source={{uri: UserData.picture.large}}
            style={{
              width: SCREEN_WIDTH / 4,
              height: SCREEN_WIDTH / 4,
              borderRadius: SCREEN_WIDTH / 4 / 2,
            }}
          />
          <Text style={styles.titleText}>
            Name: {UserData.name.title} {UserData.name.first}
            {UserData.name.last}
          </Text>
          <Text style={styles.descText}>Email: {UserData.email}</Text>
        </View>
      )}
    </View>
  );
}
export default Profile;
