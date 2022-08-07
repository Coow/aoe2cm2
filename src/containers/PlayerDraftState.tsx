import {ApplicationState} from '../types';
import {connect} from 'react-redux';
import PlayerDraftState from "../components/draft/PlayerDraftState";


export function mapStateToProps(state: ApplicationState) {
    return {
        events: state.draft.events,
        nextAction: (state.draft.hostReady && state.draft.guestReady) ? state.ownProperties.nextAction : -1,
        highlightedAction: state.ownProperties.highlightedAction,
    };
}

export function mapDispatchToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDraftState);