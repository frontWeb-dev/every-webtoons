interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  canGoBack?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, canGoBack, hasTabBar, children }) => {
  return (
    <div>
      {/* 뒤로가기  */}
      {canGoBack && <div></div>}

      {/* 헤더 제목 */}
      {title && <div>{title}</div>}

      <div>{children}</div>

      {/* 메뉴바  */}
      {hasTabBar && <div></div>}
    </div>
  );
};

export default Layout;
