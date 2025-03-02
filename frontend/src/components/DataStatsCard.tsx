import styled from "styled-components";
import DataCard from "./DataCard";

type Props = {
  header: string;
  icon: string;
  data: string;
  dataColor?: string;
};

const ContentContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DataStatsCard = ({ header, icon, data, dataColor }: Props) => {
  return (
    <DataCard>
      <ContentContainer>
        <div>
          <span
            className="material-symbols-rounded"
            style={{ color: "var(--primary-text)" }}
          >
            {icon}
          </span>
          <h4>{header}</h4>
        </div>
        <h3 style={{ color: dataColor }}>{data}</h3>
      </ContentContainer>
    </DataCard>
  );
};

export default DataStatsCard;
