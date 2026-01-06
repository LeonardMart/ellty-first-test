import type { FC } from "react";
import Checklist from "../checklist/Checklist";

interface DummyData {
  id: number;
  label: string;
}

interface RowProps {
  data: DummyData;
  checked: boolean;
  onSelect: (id: number) => void;
}

const Row: FC<RowProps> = (props) => {
  return (
    <div
      className="group w-full justify-between flex items-center cursor-pointer h-10.5 pl-5.5 pr-3.75"
      onClick={() => props.onSelect(props.data.id)}
    >
      <div className="text-sm">{props.data.label}</div>
      <div className="px-1.5 pt-[6.5px] pb-[5.5px]">
        <Checklist checked={props.checked} />
      </div>
    </div>
  );
};

export default Row;
