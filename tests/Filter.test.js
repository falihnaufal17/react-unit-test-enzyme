import React from 'react'
import { shallow } from 'enzyme';
import Filter from '../src/components/Filter'

describe('<Filter />', () => {
    let wrapper
    const p = {
        setHitParams: jest.fn(),
        hitParams: {
            role: '',
            parent: ''
        }
    }

    beforeEach(() => {
        wrapper = shallow(<Filter {...p} />)
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render component", () => {
        expect(wrapper.length).toBe(1)
    })

    it("should set params role", () => {
        const roleSelect = wrapper.find('[data-testid="roleSelect"]')
        const e = {
            target: {
                value: 'agent'
            }
        }

        roleSelect.invoke('onChange')(e)

        expect(p.setHitParams).toBeCalledWith({
            ...p.hitParams,
            role: e.target.value
        })
    })

    it("should select is not disabled", () => {
        wrapper.setProps({
            ...p,
            hitParams: {
                role: 'value'
            }
        })

        const parentSelect = wrapper.find('[data-testid="parentSelect"]')

        expect(parentSelect.prop('disabled')).toBeFalsy()
    })

    it("should set params parent", () => {
        const parentSelect = wrapper.find('[data-testid="parentSelect"]')

        const e = {
            target: {
                value: '1'
            }
        }

        parentSelect.invoke('onChange')(e)

        expect(p.setHitParams).toBeCalledWith({
            ...p.hitParams,
            parent: e.target.value
        })
    })
});