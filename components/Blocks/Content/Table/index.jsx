/*
 * Content Block - Table
 */

import defaultSettings from './settings';
import { TableContainer, Table as MuiTable, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import styles from './styles';

const Table = ({ userSettings, name, head, rows }) => {
    const settings = { ...defaultSettings, ...userSettings };

    return (
        <TableContainer component={Paper}>
            <MuiTable size={settings.table_size} aria-label={name || "Table"}>
                {settings.show_head && head.columns && head.columns.length > 0 && (
                    <TableHead sx={styles.table.head}>
                        {settings.show_name && name &&
                            <TableRow>
                                <TableCell sx={styles.table.header} align="center" colSpan={head.columns.length}>{name}</TableCell>
                            </TableRow>
                        }

                        <TableRow>
                            {head.columns.map(column => (
                                <TableCell sx={styles.table.header}>{column.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                )}

                {rows && rows.length > 0 && (
                    <TableBody sx={styles.table.body}>
                        {rows.map(row => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {row.columns && row.columns.length > 0 && row.columns.map(cell => (
                                    <TableCell sx={styles.table.data} align={settings.align_cells}>{cell.value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                )}
            </MuiTable>
        </TableContainer>
    )
};

export default Table;