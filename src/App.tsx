import "./App.css";
import { Layout } from "antd";
import AppHeader from "./Layouts/Header";
import AppSider from "./Layouts/SideBar";
import { Content } from "antd/es/layout/layout";
import TableView from "./TableView";

function App() {
  return (
    <Layout className="h-screen">
      <AppSider />
      <Layout>
        <AppHeader title="DashBoard" />
        <Content>
          <div className="mx-5 px-5">
            <TableView />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
