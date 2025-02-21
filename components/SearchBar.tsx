import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expovector-icons';
import { Colors } from '..constantsColors';  Adjusted path for Colors

type Props = {
  withHorizontalPadding boolean
  setSearchQuery Fuction
};

const SearchBar = ({withHorizontalPadding, setSearchQuery} Props) = {
  return (
    View style={[styles.container, withHorizontalPadding && {paddingHorizontal 20}]}
      View style={styles.searchBar}
        Ionicons name=search-outline size={20} color={Colors.lightGrey} 
        TextInput
          placeholder=Search
          placeholderTextColor={Colors.lightGrey}
          style={styles.searchTxt}
          autoCapitalize=none
          onChangeText={query = setSearchQuery(query)}
        
      View
    View
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container {
     marginHorizontal 20,
    marginBottom 20,
  },
  searchBar {
    backgroundColor '#E4E4E4',
    paddingHorizontal 10,
    paddingVertical 12,
    borderRadius 10,
    flexDirection 'row',
    alignItems 'center',
    gap 10,
  },
  searchTxt {
    fontSize 14,
    flex 1,
    color Colors.darkGrey,
  },
});