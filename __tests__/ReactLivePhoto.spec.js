import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import LivePhoto from '../src/';

const getBaseProps = () => {
  return {
    width: 300,
    height: 300,
    imageSrc: 'http://example.com/path/file.jpg',
    videoSrc: 'http://example.com/path/file.mov',
  };
};

let baseProps;

beforeEach(() => {
  baseProps = getBaseProps();
});

describe('ReactLivePhoto', () => {
  it('Renders the LivePhoto component', () => {
    const props = {
      width: 300,
      height: 300,
      imageSrc: 'http://example.com/path/file.jpg',
      videoSrc: 'http://example.com/path/file.mov',
    };
    const tree = renderer.create(<LivePhoto {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
