import { useMemo } from 'react';
import { MapMarker, MapMarkerProps } from 'react-kakao-maps-sdk';
import PinImage from '@my-furry-family/images/map_pin.svg';
import PinImage3 from '@my-furry-family/images/map_pin3.svg';
import ActivePinImage from '@my-furry-family/images/map_pin_selected.svg';
import ActivePinImage3 from '@my-furry-family/images/map_pin_selected3.svg';
import CurrentPinImage from '@my-furry-family/images/map_spot.svg';

interface Props extends Omit<MapMarkerProps, 'image' | 'onClick'> {
  id?: string;
  onClick?: () => void;
  isActive?: boolean;
  isCooperation?: boolean;
}

const imageMeta = (isCooperation: boolean) => {
  if (isCooperation) {
    return { normal: PinImage, active: ActivePinImage };
  }
  return { normal: PinImage3, active: ActivePinImage3 };
};

export function Marker(props: Props) {
  const { id, isCooperation, isActive, onClick, ...otherProps } = props;
  const image = useMemo(() => {
    if (typeof isCooperation === 'boolean') {
      const imageData = isActive
        ? imageMeta(isCooperation).active
        : imageMeta(isCooperation).normal;

      const size = isActive
        ? { width: 48, height: 48 }
        : { width: 36, height: 36 };

      return {
        src: imageData.src,
        size,
      };
    }

    return {
      src: CurrentPinImage.src,
      size: { width: 36, height: 36 },
    };
  }, [isCooperation, isActive]);

  return <MapMarker {...otherProps} image={image} onClick={onClick} />;
}
