import { createStackNavigator } from 'react-navigation-stack';

import List from './pages/list';

const Root = createStackNavigator({
    List,
},{
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    },
});

export default Root;

