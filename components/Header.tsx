import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expovector-icons'; 
import { Colors } from @constantsColors;  Ensure this path is correct

type Props = {}

const Header = (props Props) = {
  return (
    View style={styles.container}
      View style={styles.userInfo}
        { Display user image }
        Image 
          source={{ uri 'httpsxsgames.corandomusersavatar.phpg=male' }} 
          style={styles.userImg} 
        
        View style={{ gap 3 }}
          Text style={styles.welcomeTxt}WelcomeText
          Text style={styles.userName}John Doe!Text
        View
      View

      { Notification button with TouchableOpacity }
      TouchableOpacity onPress={() = {}}
        Ionicons name='notifications-outline' size={24} color={Colors.black} 
      TouchableOpacity      
    View
  );
};

export default Header;

const styles = StyleSheet.create({
  container {
    paddingHorizontal 20,
    flexDirection 'row',
    justifyContent 'space-between',
    alignItems 'center',
    marginBottom 20,
  },
  userImg {
    height 50,
    borderRadius 30, 
  },
  userInfo {
    flexDirection 'row',
    alignItems 'center',
    gap 10,
  },
  welcomeTxt {
    fontSize 12,
    color Colors.darkGrey,
  },
  userName {
    fontSize 14,
    fontWeight '700',
    color Colors.black,
  },
});
