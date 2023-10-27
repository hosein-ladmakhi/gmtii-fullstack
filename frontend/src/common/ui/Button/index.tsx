import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import ButtonLoading from "./ButtonLoading";

interface IProps {
  variant: keyof typeof variantClass;
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
  extraClasses?: string;
  children: ReactNode;
  loading?: boolean;
  loadingVariants?: "justSpinner" | "spinnerWithText";
}

const spacingClass = "px-3 mt-4 sm:mt-0 py-2 sm:px-5";

const fontSizeClass = "sm:text-sm text-xs";

const variantClass = {
  primary: "bg-blue-900 text-white hover:bg-blue-600",
  error: "bg-red-600 hover:bg-red-400 text-white",
};

const Button: FC<IProps> = ({
  children,
  extraClasses,
  href,
  variant,
  onClick,
  loading,
  loadingVariants,
}) => {
  const baseClass = [
    "inline-block w-max text-center rounded transition relative",
    spacingClass,
    fontSizeClass,
    variantClass[variant],
    extraClasses,
  ];

  const customizedChildren = (
    <ButtonLoading variants={loadingVariants || "justSpinner"} loading={loading}>
      {children}
    </ButtonLoading>
  );

  if (href) {
    return (
      <Link className={baseClass.join(" ")} to={href}>
        {customizedChildren}
      </Link>
    );
  }
  return (
    <button disabled={loading} onClick={onClick} className={baseClass.join(" ")}>
      {customizedChildren}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
