import React, { useState, useEffect } from 'react';
import ODAS from '../api/odas';

export const useAssessments = () => {
  const [assessments, setAssessments] = useState({});
  const [userAssessments, setUserAssessments] = useState([]);

  // TODO - fetch the data from API
  async function fetchAssessments() {
    try {
      const params = {
        public: true
      };
      const data = await ODAS.get(params);
      setAssessments(data)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    fetchAssessments()
  }, [])

  return {
    assessments,
    userAssessments: userAssessments
  };
}

export default useAssessments;