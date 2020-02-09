import React from 'react';
import { CardBody, CardHeader, CardSubtitle, CardText } from 'reactstrap';
import { Workout } from '../../../../../shared/prop-types/';
import { WorkoutCard } from '../styled';

const WorkoutInfo = ({ workout }) => {
  const {
    date, type, distance, comment,
  } = workout;

  return (
    <WorkoutCard inverse>
      <CardHeader>Workout info</CardHeader>
      <CardBody>
        <CardSubtitle>Date:</CardSubtitle>
        <CardText>{date}</CardText>

        <CardSubtitle>Type:</CardSubtitle>
        <CardText>{type}</CardText>

        <CardSubtitle>Distance:</CardSubtitle>
        <CardText>{distance}</CardText>

        <CardSubtitle>Comment:</CardSubtitle>
        <CardText>{comment}</CardText>
      </CardBody>
    </WorkoutCard>
  );
};

WorkoutInfo.propTypes = {
  workout: Workout.isRequired,
};

export default WorkoutInfo;
