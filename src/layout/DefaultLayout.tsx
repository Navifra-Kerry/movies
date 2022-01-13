import React from 'react';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const DefaultLayout = () => {
  const platform = global && global.process ? global.process.platform : 'web';
  return (
    <div className={`app-shell platform-${platform}`}>
      <AppHeader />
      <div className="app-main">
        <AppContent />
      </div>
      <AppFooter />
    </div>
  );
};

export default DefaultLayout;
