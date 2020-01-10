import React from 'react';
import { CompaniesContext, CompaniesProvider} from '../CompaniesContext';
import { mount} from 'enzyme';

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
describe("companies context", ()=>{
    it('CompaniesConsumer shows default value', () => {

        var good = true;
        const testStateVars = (featuredCompanies, companies, ville, specialite) => {
            if((companies.length === 0) || !(featuredCompanies.length !== 3) || ville!=='all' || specialite!=='all')
                good = false;
        }

      const TestComponent = () => {
        const {featuredCompanies, companies, ville, specialite} = React.useContext(CompaniesContext);
        return (
            <>
                <button id="testState" onClick={() =>testStateVars(featuredCompanies, companies, ville, specialite)}>Test state data</button>
            </>
        );
    }

      const wrapper = mount(
        <CompaniesProvider>
            <TestComponent />
        </CompaniesProvider>
    )
      wrapper.find('#testState').simulate('click');

      expect(good).toEqual(true);
    
    }
  )
    
})

