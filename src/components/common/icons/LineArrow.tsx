import styled from 'styled-components';
import { ReactComponent as LineArrowLeftSvg } from '../../../assets/images/icons/arrow/line-left.svg';
import { ReactComponent as LineArrowRightSvg } from '../../../assets/images/icons/arrow/line-right.svg';

type Direction = 'left' | 'right';

export default function LineArrow({ direction }: { direction: Direction }) {
  return <>{direction === 'left' ? <LineArrowLeft /> : <LineArrowRight />}</>;
}

const LineArrowLeft = styled(LineArrowLeftSvg)``;

const LineArrowRight = styled(LineArrowRightSvg)``;
