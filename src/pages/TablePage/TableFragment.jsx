import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { requestTableByIdActionCreator } from './../../redux/actions/actionCreators'

import { TablePageMenu } from "./TablePageMenu";

import "./TablePage.styles.css";

export function TableFragment() {
  
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(requestTableByIdActionCreator(id))
  }, [id, dispatch])

  return (
    <div class="table_page_content">
      <TablePageMenu />
      <Outlet />
    </div>
  );
}
