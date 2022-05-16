import * as React from 'react';
import {useEffect, useState} from "react";
import {fetchItems} from "../../API/requestsPunkAPI";
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from "@mui/material";
import GetTableList from "../../components/GetTableList/GetTableList";
import {ListPageWrapper, TableHeadBG, TablePaginationBG, TableRowBG} from "./ListPageStyles";

const ListPage = () => {

    const [items, setItems] = useState([])
    const [orderDirection, setOrderDirection] = useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = useState('id')
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [totalCount] = useState(325)
    const [totalPages, setTotalPages] = useState(0)


    const handleRequestSort = (event, property) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value), 10)
        setPage(0)
    }

    useEffect(() => {
        fetchItems(setItems, rowsPerPage, page, setTotalPages, totalCount, totalPages)
    }, [page, rowsPerPage])

    return (
        <ListPageWrapper>
            <TableContainer component={Paper} sx={TableRowBG}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell key='id' sx={TableHeadBG}>
                                <TableSortLabel
                                    active={valueToOrderBy === 'id'}
                                    direction={valueToOrderBy === 'id' ? orderDirection : 'asc'}
                                    onClick={createSortHandler('id')}
                                >
                                    ID
                                </TableSortLabel>
                            </TableCell>
                            <TableCell key='name' sx={TableHeadBG}>
                                <TableSortLabel
                                    active={valueToOrderBy === 'name'}
                                    direction={valueToOrderBy === 'name' ? orderDirection : 'asc'}
                                    onClick={createSortHandler('name')}
                                >
                                    Beer name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right" key='tagline' sx={TableHeadBG}>
                                <TableSortLabel
                                    active={valueToOrderBy === 'tagline'}
                                    direction={valueToOrderBy === 'tagline' ? orderDirection : 'asc'}
                                    onClick={createSortHandler('tagline')}
                                >
                                    Tagline
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right" key='abv' sx={TableHeadBG}>
                                <TableSortLabel
                                    active={valueToOrderBy === 'abv'}
                                    direction={valueToOrderBy === 'abv' ? orderDirection : 'asc'}
                                    onClick={createSortHandler('abv')}
                                >
                                    ABV
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right" key='ibu' sx={TableHeadBG}>
                                <TableSortLabel
                                    active={valueToOrderBy === 'ibu'}
                                    direction={valueToOrderBy === 'ibu' ? orderDirection : 'asc'}
                                    onClick={createSortHandler('ibu')}
                                >
                                    IBU
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right" key='srm' sx={TableHeadBG}>
                                <TableSortLabel
                                    active={valueToOrderBy === 'srm'}
                                    direction={valueToOrderBy === 'srm' ? orderDirection : 'asc'}
                                    onClick={createSortHandler('srm')}
                                >
                                    SRM
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <GetTableList items={items}
                                  orderDirection={orderDirection}
                                  valueToOrderBy={valueToOrderBy}
                                  page={page}
                                  rowsPerPage={rowsPerPage}
                                  totalPages={totalPages}
                    />
                </Table>
            </TableContainer>
            <TablePagination
                count={totalCount}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 25, 50]}
                component='div'
                sx={TablePaginationBG}
            />
        </ListPageWrapper>
    );
}
export default ListPage;