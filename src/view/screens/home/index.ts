import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Component from './Component';
import { RootState } from '../../../../shared/redux/reducers';
import { loadHome } from '../../../../shared/redux/thunk/home';
import { accessCodeFetched } from '../../../../shared/redux/actions/app';
import { IAction } from '../../../../shared/redux/types/IAction';
import { ApplicationState } from '../../../../shared/redux/types/stores/app';

export interface Props {
  name: string;
  componentId: string;
  loadHome: () => (dispatch: Dispatch<any>, getState: () => RootState) => Promise<void>;
  accessCode: (accessCode : (string | void)) => IAction<ApplicationState>;
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<Props> => ({
  loadHome: () => dispatch(loadHome()),
  accessCode: (accessCode : (string | void)) => dispatch(accessCodeFetched(accessCode)),
});

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;
