import { toast } from "react-toastify";

interface TNotification {
  action: Promise<any>;
  actionName: string;
}

export const notification = ({ action, actionName }: TNotification) => {
  return toast.promise(action, {
    pending: `The Created ${actionName} Is Loading ...`,
    success: {
      render: (): string => {
        return `The ${actionName} Created ...`;
      },
      className: "bg-green-200 text-green-600",
    },
    error: {
      render: (): string => {
        return `The ${actionName} Failed ...`;
      },
      className: "bg-red-200 text-red-800",
    },
  });
};
