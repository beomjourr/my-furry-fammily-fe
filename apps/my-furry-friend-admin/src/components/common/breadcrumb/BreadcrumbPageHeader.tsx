import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { matchPath, useLocation } from 'react-router-dom';
import { ReactNode, useMemo } from 'react';
import { defaultMenuItems } from '../../../routes/routes.tsx';

const BreadcrumbPageHeader = () => {
  const location = useLocation();

  const flattenRoutes = defaultMenuItems.reduce(
    (prev: { key: string; label: string; icon?: ReactNode }[], curr) => {
      prev.push({ key: curr.key, label: curr.label, icon: curr.icon });
      if (curr.children) {
        prev.push(
          ...curr.children.map((child) => ({
            key: child.key,
            label: child.label,
          })),
        );
      }
      return prev;
    },
    [],
  );

  const breadcrumbRoutes: any[] = useMemo(() => {
    const ret = [];
    const parentPath = location.pathname.split('/').slice(0, 2).join('/');
    const parentRoute = flattenRoutes.find((r) => matchPath(r.key, parentPath));
    if (parentRoute) {
      ret.push({
        icon: parentRoute.icon,
        title: parentRoute.label || parentRoute.key,
      });
    }

    const childRoute = flattenRoutes.find((r) =>
      matchPath(r.key, location.pathname),
    );

    if (childRoute) {
      ret.push({
        icon: childRoute.icon,
        title: childRoute.label || childRoute.key,
      });
    }
    return ret;
  }, [flattenRoutes, location.pathname]);

  return (
    <Wrapper>
      <Icon>{breadcrumbRoutes[0]?.icon}</Icon>
      <BreadcrumbStyled
        separator=""
        items={breadcrumbRoutes.map((r) => ({ title: r.title }))}
      />
    </Wrapper>
  );
};

export default BreadcrumbPageHeader;

const Wrapper = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0 0 10px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const BreadcrumbStyled = styled(Breadcrumb)`
  ol {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 22px;

    li {
      font-size: 12px;
    }

    li:last-child {
      font-size: 21px;
      font-weight: 600;
      margin-bottom: 5px;
    }
  }
`;
