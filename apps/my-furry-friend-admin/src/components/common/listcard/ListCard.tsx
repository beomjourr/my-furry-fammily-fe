import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Card, Col, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ListCardProps {
  title?: string;
  subTitle?: string;
  required?: boolean;
  show?: boolean;
  onHeaderClick?: (open: boolean) => void;
}

const ListCard = (props: React.PropsWithChildren<ListCardProps>) => {
  const {
    title,
    subTitle,
    required,
    children,
    show = false,
    onHeaderClick,
  } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleHeadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (onHeaderClick) onHeaderClick(!open);
    setOpen(!open);
  };

  return (
    <Col
      style={{
        marginBottom: 20,
      }}
      span={24}
    >
      <Card bodyStyle={{ padding: 0 }}>
        <CardHeader onClick={handleHeadClick} cardtitle={title}>
          {title && (
            <CardTitle>
              {required && <CardTitleRequired>*</CardTitleRequired>}
              {title}
            </CardTitle>
          )}
          <CardOpenButton>
            <Space>
              {!open && subTitle && (
                <Typography.Text style={{ fontSize: 13, color: '#1088ed' }}>
                  {subTitle}
                </Typography.Text>
              )}
              <Button
                type="default"
                icon={open ? <DownOutlined /> : <UpOutlined />}
              />
            </Space>
          </CardOpenButton>
        </CardHeader>
        <CardContent open={open}>{children}</CardContent>
      </Card>
    </Col>
  );
};

export default ListCard;

const CardHeader = styled.div<{ cardtitle?: string }>`
  cursor: pointer;
  align-items: center;
  padding: 20px 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: ${({ cardtitle }) => (cardtitle ? 'flex' : 'none')};
`;

const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  display: inline-block;
  flex: 1;
`;

const CardTitleRequired = styled.div`
  display: inline-block;
  font-family: SimSun, sans-serif;
  color: #ff4d4f;
  margin-right: 4px;
`;

const CardOpenButton = styled.div`
  margin-left: auto;
  padding: 16px 0;
  color: #000000;
  font-weight: 400;
  font-size: 14px;
`;

const CardContent = styled.div<{ open?: boolean }>`
  padding: 20px 32px 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;
