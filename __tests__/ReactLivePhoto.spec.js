import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
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
      ...baseProps,
    };
    const wrapper = shallow(<LivePhoto {...props} />);
    expect(wrapper.find('.react-livephoto')).to.have.length(1);
  });
});
