import { useNavigation } from '@react-navigation/core';

const navigation = useNavigation();

interface IPage {
  page: string
}

export const changePage = ({ page }: IPage) => navigation.navigate(page);
