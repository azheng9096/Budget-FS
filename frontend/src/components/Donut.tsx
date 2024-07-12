import { ResponsivePie } from "@nivo/pie";

export type Data = {
  id: string;
  value: number;
};

type Props = {
  data: Data[];
};

const dummy = [
  {
    id: "hack",
    label: "hack",
    value: 588,
    color: "hsl(272, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 407,
    color: "hsl(184, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 252,
    color: "hsl(307, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 449,
    color: "hsl(267, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 405,
    color: "hsl(273, 70%, 50%)",
  },
];

const Donut = ({ data }: Props) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
      innerRadius={0.45}
      padAngle={5}
      cornerRadius={5}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
  );
};

export default Donut;
