import { User } from './screens/HomePageScreen';

export type RootStackParamList = {
    SignUp: undefined;
    SignIn: undefined;
    HomePage: undefined;
    Detail: { user: User; };
};
