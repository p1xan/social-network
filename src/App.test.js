import { render, screen } from '@testing-library/react';
import SamuraiJsApp from "./App";
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  render(<SamuraiJsApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render without crashing',() => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJsApp/>,div);
  ReactDOM.unmountComponentAtNode(div);
});