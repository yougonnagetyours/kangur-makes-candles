import React from "react";
import { useFormContext, Controller } from "react-hook-form";

function FormInput({ name, label, placeholder, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <div>
      <div>
        <Controller
          //as={TextField}
          //defaultValue=""
          name={name}
          control={control}
          label={label}
          required={required}
          error={isError}
          render={({ field }) => (
            <div className="mb-4 py-2 px-3" required>
              <label
                className="block text-sm tracking-widest font-bold mb-2"
                htmlFor={name}
              >
                {label}
              </label>
              <input
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 tracking-widest leading-tight focus:outline-none focus:shadow-outline"
                id={label}
                type="text"
                placeholder={placeholder}
                required
              />
            </div>
          )}
          //label={label}
          //fullWidth
          
        />
      </div>
    </div>
  );
}

export default FormInput;
