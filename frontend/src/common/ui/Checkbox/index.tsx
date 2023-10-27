import { FC } from "react";
import { Controller } from "react-hook-form";

interface IProps {
  name: string;
  label: string;
  control: any;
  extraContainerClass?: string;
  extraFormGroupClass?: string;
  extraCheckboxClass?: string;
  extraLabelClass?: string;
}

const containerClass = "w-full my-3";

const formGroupClass = "flex justify-start items-center";

const checkboxClass = "mr-2 h-5 w-5";

const labelClass = "text-base text-gray-800";

const Checkbox: FC<IProps> = ({
  control,
  label,
  name,
  extraCheckboxClass,
  extraContainerClass,
  extraFormGroupClass,
  extraLabelClass,
}) => {
  const baseContainerClass = [containerClass, extraContainerClass];
  const baseFormGroupClass = [formGroupClass, extraFormGroupClass];
  const baseCheckboxClass = [checkboxClass, extraCheckboxClass];
  const baseLabelClass = [labelClass, extraLabelClass];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className={baseContainerClass.join(" ")}>
            <div className={baseFormGroupClass.join(" ")}>
              <input
                {...field}
                type="checkbox"
                checked={field.value}
                className={baseCheckboxClass.join(" ")}
              />
              <label className={baseLabelClass.join(" ")}>{label}</label>
            </div>
          </div>
        );
      }}
    />
  );
};

Checkbox.defaultProps = {
  extraCheckboxClass: "",
  extraContainerClass: "",
  extraFormGroupClass: "",
  extraLabelClass: "",
};

export default Checkbox;
