import type { Metadata } from 'next';
import Sidebar from '../components/Shared/Sidebar';
import ProtectedRoute from '@/utils/ProtectedRoute';

export const metadata: Metadata = {
  title: 'Dashboard Beacon Insight',
  description: 'Beacon Insight App',
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      <div className="  min-h-screen">
        <div className="max-w-full mx-auto">
          <div className="grid lg:grid-cols-4 grid-cols-1">
            <Sidebar />
            {children}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
