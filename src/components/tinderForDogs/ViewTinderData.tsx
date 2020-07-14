import React, { PureComponent } from 'react';
import { TinderDog } from '../../state/tinderForDogs/types';
import { connect } from 'react-redux';
import { AppState } from '../../state';
import { Link } from 'react-router-dom';
import { TableHead, TableRow, TableCell, TableBody, Table, TablePagination, TableFooter } from '@material-ui/core';
import './tinder-common.css';

interface IState {
    tinderDogs: TinderDog[],
    tablePage: number,
    tableRowsPerPage: number
}

class ViewTinderData extends PureComponent<any, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            tinderDogs: this.props.dog.tinderDogs,
            tablePage: 0,
            tableRowsPerPage: 5
        }

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    handleChangePage(e: any, newPage: number) {
        this.setState({ tablePage: newPage });
    }

    handleChangeRowsPerPage(e: any) {
        this.setState({ tableRowsPerPage: e.target.value });
    }

    render() {
        const { tinderDogs, tablePage, tableRowsPerPage } = this.state;
        return (
            <div className="tinder-box">
                <Link className="link" to="/tinder-for-dogs">Go to tinder route</Link>
                {(!tinderDogs || tinderDogs.length === 0) &&
                    <p>No data yet</p>}
                {tinderDogs.length > 0 &&
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Photo</TableCell>
                                <TableCell>Photo Link</TableCell>
                                <TableCell>Liked / Disliked</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tinderDogs.length > 0 && tinderDogs.slice(tablePage * tableRowsPerPage, tablePage * tableRowsPerPage + tableRowsPerPage).map((dog: TinderDog, index: number) => (
                                <TableRow key={'tinder-dog-' + index}>
                                    <TableCell><img src={dog.photoLink} width="30px" /></TableCell>
                                    <TableCell>{dog.photoLink}</TableCell>
                                    <TableCell>{dog.liked ? 'Liked' : (dog.liked === false ? 'Disliked' : 'No response')}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    count={tinderDogs.length}
                                    rowsPerPage={tableRowsPerPage}
                                    page={tablePage}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>}
            </div>
        );
    }

}

const mapStateToProps = (state: AppState): any => {
    return {
        dog: state.dog,
    };
};

export default connect(
    mapStateToProps
)(ViewTinderData);