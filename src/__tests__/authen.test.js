
import React from 'react';
import { UserContext, UserProvider} from '../UserContext';
import { mount} from 'enzyme';

describe("login", ()=>{
    it('should set loggin to true', () => {

        const TestComponent = () => {
            const {loggedIn, logout, checkAuthen } = React.useContext(UserContext)

            return (
                <>
                    <div data-testid="value">{loggedIn.toString()}</div>
                    <button id="login" onClick={() => checkAuthen("abde", "pass")}>Login</button>
                    <button id="logout" onClick={() => logout()}></button>
                </>
            );
        }

        const wrapper = mount(
            <UserProvider>
                <TestComponent />
            </UserProvider>
        )

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("false");

        wrapper.find('#login').simulate('click');

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("true");

        wrapper.find('#logout').simulate('click');

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("false");

    })
    
})
