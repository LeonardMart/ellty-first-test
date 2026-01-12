import { useState } from "react";
import "./index.css";
//@ts-ignore
// import "@fontsource/montserrat-alternates";
import ContainerView from "./container";

interface DummyData {
  id: number;
  label: string;
}

function Home() {
  const dummyData: DummyData[] = [
    {
      id: 1,
      label: "Page 1",
    },
    {
      id: 2,
      label: "Page 2",
    },
    {
      id: 3,
      label: "Page 3",
    },
    {
      id: 4,
      label: "Page 4",
    },
    {
      id: 5,
      label: "Page 5",
    },
    {
      id: 6,
      label: "Page 6",
    },
  ];

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const allChecked = selectedIds.length === dummyData.length;

  const onSelectAll = () => {
    if (allChecked) {
      setSelectedIds([]);
    } else {
      setSelectedIds(dummyData.map((item) => item.id));
    }
  };

  const onSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <ContainerView
      data={dummyData}
      allChecked={allChecked}
      selectedIds={selectedIds}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  );
}

export default Home;
