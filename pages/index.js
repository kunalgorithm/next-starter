import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { Grid, Row, Col, Alert, Button, Typography } from '@smooth-ui/core-sc';

import Head from 'next/head';

export default () => {
    return (
        <div>
            <Head>
                <title>Homepage </title>
            </Head>
            <div>
                {/* <Grid justifyContent="center" alignItems="center"> */}
                <Row
                    justifyContent="center"
                    alignItems="center"
                    mt={100}
                    py={200}
                    backgroundImage="url(http://www.musictruth.com/wp-content/uploads/2016/11/sunset-swells.jpg)"
                >
                    <Col className="text-center" color="white">
                        <Typography variant="display-2">Title</Typography>
                    </Col>
                    <Col xs={12} className="text-center" color="white">
                        <h2>Some subtitle text about your product.</h2>
                    </Col>
                </Row>
                {/* </Grid> */}
                <Grid>
                    <Row
                        justifyContent="center"
                        alignItems="center"
                        my={'100px'}
                    >
                        <Col md={12} sm={12} className="text-center">
                            <h4>
                                Want to know more?
                                <br />
                            </h4>

                            <a
                                href="https://apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" variant="dark" py={2} px={4}>
                                    {' '}
                                    Download on iOS
                                </Button>
                            </a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};
