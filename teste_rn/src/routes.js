import { createStackNavigator } from 'react-navigation-stack';

import List from './pages/list';

const Root = createStackNavigator({
    List,
},{
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor: '#8FBC8F'
        },
        headerTintColor: '#FFF'
    },
});

export default Root;

