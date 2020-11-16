import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList2174371Navigator from '../features/ArticleList2174371/navigator';
import ArticleList3174370Navigator from '../features/ArticleList3174370/navigator';
import ArticleList5174368Navigator from '../features/ArticleList5174368/navigator';
import ArticleList7174367Navigator from '../features/ArticleList7174367/navigator';
import ArticleList8174366Navigator from '../features/ArticleList8174366/navigator';
import BlankScreen1174364Navigator from '../features/BlankScreen1174364/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList2174371: { screen: ArticleList2174371Navigator },
ArticleList3174370: { screen: ArticleList3174370Navigator },
ArticleList5174368: { screen: ArticleList5174368Navigator },
ArticleList7174367: { screen: ArticleList7174367Navigator },
ArticleList8174366: { screen: ArticleList8174366Navigator },
BlankScreen1174364: { screen: BlankScreen1174364Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
