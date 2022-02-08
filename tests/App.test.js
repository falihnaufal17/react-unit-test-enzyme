import React from 'react'
import App from '../src/App'
import { shallow } from 'enzyme'

describe('<App />', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<App />)
    })

    it('should render component', () => {
        expect(wrapper.length).toBe(1)
    })
});