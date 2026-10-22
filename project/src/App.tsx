import { useState, Suspense, lazy } from 'react';
import { ViewKey } from '@/types';
import { AppProvider } from '@/store';
import { Sidebar, TopBar } from '@/components/Sidebar';

const Dashboard = lazy(() => import('@/views/Dashboard'));
const Schedule = lazy(() => import('@/views/Schedule'));
const Tutor = lazy(() => import('@/views/Tutor'));
const Studio = lazy(() => import('@/views/Studio'));
const Transcriber = lazy(() => import('@/views/Transcriber'));
const SettingsView = lazy(() => import('@/views/Settings'));

type ViewComponent = React.ComponentType<{ onNavigate?: (v: ViewKey) => void }>;

const VIEWS: Record<ViewKey, ViewComponent> = {
  dashboard: Dashboard as ViewComponent,
  schedule: Schedule as ViewComponent,
  tutor: Tutor as ViewComponent,
  studio: Studio as ViewComponent,
  transcriber: Transcriber as ViewComponent,
  settings: SettingsView as ViewComponent,
};

function Shell() {
  const [view, setView] = useState<ViewKey>('dashboard');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const ViewComponent = VIEWS[view];

  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar
        current={view}
        onNavigate={setView}
        mobileOpen={mobileNavOpen}
        onCloseMobile={() => setMobileNavOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar view={view} onMenuClick={() => setMobileNavOpen(true)} />
        <main className="flex-1 p-4 lg:p-6 max-w-7xl w-full mx-auto">
          <Suspense fallback={<div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" /></div>}>
            <div key={view} className="animate-fadeIn">
              <ViewComponent onNavigate={setView} />
            </div>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
