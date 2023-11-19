import { Badge, Card, CardBody, Flex, Image, Text } from '@chakra-ui/react';

export interface SmallCardButtonProps {
  buttonContent: string;
  iconPath: string;
  onClick: () => void;
}

export interface LargeCardButtonProps {
  badgeText?: string;
  badgeColor?: string;
  buttonContent: string;
  iconPath?: string;
  onClick: () => void;
}

const commonCardStyles = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  border: '1px solid var(--gray-scale-gray-400, #E3E3E8)',
  background: 'var(--system-color-white, #FFF)',
  boxShadow: 'none',
  flexShrink: '0',
  margin: '5px',
  overflow: 'hidden',
};

const iconStyles = {
  position: 'absolute',
  right: '8px',
  bottom: '8px',
  width: '36px',
  height: '36px',
};

const smallCardTextStyles = {
  position: 'absolute',
  left: '12px',
  top: '12px',
  color: 'var(--gray-scale-gray-700, #545459)',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
};

const largeCardBadgeStyles = {
  textTransform: 'none',
  fontFamily: 'Pretendard',
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  overflow: 'hidden',
  display: 'flex',
  padding: '4px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  borderRadius: '4px',
};

const largeCardTextStyles = {
  whiteSpace: 'pre-wrap',
  color: 'var(--gray-scale-gray-700, #545459)',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
};

export function SmallCardButton({
  buttonContent,
  iconPath,
  onClick,
}: SmallCardButtonProps): React.ReactNode {
  return (
    <Card
      sx={commonCardStyles}
      w="104px"
      h="100px"
      justifyContent="center"
      alignItems="center"
      gap="8px"
      flexBasis="calc(33.333% - 10px)"
      onClick={onClick}
    >
      <CardBody p="0">
        <Text sx={smallCardTextStyles}>{buttonContent}</Text>
        {iconPath && <Image sx={iconStyles} src={iconPath} alt="icon" />}
      </CardBody>
    </Card>
  );
}

export function LargeCardButton({
  badgeText,
  badgeColor,
  buttonContent,
  iconPath,
  onClick,
}: LargeCardButtonProps): React.ReactNode {
  return (
    <Card
      sx={commonCardStyles}
      w="160px"
      h="149px"
      p="16px"
      alignItems="flex-start"
      gap="17px"
      flexBasis="calc(50% - 10px)"
      onClick={onClick}
    >
      <CardBody p="0">
        <Flex
          display="flex;"
          flexDirection="column"
          alignItems="flex-start"
          gap="10px"
        >
          <Badge
            sx={largeCardBadgeStyles}
            colorScheme="badge"
            backgroundColor={`badge.background.${badgeColor}`}
            color={`badge.text.${badgeColor}`}
          >
            {badgeText}
          </Badge>
          <Text sx={largeCardTextStyles}>{buttonContent}</Text>
        </Flex>
        {iconPath && <Image sx={iconStyles} src={iconPath} alt="icon" />}
      </CardBody>
    </Card>
  );
}
