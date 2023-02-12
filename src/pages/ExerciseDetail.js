import { Box } from '@mui/material';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {exerciseOptions,fetchData} from '../util/fetchData'

const ExerciseDetail = () => {
  return
  <Box>
    <Details/>
    <ExersiceVedios/>
    <SimilarExercises/>
  </Box>
};

export default ExerciseDetail;
