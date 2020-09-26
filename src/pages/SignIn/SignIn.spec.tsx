import React from 'react';
import { render } from 'react-native-testing-library';

import SignIn from './index';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('Signin Page', () => {
  it('should contains email/password inputs', () => {
    const { getByTestId } = render(<SignIn />);

    expect(getByTestId('email')).toBeTruthy();
    expect(getByTestId('password')).toBeTruthy();
  });
});
