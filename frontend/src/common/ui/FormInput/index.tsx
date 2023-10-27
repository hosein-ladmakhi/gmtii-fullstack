import { FC } from "react";
import { CheckBoxKit, TextFieldKit } from "..";
import { TFormItem } from "../../../types";

export interface IFormInputProps extends TFormItem {
  name: string;
  label: string;
  control: any;
  extraContainerClass: string;
  extraFormGroupClass: string;
  extraCheckboxClass: string;
  extraLabelClass: string;
  variant: "text" | "textarea" | "checkbox";
  placeholder: string;
}

const FormInput: FC<IFormInputProps> = ({
  control,
  extraCheckboxClass,
  extraContainerClass,
  extraFormGroupClass,
  extraLabelClass,
  label,
  name,
  placeholder,
  variant,
}) => {
  switch (variant) {
    case "checkbox":
      return (
        <CheckBoxKit
          control={control}
          label={label!}
          name={name!}
          extraCheckboxClass={extraCheckboxClass}
          extraContainerClass={extraContainerClass}
          extraFormGroupClass={extraFormGroupClass}
          extraLabelClass={extraLabelClass}
        />
      );
    case "text":
      return (
        <TextFieldKit
          control={control}
          label={label!}
          placeholder={placeholder!}
          name={name!}
          variant="text"
          extraContainerClass={extraContainerClass}
        />
      );

    case "textarea":
      return (
        <TextFieldKit
          control={control}
          label={label!}
          placeholder={placeholder!}
          name={name!}
          variant="textarea"
          extraContainerClass={extraContainerClass}
        />
      );

    default:
      return <></>;
  }
};

export default FormInput;
