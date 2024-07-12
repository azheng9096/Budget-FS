import { ResponsivePie } from "@nivo/pie";

export type Data = {
  id: string;
  value: number;
};

type Props = {
  data: Data[];
  showRadialLink?: boolean;
};

const Donut = ({ data, showRadialLink = false }: Props) => {
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
      enableArcLinkLabels={showRadialLink}
    />
  );
};

export default Donut;
