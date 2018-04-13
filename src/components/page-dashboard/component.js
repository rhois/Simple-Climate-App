import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { PageWrapper } from '../main-layout/libraries/page-wrapper';
import { ActivityIndicator } from '../libraries/activity-indicator';

export class PageDashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          city: 'Jakarta',
        };
      }
    componentDidMount() {
        const { updateTemp } = this.props;
        setTimeout(() => {
            updateTemp(this.state.city)
                .then(() => {
                    this.setState({ loading: true });
                });
        }, 500);
    }
    render() {
        const {
            temperature,
            updateTemp,
            totalTemp,
            totalVariance,
        } = this.props;
        if (this.state.loading === false) {
            return (
                <PageWrapper
                    title="Index Page"
                >
                    <ActivityIndicator />
                </PageWrapper>
            );
        }

        const listCity = [
            {
                value: 'Jakarta',
                label: 'Jakarta'
            },
            {
                value: 'Tokyo',
                label: 'Tokyo'
            },
            {
                value: 'London',
                label: 'London'
            },
        ];
        return (
            <PageWrapper
                title="Index Page"
            >
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            List of Wheater
                        </div>
                        <div style={{ marginTop: 15 }}>
                            <label className="col-lg-12" htmlFor="options">City</label>
                            <Select
                                name="type-select"
                                clearable={false}
                                searchable={false}
                                multi={false}
                                options={listCity}
                                onChange={
                                    (usr) => {
                                        this.setState({ city: usr.value });
                                        this.setState({ loading: false });
                                        updateTemp(usr.value)
                                            .then(() => {
                                                this.setState({ loading: true });
                                            });
                                    }
                                }
                                value={this.state.city}
                                placeholder="Select City"
                                className="col-lg-3"
                                id="options"
                            />
                        </div>
                        <p>&nbsp;</p>
                        <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>{this.state.city}</th>
                                        <th>Temperature</th>
                                        <th>Variance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        temperature.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.date}</td>
                                                <td>{`${item.temp}C`}</td>
                                                <td>{`${item.variance}C`}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Average</td>
                                        <td>{totalTemp.toFixed(2)}</td>
                                        <td>{totalVariance.toFixed(2)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}
PageDashboardComponent.propTypes = {
    updateTemp: PropTypes.func.isRequired,
    temperature: PropTypes.array.isRequired,
    totalTemp: PropTypes.number.isRequired,
    totalVariance: PropTypes.number.isRequired,
};
export default PageDashboardComponent;
