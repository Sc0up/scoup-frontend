import styled from 'styled-components';

type SpaceProps = {
  width?: number;
  height?: number;
};

export default function Space({ width, height }: SpaceProps) {
  return <SpaceContainer width={width} height={height} />;
}

const SpaceContainer = styled.div<SpaceProps>`
  width: ${({ width }) => (width ? `${width}px` : 0)};
  height: ${({ height }) => (height ? `${height}px` : 0)};
`;
