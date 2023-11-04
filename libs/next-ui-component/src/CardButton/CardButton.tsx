import { Badge, Card, CardBody, Image, Text } from '@chakra-ui/react';
import styles from './CardButton.module.scss';

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

export function SmallCardButton({
  buttonContent,
  iconPath,
}: SmallCardButtonProps): React.ReactNode {
  return (
    <Card className={`${styles.small} ${styles.container}`}>
      <CardBody className={styles.cardBody}>
        <Text className={styles.buttonContent}>{buttonContent}</Text>
        {iconPath && (
          <Image className={styles.icon} src={iconPath} alt="icon" />
        )}
      </CardBody>
    </Card>
  );
}

export function LargeCardButton({
  badgeText,
  badgeColor,
  buttonContent,
  iconPath,
}: LargeCardButtonProps): React.ReactNode {
  return (
    <Card className={`${styles.large} ${styles.container}`}>
      <CardBody className={styles.cardBody}>
        <div className={styles.contentWrap}>
          <Badge
            colorScheme={badgeColor}
            className={styles.badge}
            textTransform="none"
          >
            {badgeText}
          </Badge>
          <Text className={styles.buttonContent}>{buttonContent}</Text>
        </div>
        {iconPath && (
          <Image className={styles.icon} src={iconPath} alt="icon" />
        )}
      </CardBody>
    </Card>
  );
}
