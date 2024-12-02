import React from 'react';
import { PaginationContainer, PageButton, PageEllipsis } from './styles';

const Pagination = ({ currentPage, hasNextPage, onPageChange }) => {
  // Generate array of page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show page 1
    pages.push(1);

    if (currentPage <= 3) {
      // Near the start
      for (let i = 2; i <= Math.min(5, currentPage + (hasNextPage ? 1 : 0)); i++) {
        pages.push(i);
      }
    } else {
      pages.push('...');
      pages.push(currentPage - 1);
      pages.push(currentPage);
      if (hasNextPage) {
        pages.push(currentPage + 1);
      }
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <PageButton 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PageButton>

      {getPageNumbers().map((page, index) => 
        page === '...' ? (
          <PageEllipsis key={`ellipsis-${index}`}>...</PageEllipsis>
        ) : (
          <PageButton
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        )
      )}

      <PageButton 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNextPage}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;