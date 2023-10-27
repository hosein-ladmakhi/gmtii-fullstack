export type TTask = {
  completed: boolean;
  description: string;
  title: string;
  id: number;
};

export type TTasks = TTask[];

export type TFormItem = Partial<{
  name: string;
  label: string;
  control: any;
  extraContainerClass: string;
  extraFormGroupClass: string;
  extraCheckboxClass: string;
  extraLabelClass: string;
  variant: "text" | "textarea" | "checkbox";
  placeholder: string;
}>;
