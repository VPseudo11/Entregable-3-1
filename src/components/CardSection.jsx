import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import ResidentCard from './ResidentCard'
import './Pagination.css'

const CardSection = ({ residents }) => {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(residents.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(residents.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, residents]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % residents.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <CardSectionContainer>
                {
                    currentItems.map(url => (
                        <ResidentCard key={url} url={url} />
                    ))
                }
            </CardSectionContainer>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </>
    )
}


const CardSectionContainer = styled.section`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;
`

export default CardSection