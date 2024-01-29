import { Navigate } from 'react-router-dom';
import { getMenuItems } from '../routes/routes.tsx';
import ErrorLayout from '../components/layout/ErrorLayout.tsx';

function Home() {
  const items = getMenuItems();
  const navigatePath = items[0]?.children[0]?.key;

  if (navigatePath) {
    return <Navigate to={navigatePath as string} replace />;
  }
  return <ErrorLayout />;
}

export default Home;
