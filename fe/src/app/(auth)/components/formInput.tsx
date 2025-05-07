import { ChangeEvent } from "react";

type Props = {
  id: string;
  inputType: string;
  inputName: string;
  placeholder: string;
  labelText: string;
  error?: string;
  setChange: (_value: string) => void;
};

export const FormInput = (data: Props) => {
  const { id, inputType, inputName, placeholder, setChange, labelText, error } =
    data;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={inputType}
        name={inputName}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};
