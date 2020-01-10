import React from 'react';
import { CompaniesContext, CompaniesProvider} from '../CompaniesContext';
import { mount} from 'enzyme';

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
describe("companies context", ()=>{
    it('CompaniesConsumer shows default value', () => {
      var company = undefined;
      const TestComponent = () => {
        const {getCompany } = React.useContext(CompaniesContext);
        return (
            <>
                <button id="getcompany" onClick={() => company = getCompany("20")}>GET COMPANY</button>
            </>
        );
    }

      const wrapper = mount(
        <CompaniesProvider>
            <TestComponent />
        </CompaniesProvider>
    )
      wrapper.find('#getcompany').simulate('click');

      expect(company).toBe("No company found");
    
    }
  )
    
})

