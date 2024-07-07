'use client'
import { changePage, changeTotalPages, paginationState, useAppDispatch, useAppSelector } from "@/redux"
import { Pagination as RootPagination } from "@mui/material"
import { ChangeEvent, useEffect } from "react";
import paginationStyle from './pagination.module.scss';

export default function Pagination({pages}: {pages: number}) {
  const {page, totalPages} = useAppSelector(paginationState);
  const dispatch = useAppDispatch();
  const handlePage = (e: ChangeEvent<unknown>, page: number): void => {
    dispatch(changePage(page));
  }
  useEffect(() => {
    dispatch(changeTotalPages(pages));
  }, [pages]);
  return (
    <RootPagination
      variant="outlined"
      page={page}
      count={totalPages}
      shape="rounded"
      hideNextButton
      hidePrevButton
      onChange={handlePage}
      classes={{
        ul: paginationStyle['pagination-list'],
      }}
    />
  )
}
