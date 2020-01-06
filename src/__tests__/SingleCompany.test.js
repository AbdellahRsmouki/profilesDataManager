import React from 'react';
import { CompaniesContext, CompaniesProvider} from '../CompaniesContext';
import SingleCompany from './../pages/SingleCompany'
import { mount} from 'enzyme';

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
describe("companies context", ()=>{
    it('CompaniesConsumer shows default value', () => {
      const {getCompany } = React.useContext(CompaniesContext);

      const wrapper = mount(
        <CompaniesProvider>
            <SingleCompany />
        </CompaniesProvider>
    )

      expect(getCompany("20").toBe("No company found"));
    })
    
})

