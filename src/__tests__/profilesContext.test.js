import React from 'react';
import { ProfileContext, ProfilesProvider} from '../ProfilesContext';
import { mount} from 'enzyme';

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
describe("profiles context", ()=>{
    it('profilesConsumer shows default values', () => {

        var good = true;
        const testStateVars = (featuredProfiles, profiles, promo, filiere, poste) => {
            if((profiles.length === 0) || !(featuredProfiles.length >= 3) || promo!=='all' || filiere!=='all' || poste!=='all')
                good = false;
        }

        const TestComponent = () => {
            const {featuredProfiles, profiles, promo, filiere, poste} = React.useContext(ProfileContext);
            return (
                <>
                    <button id="testState" onClick={() =>testStateVars(featuredProfiles, profiles, promo, filiere, poste)}>Test state data</button>
                </>
            );
        }

        const wrapper = mount(
            <ProfilesProvider>
                <TestComponent />
            </ProfilesProvider>
        )
      wrapper.find('#testState').simulate('click');

      expect(good).toEqual(true);
    
    }
  )
    
})
