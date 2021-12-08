import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	Link,
} from '@react-pdf/renderer';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';

import { weekOverviewLink } from 'lib/links';
import MiniCalendar, { HIGHLIGHT_WEEK } from 'pdf/components/mini-calendar';
import PdfConfig from 'pdf/config';

class WeekOverviewPage extends React.Component {
	render() {
		const { config, date } = this.props;
		return (
			<Page id={ weekOverviewLink( date ) } size={ config.pageSize }>
				<Text>Week overview Page for Week #{date.isoWeek()}</Text>
				<MiniCalendar
					date={ date }
					highlightMode={ HIGHLIGHT_WEEK }
					config={ config }
				/>
			</Page>
		);
	}
}

WeekOverviewPage.propTypes = {
	config: PropTypes.instanceOf( PdfConfig ).isRequired,
	date: PropTypes.instanceOf( dayjs ).isRequired,
};

export default WeekOverviewPage;
