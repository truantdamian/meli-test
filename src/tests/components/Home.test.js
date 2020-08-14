import React from 'react';
import { shallow } from 'enzyme';
import Home from './../../components/Home/Home'

describe('tests in Home', () => {
    test('should ', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper).toMatchSnapshot();
    })
    
});
