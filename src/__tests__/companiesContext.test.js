import {CompaniesContext} from '../CompaniesContext';




test("Giving wrong company slug", () => {
    const {getCompany} = CompaniesContext;
    expect(getCompany("20").toBe("No company found"))
})