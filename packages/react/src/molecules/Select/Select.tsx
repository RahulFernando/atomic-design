import React, { useEffect, useRef, useState } from "react";
import Text from "../../atoms/Text";

interface Option {
  label: string;
  value: any;
}

interface RenderOptionProps {
  isSelected: boolean;
  option: Option;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  label: string;
  options?: Option[];
  onChange?: (option: Option, index: number) => void;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  label,
  options = [],
  onChange,
  renderOption,
}) => {
  const labelRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, []);

  const onLabelClick = () => setIsOpen((prev) => !prev);

  const onOptionSelected = (option: Option, index: number) => {
    setIsOpen(false);
    setSelectedIndex(index);
    if (onChange) onChange(option, index);
  };

  let selectedOption = null;

  if (selectedIndex !== null) selectedOption = options[selectedIndex];

  return (
    <div className="dse-select">
      <button
        ref={labelRef}
        className="dse-select__label"
        onClick={() => onLabelClick()}
      >
        <Text>{selectedIndex === null ? label : selectedOption?.label}</Text>
        <svg
          width="1rem"
          height="1rem"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--close"
          } w-6 h-6`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <ul style={{ top: overlayTop }} className="dse-select__overlay">
          {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;

            const renderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => {
                return {
                  key: option.label,
                  className: `dse-select__option ${
                    isSelected ? "dse-select__option--selected" : ""
                  }`,
                  onClick: () => onOptionSelected(option, optionIndex),
                  ...overrideProps,
                };
              },
            };

            if (renderOption) {
              return renderOption(renderOptionProps);
            }

            return (
              <li
                className={`dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                }`}
                key={option.value}
                onClick={() => onOptionSelected(option, optionIndex)}
              >
                <Text>{option.label}</Text>
                {isSelected && (
                  <svg
                    width="1rem"
                    height="1rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
