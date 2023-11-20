import { useMemo } from 'react';
import { MapMarker, MapMarkerProps } from 'react-kakao-maps-sdk';
import PinImage from '@my-furry-family/images/map_pin.svg';
import PinImage2 from '@my-furry-family/images/map_pin2.svg';
import PinImage3 from '@my-furry-family/images/map_pin3.svg';
import ActivePinImage from '@my-furry-family/images/map_pin_selected.svg';
import ActivePinImage2 from '@my-furry-family/images/map_pin_selected2.svg';
import ActivePinImage3 from '@my-furry-family/images/map_pin_selected3.svg';

interface Props extends Omit<MapMarkerProps, 'image' | 'onClick'> {
  id: number;
  type: '1' | '2' | '3';
  isActive: boolean;
  onClick?: (id: number) => void;
}

const imageMeta = {
  '1': { normal: PinImage, active: ActivePinImage },
  '2': { normal: PinImage2, active: ActivePinImage2 },
  '3': { normal: PinImage3, active: ActivePinImage3 },
};

export function Marker(props: Props) {
  const { id, type, isActive, onClick, ...otherProps } = props;
  const image = useMemo(() => {
    const imageData = isActive
      ? imageMeta[type].active
      : imageMeta[type].normal;
    const size = isActive
      ? { width: 48, height: 48 }
      : { width: 36, height: 36 };
    return { src: imageData.src, size };
  }, [type, isActive]);

  return (
    <MapMarker {...otherProps} image={image} onClick={() => onClick?.(id)} />
  );
}
