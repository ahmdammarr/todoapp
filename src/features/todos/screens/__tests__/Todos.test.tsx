import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {TodoList} from 'features/todos/components/todoList';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import {mockData, mockError} from '../../mocks/testMocks';
import {Todos} from '../Todos';

it('renders loader', async () => {
  const component = render(
    <Provider store={store}>
      <MockedProvider mocks={mockData} addTypename={false}>
        <Todos />
      </MockedProvider>
    </Provider>,
  );

  const loader = component.findAllByTestId('loader');

  expect(loader).toBeTruthy();
});
it('renders error', async () => {
  const component = render(
    <Provider store={store}>
      <MockedProvider mocks={mockError} addTypename={false}>
        <Todos />
      </MockedProvider>
    </Provider>,
  );

  const errComponent = component.findAllByTestId('errorUi');

  expect(errComponent).toBeTruthy();
});
it('renders List after loading', async () => {
  const component = render(
    <Provider store={store}>
      <MockedProvider mocks={mockData} addTypename={false}>
        <TodoList todos={mockData[0].result?.data} />
      </MockedProvider>
    </Provider>,
  );
  await new Promise(resolve => setTimeout(resolve, 0));

  const todoList = component.findAllByTestId('todoList');
  const todoItem = component.findAllByTestId('todoItem');

  expect(todoList).toBeTruthy();
  expect(todoItem).toBeTruthy();
});
