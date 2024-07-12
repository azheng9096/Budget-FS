import { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 10rem;
  aspect-ratio: 1/1;
`;

type Props = {
  children?: ReactNode;
};

const DataCard = ({ children }: Props) => {
  return <Card className="card">{children}</Card>;
};

export default DataCard;
