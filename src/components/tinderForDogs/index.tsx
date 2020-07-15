import React, { PureComponent } from 'react';
import { CircularProgress, IconButton, Tooltip } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux';
import { addDog } from '../../state/tinderForDogs/actions';
import { AppState } from '../../state';
import { Link } from 'react-router-dom';
import './tinder-common.css';

interface IState {
    loading: boolean,
    error: string,
    dogPicture: string,
    liked: boolean | undefined
}

class TinderForDogs extends PureComponent<any, IState> {

    _isMounted = false;

    actions = [
        {
            title: 'Like',
            icon: <CheckIcon style={{ color: 'green' }} />,
            onClick: () => this.likeDog()
        }, {
            title: 'Dislike',
            icon: <CloseIcon style={{ color: 'red' }} />,
            onClick: () => this.dislikeDog()
        }, {
            title: 'Next',
            icon: <NavigateNextIcon />,
            onClick: () => this.nextDogPhoto()
        }
    ]

    constructor(props: any) {
        super(props);

        this.state = {
            loading: true,
            error: '',
            dogPicture: '',
            liked: undefined
        }

        this.nextDogPhoto = this.nextDogPhoto.bind(this);
        this.likeDog = this.likeDog.bind(this);
        this.dislikeDog = this.dislikeDog.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        this.nextDogPhoto();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async nextDogPhoto() {
        // If there is a dog picture
        if (this.state.dogPicture) {
            this.props.addDog({
                photoLink: this.state.dogPicture,
                liked: this.state.liked
            });
        }
        this.setState({ loading: true });
        await fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(res => {
                if (this._isMounted) {
                    if (res.status === 'success') {
                        this.setState({ dogPicture: res.message.replace(/\\/g, '') });
                    } else {
                        this.setState({ error: 'Could not get dog image' });
                    }
                    this.setState({ loading: false });
                }
            })
            .catch(console.log);
    }

    likeDog() {
        this.setState({ liked: true });
    }

    dislikeDog() {
        this.setState({ liked: false });
    }

    render() {
        const { loading, error, dogPicture } = this.state;
        return (
            <div className="tinder-box">
                <Link className="link" to="/tinder-for-dogs-data">Go to data route</Link>
                <div className="tinder-image-container">
                    {loading && <CircularProgress />}
                    {!loading && <img className="tinder-image" src={dogPicture} height="100%" />}
                    <p className="error">{error}</p>
                </div>

                <div className="action-buttons">
                    {this.actions.map((action, i) => (
                        <Tooltip key={'action-' + i} title={action.title}>
                            <IconButton onClick={action.onClick}>
                                {action.icon}
                            </IconButton>
                        </Tooltip>
                    ))}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch): any => {
    return {
        addDog: bindActionCreators(addDog, dispatch)
    };
};

const mapStateToProps = (state: AppState): any => {
    return {
        dog: state.dog,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TinderForDogs);