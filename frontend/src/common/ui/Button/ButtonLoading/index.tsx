import { FC, ReactNode } from "react";
import ReactLoading from "react-loading";

interface IProps {
  variants: keyof typeof variantsClasses;
  children: ReactNode;
  loading?: boolean;
  extraClasses?: string;
}

const variantsClasses = {
  justSpinner: "",
  spinnerWithText: "absolute left-3 top-2/4 -translate-y-2/4",
};

const ButtonLoading: FC<IProps> = ({ variants, children, loading, extraClasses }) => {
  const baseClass = [variantsClasses[variants], extraClasses];

  if (!loading) return children;
  return (
    <>
      <div className={baseClass.join(" ")}>
        <ReactLoading color="#fff" height={25} width={25} type="spin" />
      </div>
      {variants === "spinnerWithText" && <>{children}</>}
    </>
  );
};

export default ButtonLoading;
