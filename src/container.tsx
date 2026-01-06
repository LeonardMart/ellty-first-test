import type { FC } from "react";
import Checklist from "./components/checklist/Checklist";
import Row from "./components/row/Row";
import Button from "./components/button/Button";

interface ContainerViewProps {
  data: { id: number; label: string }[];
  selectedIds: number[];
  allChecked: boolean;
  onSelectAll: () => void;
  onSelect: (id: number) => void;
}

const ContainerView: FC<ContainerViewProps> = ({
  data,
  allChecked,
  selectedIds,
  onSelect,
  onSelectAll,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="
          w-92.5 h-81.5
          border border-[#EEEEEE]
          rounded-md
          shadow-[0px_8px_15px_0px_#1414141F,0px_0px_4px_0px_#1414141A]
          flex flex-col
          py-2.5
        "
      >
        <div
          className="group w-full justify-between flex items-center cursor-pointer h-10.5 pl-5.5 pr-3.75"
          onClick={onSelectAll}
        >
          <div className="text-sm">All Pages</div>
          <div className="px-1.5 pt-[6.5px] pb-[5.5px]">
            <Checklist checked={allChecked} />
          </div>
        </div>

        <div className="w-full px-3.75 py-2.5">
          <div className="w-full h-px bg-[#CDCDCD]" />
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {data.map((item) => (
            <Row
              key={item.id}
              data={item}
              checked={selectedIds.includes(item.id)}
              onSelect={onSelect}
            />
          ))}
        </div>

        <div className="w-full px-3.75 py-2.5">
          <div className="w-full h-px bg-[#CDCDCD]" />
        </div>

        <div className="w-full px-3.75 py-2.5">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ContainerView;
