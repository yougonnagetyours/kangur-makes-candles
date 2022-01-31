import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
//import FormInput from "./FormInput";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const { register, handleSubmit, formState: { errors }} = useForm();

  // const countries = Object.entries(shippingCountries).map(([code, name]) => ({
  //   id: code,
  //   label: name
  // }));
  // const subdivisions = Object.entries(
  //   shippingSubdivisions
  // ).map(([code, name]) => ({ id: code, label: name }));

  // const options = shippingOptions.map((sO) => ({
  //   id: sO.id,
  //   label: `${sO.description} - ${sO.price.formatted}`
  // }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  return (
    <div className="sm:max-w-screen-sm mx-auto">
      <div className="text-2xl mt-10 mb-4 text-center tracking-widest">
        Adres dostawy
      </div>
      <FormProvider>
        <form
          onSubmit={handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption
            })
          )}
        >
          <div className="overflow-hidden">
            <div className="mx-4 my-4">
              <div className="sm:flex">
                <div className="w-full">
                  <div className="mb-4 py-2 px-3">
                    <label
                      className="block text-sm tracking-widest font-bold mb-2"
                      htmlFor="firstName"
                    >
                      Imie
                    </label>
                    <input
                      type="text"
                      placeholder="Jan"
                      id="firstName"
                      name="firstName"
                      className="appearance-none border border-black w-full py-2 px-3 text-gray-700 tracking-widest leading-tight focus:outline-none focus:shadow-outline"
                      {...register("firstName", { required: true })}
                    />
                    <div className="text-red-400 tracking-widest mt-4 -mb-4">
                      {errors.firstName && "Wypełnij to pole !"}
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-4 py-2 px-3">
                    <label
                      className="block text-sm tracking-widest font-bold mb-2"
                      htmlFor="lastName"
                    >
                      Nazwisko
                    </label>
                    <input
                      type="text"
                      placeholder="Kowalski"
                      id="lastName"
                      name="lastName"
                      className="appearance-none border border-black w-full py-2 px-3 text-gray-700 tracking-widest leading-tight focus:outline-none focus:shadow-outline"
                      {...register("lastName", { required: true })}
                    />
                    <div className="text-red-400 tracking-widest mt-4 -mb-4">
                      {errors.lastName && "Wypełnij to pole !"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="mb-4 py-2 px-3">
                  <label
                    className="block text-sm tracking-widest font-bold mb-2"
                    htmlFor="address"
                  >
                    Adres
                  </label>
                  <input
                    type="text"
                    placeholder="Adres zamieszkania"
                    id="address"
                    name="address"
                    className="appearance-none border border-black w-full py-2 px-3 text-gray-700 tracking-widest leading-tight focus:outline-none focus:shadow-outline"
                    {...register("address", { required: true })}
                  />
                  <div className="text-red-400 tracking-widest mt-4 -mb-4">
                    {errors.address && "Wypełnij to pole !"}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="mb-4 py-2 px-3">
                  <label
                    className="block text-sm tracking-widest font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jan.kowalski@dzimejl.com"
                    id="email"
                    name="email"
                    className="appearance-none border border-black w-full py-2 px-3 text-gray-700 tracking-widest leading-tight focus:outline-none focus:shadow-outline"
                    {...register("email", { required: true })}
                  />
                  <div className="text-red-400 tracking-widest mt-4 -mb-4">
                    {errors.email && "Wypełnij to pole !"}
                  </div>
                </div>
              </div>
              <div className="sm:flex">
                <div className="w-full">
                  <div className="mb-4 py-2 px-3">
                    <label
                      className="block text-sm tracking-widest font-bold mb-2"
                      htmlFor="city"
                    >
                      Miasto
                    </label>
                    <input
                      type="text"
                      placeholder="Chrząszczyżewoszyce"
                      id="city"
                      name="city"
                      className="appearance-none border border-black w-full py-2 px-3 text-gray-700 tracking-widest leading-tight focus:outline-none focus:shadow-outline"
                      {...register("city", { required: true })}
                    />
                    <div className="text-red-400 tracking-widest mt-4 -mb-4">
                      {errors.city && "Wypełnij to pole !"}
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-4 py-2 px-3">
                    <label
                      className="block text-sm tracking-widest font-bold mb-2"
                      htmlFor="zip"
                    >
                      Kod pocztowy
                    </label>
                    <input
                      type="text"
                      placeholder="00-258"
                      id="zip"
                      name="zip"
                      className="appearance-none border border-black w-full py-2 px-3 text-gray-700 tracking-widest leading-tight focus:outline-none focus:shadow-outline"
                      {...register("zip", { required: true })}
                    />
                    <div className="text-red-400 tracking-widest mt-4 -mb-4">
                      {errors.zip && "Wypełnij to pole !"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 py-2 px-3">
                <label
                  htmlFor="country"
                  className="block text-sm tracking-widest font-bold mb-2"
                >
                  Kraj
                </label>
                <select
                  value={shippingCountry}
                  onChange={(e) => setShippingCountry(e.target.value)}
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 tracking-widest border border-black text-gray-700 bg-white focus:outline-none"
                >
                  {Object.entries(shippingCountries)
                    .map(([code, name]) => ({ id: code, label: name }))
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </select>
              </div>
              <div className="py-2 px-3">
                <label
                  htmlFor="delivery-option"
                  className="block text-sm tracking-widest font-bold mb-2"
                >
                  Opcje dostawy
                </label>
                <select
                  value={shippingOption}
                  onChange={(e) => setShippingOption(e.target.value)}
                  id="delivery-option"
                  name="deliveryOption"
                  autoComplete=""
                  className="mt-1 block w-full py-2 px-3 tracking-widest border border-black text-gray-700 bg-white focus:outline-none"
                >
                  {shippingOptions
                    .map((sO) => ({
                      id: sO.id,
                      label: `${sO.description} - (${sO.price.formatted} zł)`
                    }))
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className="flex justify-between mx-6 mb-6">
            <Link
              to="/cart"
              className="text-center text-base tracking-widest cursor-pointer my-2 border-b-2 border-black"
            >
              Powrót do koszyka!
            </Link>
            <button
              type="submit"
              className="text-center tracking-widest border-2 border-black cursor-pointer px-4 py-2"
            >
              Dalej
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
