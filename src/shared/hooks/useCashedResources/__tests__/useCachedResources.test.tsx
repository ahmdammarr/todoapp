import 'react-native';
import React from 'react';
import {useCachedResources} from '../useCachedResources';
import {render} from '@testing-library/react-native';

describe.only('CachedResources hook', () => {
  it('renders main correclty', () => {
    let results;
    function HookWrapper() {
      results = useCachedResources();
      return null;
    }
    render(<HookWrapper />);

    // if (!results.isLoading) {
    //   expect(render(<Main />)).toBeTruthy();
    //   //   console.log('r',r.rerender)
    // }
  });
});
