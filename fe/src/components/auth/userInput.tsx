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

export const UserInput = (data: Props) => {
  const { id, inputType, inputName, placeholder, setChange, labelText, error } =
    data;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-[14px] text-[#09090B]"
      >
        {labelText}
      </label>
      <input
        id={id}
        type={inputType}
        name={inputName}
        placeholder={placeholder}
        onChange={handleOnChange}
        className="flex px-3 py-2 items-center rounded-md border solid border-[#E4E4E7] bg-[#FFF]"
      />
      {error && (
        <p className="text-xs leading-[16px] text-[#EF4444]">{error}</p>
      )}
    </div>
  );
};
