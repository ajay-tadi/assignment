import React from "react";

const TextInput = ({
  label,
  type,
  name,
  required,
  value,
  error,
  handleChange,
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-300">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full mt-1 p-2 rounded bg-zinc-700 text-white focus:ring-2 focus:ring-indigo-500"
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
