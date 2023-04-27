import { Outlet } from "react-router-dom";

import { TablePageMenu } from "./TablePageMenu";

import "./TablePage.styles.css";

export function TableFragment() {
  return (
    <div class="table_page_content">
      <TablePageMenu />
      <Outlet />
    </div>
  );
}
