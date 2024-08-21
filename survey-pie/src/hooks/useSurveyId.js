import { useParams } from 'react-router-dom';

function useSurveyId() {
  const params = useParams();
  console.log(params);

  return parseInt(params.surveyId);
}

export default useSurveyId;
