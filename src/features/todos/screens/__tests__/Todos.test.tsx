import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {TodoList} from 'features/todos/components/todoList';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import {mockData} from '../../mocks/testMocks';

it('renders TodosPage correctly', async () => {
  const component = render(
    <Provider store={store}>
      <MockedProvider mocks={mockData} addTypename={false}>
        <TodoList todos={mockData[0].result?.data} />
      </MockedProvider>
    </Provider>,
  );
  await new Promise((resolve) => setTimeout(resolve, 0));
  const todoItem =  component.getByTestId('todosList');

   expect(todoItem).toBeTruthy()
});
