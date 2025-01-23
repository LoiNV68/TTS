import "./App.scss";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useLocation } from "react-router-dom";
import { AppHeader, AppSider, LayoutPage } from "./components/core";
import { MyRouter, PageTitleProvider } from "./routes";

function App() {
  const location = useLocation();
  const isSubPage = location.pathname.split("/").length > 2;
  const isAddPage = !isSubPage ? "share" : "page";
  return (
    <Layout className="h-screen">
      <AppSider />
      <Layout>
        <PageTitleProvider>
          {(title) => <AppHeader title={title} />}
        </PageTitleProvider>
        <Content>
          <LayoutPage type={isAddPage}>
            <MyRouter />
          </LayoutPage>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;