import React, { useState, useEffect } from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import FormInput from './FormInput';

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - ${sO.price.formatted}` }))

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, []);

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision])

    return (
        <>
            <div className="my-6 sm:px-0"></div>
              <div className="text-2xl mb-4 text-center tracking-widest">Adres dostawy</div>
              <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                      <div className="shadow overflow-hidden">
                        <div className="sm:mx-24 my-4 bg-white">
                          <div className="mx-4 my-4">
                            <div className="sm:flex">
                              <div className="mx-auto">
                                <FormInput required name='Imie' label='first Name' />
                              </div>
                              <div className="mx-auto">
                                <FormInput required name='Nazwisko' label='last Name' />
                              </div>
                            </div>
                            <div className="sm:mx-24">  
                              <FormInput required name='Adres' label='Adres' />
                            </div>
                            <div className="mx-24">  
                              <FormInput required name='Email' label='Email' />
                            </div>
                            <div className="flex">
                              <div className="mx-auto">  
                                <FormInput required name='Miasto' label='City' />
                              </div>  
                              <div className="mx-auto">
                                <FormInput required name='Kod pocztowy' label='Zip' />
                              </div>  
                            </div>
                            <div></div>
                            <div className="mx-24">
                                <label htmlFor="country" className="block text-sm tracking-widest font-medium">Kraj</label>
                                <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="mt-1 block w-full py-2 px-3 tracking-widest border text-gray-700 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  value={shippingCountry}
                                  onChange={(e) => setShippingCountry(e.target.value)}
                                >
                                    {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                      <option key={item.id} value={item.id}>
                                        {item.label}
                                      </option>
                                    ))}
                                    {/*{countries.map((country) => (
                                        <option key={country.id} value={country.id}>
                                            {country.label}
                                        </option>
                                    ))}*/}
                                </select>
                            </div>
                            </div>
                            {/*<div className="col-span-6 sm:col-span-3">
                                <InputLabel>Subdivisions</InputLabel>
                                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                    {subdivisions.map((subdivision) => (
                                        <MenuItem key={subdivision.id} value={subdivision.id}>{subdivision.label}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel>Opcje dostawy</InputLabel>
                                <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.targer.value)}>
                                    {options.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
                                    ))}
                                </Select>
                              </div>*/}
                          </div>
                        </div>
                      <br />
                      <div className="flex justify-between w-10/12 mx-auto mb-6">
                          <Link to="/cart" className="text-center text-base tracking-widest cursor-pointer my-2 border-b-2 border-black" >Powrót do koszyka!</Link>
                          <button  type='submit' className="text-center  tracking-widest border-2 border-black cursor-pointer px-4 py-2">Dalej</button>
                      </div>
                  </form>
              </FormProvider>
        </>
    )
}

export default AddressForm
