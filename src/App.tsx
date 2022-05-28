import React from 'react';
import { I18n } from 'aws-amplify';
import {
  View,
  Image,
  useAuthenticator,
  Button,
  Link,
} from '@aws-amplify/ui-react';

import { Link as ReactRouterLink } from 'react-router-dom';
import logo from './logo.svg';
import DallantMusicLogo from './dallant_logo.svg';
import './App.css';
import './login.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

/**
 * App component
 */

const formLabels = {
  'Sign In': 'Login', // Tab header
  'Sign in': '로그인', // Button label  ,
  Username: '아이디 또는 이메일을 입력해주세요.', // Username label
  Password: '비밀번호를 입력해주세요.', // Password label
  'Forgot your password?': '비밀번호를 잊으셨나요?',
};

I18n.putVocabulariesForLanguage('en', formLabels);
I18n.putVocabulariesForLanguage('ko', formLabels);

const components = {
  Header() {
    // const { tokens } = useTheme();

    return (
      <View
        textAlign="center"
        paddingLeft="20px"
        paddingTop="30%"
        paddingBottom="10%"
      >
        <Image alt="DallantMusic logo" src={DallantMusicLogo} />
      </View>
    );
  },
  SignIn: {
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
          <Link
            as={ReactRouterLink}
            to="/instructor"
            onClick={() => (document.body.style.backgroundColor = '#69702E')}
          >
            Home
          </Link>
        </View>
      );
    },
  },
};

// eslint-disable-next-line require-jsdoc
class App extends React.Component {
  /**
   *
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    document.body.style.backgroundColor = 'white';
    return (
      <Authenticator components={components} hideSignUp={true}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Authenticator>
    );
  }
}

export default App;
