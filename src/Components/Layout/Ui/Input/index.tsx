import { useState } from "react";

type Propstypes = {
  label?: string;
  name: string;
  type: string;
};

const InputComponnet = (props: Propstypes) => {
  const { label, name, type} = props;
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === "") {
      setIsFocused(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
          <div className="relative mb-8">
            <input
              type={type}
              className="bg-grey pr-[120px] pl-[15px] py-[15px] focus:outline-none focus:border-primary focus:border-2 transition-colors peer rounded-lg duration-500"
              autoComplete="off"
              id={name}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <label
              className={`absolute left-3 bottom-4 cursor-text transition-all duration-500 ${
                isFocused || inputValue.trim() !== ""
                  ? "-top-4 text-primary text-xs"
                  : ""
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          </div>
        </div>
  );
};

export default InputComponnet;
