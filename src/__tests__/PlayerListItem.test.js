import React from 'react';
import PlayerListItem from '../components/PlayerListItem';
import renderer from 'react-test-renderer';

describe('PlayerListItem', function() { 
  it('renders correctly', () => {
    const tree = renderer
      .create(<PlayerListItem activePage={10}></PlayerListItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render 2 button', () => {
    const testRenderer = renderer.create(<PlayerListItem />);
    const testInstance = testRenderer.root;
    expect(testInstance.findAll(node => node.type === 'button')).toHaveLength(2);
  });
}); 