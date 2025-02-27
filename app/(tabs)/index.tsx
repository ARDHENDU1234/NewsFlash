import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@componentsHeader';
import SearchBar from '@componentsSearchBar';
import axios from 'axios';
import { NewsDataType } from '@types';
import BreakingNews from '@componentsBreakingNews';  Adjusted import path
import Categories from '@componentsCategories';
import NewsList from '@componentsNewsList';
import Loading from '@componentsLoading';

type Props = {};

const Page = (props Props) = {
  const { top safeTop } = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useStateNewsDataType[]([]);
  const [news, setNews] = useStateNewsDataType[]([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() = {
    getBreakingNews();
    getNews();
  }, []);

  const getBreakingNews = async () = {
    try {
      const URL = httpsnewsdata.ioapi1newsapikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&image=1&removeduplicate=1&size=5;
      const response = await axios.get(URL);

      if (response && response.data) {
        setBreakingNews(response.data.results);
        setIsLoading(false);
      }
    } catch (err any) {
      console.log('Error Message ', err.message);
    }
  };

  const getNews = async (category string = '') = {
    try {
      let categoryString = '';
      if (category.length !== 0) {
        categoryString = &category=${category};
      }

      const URL = httpsnewsdata.ioapi1newsapikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&image=1&removeduplicate=1&size=10${categoryString};
      const response = await axios.get(URL);

      if (response && response.data) {
        setNews(response.data.results);  Corrected from setBreakingNews to setNews
        setIsLoading(false);
      }
    } catch (err any) {
      console.log('Error Message ', err.message);
    }
  };

  const onCatChanged = (category string) = {
    console.log('Category ', category);
    setNews([]);
    getNews(category);
  };

  return (
    ScrollView style={[styles.container, { paddingTop safeTop }]}
      Header 
      SearchBar withHorizontalPadding={true} 
      {isLoading  (
        Loading size={'large'} 
      )  (
        BreakingNews newsList={breakingNews} 
      )}
      Categories onCategoryChanged={onCatChanged} 
      NewsList newsList={news} 
    ScrollView
  );
};

export default Page;

const styles = StyleSheet.create({
  container {
    flex 1,
  },
});