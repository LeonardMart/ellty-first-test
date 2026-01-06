import type { FC } from "react";
import { useEffect, useState } from "react";
import CheckIcon from "../icons/check-icon/CheckIcon";

interface ChecklistProps {
  checked: boolean;
}

const Checklist: FC<ChecklistProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.checked);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  return (
      <div
        onClick={() => setChecked((prev) => !prev)}
        className={`group cursor-pointer border rounded 
          flex items-center justify-center w-5.75 h-5.75 
          transition-all duration-150 
          group-active:ring-[3px] group-active:ring-[#2469F6]/10
        ${
          checked
            ? "bg-[#2469F6] border-[#2469F6] group-hover:bg-[#5087F8]"
            : "border-[#CDCDCD] group-hover:border-[#BDBDBD]"
        }
      `}
      >
        <CheckIcon
          className={`
          w-3.5 h-3.5 transition
          ${
            checked
              ? "text-white"
              : "opacity-0 group-hover:opacity-100 group-hover:text-gray-400"
          }
        `}
        />
      </div>
  );
};

export default Checklist;
