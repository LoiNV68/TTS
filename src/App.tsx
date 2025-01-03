import "./App.scss";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { AppHeader, AppSider } from "./components/core";
import { MyRouter, PageTitleProvider } from "./routes";

function App() {
  return (
    <Layout className="h-screen">
      <AppSider />
      <Layout>
        <PageTitleProvider>
          {(title) => <AppHeader title={title} />}
        </PageTitleProvider>
        <Content>
          <div className="shared-layout-container">
            <MyRouter />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;