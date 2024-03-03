import React, { Component, useContext } from 'react'
import { Row, Col, Card } from 'antd';
import StackedColumn from './StackedColumn';
import SplineArea from './SplineArea';
import Pie from './Pie';
import GroupedBar from './GroupedBar';
import context from '../../../Context/ContextState'
const Apex = () => {

		const { sidebarToggle } = useContext(context)

		return (
			<div>
              <main id="main">
			<React.Fragment>
				<Row>
					<Col sm={24} md={24} lg={12}>
						<Card><Pie /></Card>
						<Card><SplineArea /></Card>
					</Col>

					<Col sm={24} md={24} lg={12}>
						{/* <Card><GroupedBar /></Card> */}
						<Card><StackedColumn /></Card>

					</Col>

				</Row>
			</React.Fragment>
			</main>
			</div>
		)
	}


export default Apex;
