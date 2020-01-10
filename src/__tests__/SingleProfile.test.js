import React from 'react';
import { ProfileContext, ProfilesProvider} from '../ProfilesContext';
import { mount} from 'enzyme';

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
describe("profiles context", ()=>{
    it('profilesConsumer shows default value', () => {
      var company = undefined;
      const TestComponent = () => {
        const {getProfile } = React.useContext(ProfileContext);
        return (
            <>
                <button id="getprofile" onClick={() => company = getProfile("20")}>GET COMPANY</button>
            </>
        );
    }

      const wrapper = mount(
        <ProfilesProvider>
            <TestComponent />
        </ProfilesProvider>
    )
      wrapper.find('#getprofile').simulate('click');

      expect(company).toBe("No profile found");
    
    }
  )
    
})

