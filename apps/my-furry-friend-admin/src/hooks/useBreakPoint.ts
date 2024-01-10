import { Breakpoint, Grid } from 'antd';

const { useBreakpoint: useAntdBreakpoint } = Grid;

const useBreakPoint = (breakpoint: Breakpoint) => {
  const screens = useAntdBreakpoint();

  return screens[breakpoint];
};

export default useBreakPoint;
