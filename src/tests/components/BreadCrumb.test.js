import React from 'react';
import { shallow } from 'enzyme';
import BreadCrumb from './../../components/BreadCrumb/Breadcrumb'

describe('tests in Home', () => {
    test('should ', () => {
        const wrapper = shallow(<BreadCrumb categories={['comidas','ricasu']}/>);
        expect(wrapper).toMatchSnapshot();
    })
    
});
