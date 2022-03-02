/*
 * Content Block - PDF
 *
 * @jsxImportSource @emotion/react
 */

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Grid, Box, Typography, ButtonGroup, Button } from '@mui/material';
import styles from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const PDF = ({ url, caption, alternativeText }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const multiPage = numPages > 1;

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    };
    
    const previousPage = () => {
        changePage(-1);
    };
    
    const nextPage = () => {
        changePage(1);
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} align="center">
                <Document 
                    css={styles.pdfContainer}
                    file={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                        pageNumber={pageNumber}
                        height="700"
                    />
                </Document>

                {multiPage &&
                    <Box>
                        <Typography>
                            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                        </Typography>

                        <ButtonGroup>
                            <Button
                                color="primary"
                                variant="contained"
                                disabled={pageNumber <= 1}
                                onClick={previousPage}
                            >
                                Previous
                            </Button>

                            <Button
                                color="primary"
                                variant="contained"
                                disabled={pageNumber >= numPages}
                                onClick={nextPage}
                            >
                                Next
                            </Button>
                        </ButtonGroup>
                    </Box>
                }
            </Grid>
        </Grid>
    )
};

export default PDF;