import { connect } from 'react-redux';
import { PageDashboardComponent } from './component';
import {
  fetchTemperature,
} from './action';


export const mapStateToProps = state => state.pageDashboard;

export const mapDispatchToProps = dispatch => ({
  updateTemp: city => dispatch(fetchTemperature(city)),
});

export const PageDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageDashboardComponent);

export default PageDashboardContainer;
