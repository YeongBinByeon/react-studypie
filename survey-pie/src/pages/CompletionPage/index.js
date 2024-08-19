import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import testState from '../../stores/test/atom';
import testWithComma from '../../stores/test/testWithComma';

function CompletionPage() {
  const test = useRecoilValue(testState);

  const test2 = useRecoilValue(testWithComma);

  return (
    <CompletionPageWrapper>
      <div>
        {test}
        <br />
        {test2}
      </div>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div``;

export default CompletionPage;
