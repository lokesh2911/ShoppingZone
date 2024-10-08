import React, { useState, useContext } from "react";

const PaginationContext = React.createContext();

export default function PaginationProvider({ children }) {
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const PageProps = { pageSize, pageNum, setPageNum, setPageSize };

  return (
    <PaginationContext.Provider value={PageProps}>
      {children}
    </PaginationContext.Provider>
  );
}

export const usePaginationContext = () => {
  return useContext(PaginationContext);
};
