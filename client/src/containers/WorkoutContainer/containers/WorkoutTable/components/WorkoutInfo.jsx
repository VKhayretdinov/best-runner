import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const WorkoutInfo = ({
  date, type, distance, comment,
}) => (
  <Card className="mt-4">
    <CardBody>
      <CardTitle>Workout info</CardTitle>
      <CardSubtitle>Date:</CardSubtitle>
      <CardText>
        {date}
      </CardText>
      <CardSubtitle>Type:</CardSubtitle>
      <CardText>
        {type}
      </CardText>
      <CardSubtitle>Distance:</CardSubtitle>
      <CardText>
        {distance}
      </CardText>
      <CardSubtitle>Comment:</CardSubtitle>
      <CardText>
        {comment}
      </CardText>
    </CardBody>
  </Card>
);

WorkoutInfo.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default WorkoutInfo;
