import styled from 'styled-components';
import { ReactComponent as SolidArrowLeftSvg } from '../../../assets/images/icons/arrow/solid-left.svg';
import { ReactComponent as SolidArrowRightSvg } from '../../../assets/images/icons/arrow/solid-right.svg';

type Direction = 'left' | 'right';

export default function SolidArrow({ direction }: { direction: Direction }) {
  return <>{direction === 'left' ? <SolidArrowLeft /> : <SolidArrowRight />}</>;
}

const SolidArrowLeft = styled(SolidArrowLeftSvg)``;

const SolidArrowRight = styled(SolidArrowRightSvg)``;
