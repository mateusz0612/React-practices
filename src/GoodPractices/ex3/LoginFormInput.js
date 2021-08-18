import React from "react";

export const LoginFormInput = ({
  labelClassName,
  inputClassName,
  type,
  id,
  name,
  value,
  onChange,
  children
}) => {
  return (
    <label className={labelClassName}>
      {children}
      <input
        className={inputClassName}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
