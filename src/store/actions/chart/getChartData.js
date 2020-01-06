import * as Types from '../../types/types';

export const getChartData = chartData => {
    const payload = chartData;

    return {
        type: Types.GET_CHART_DATA,
        payload
    }
};