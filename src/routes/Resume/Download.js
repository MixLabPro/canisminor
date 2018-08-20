import styled, { css } from 'styled-components';
import { Style, View, Motion, Button } from '../../components';
import { Component } from 'react';
import { Link } from 'dva/router';

/// /////////////////////////////////////////////
// styled
/// /////////////////////////////////////////////

const Download = styled(View)`
  padding: 0 4rem;
  margin-bottom: 6rem;
`;

const Inner = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: ${Style.fontFamily.times};
  font-style: italic;
  ${Style.fontSize(-1)};
`;

const Btn = styled(Button)`
  margin: 0.5rem 1rem;
`;

/// /////////////////////////////////////////////
// component
/// /////////////////////////////////////////////

export default class extends Component {
  render() {
    return (
      <Motion mode="lazyScroll">
        <Download key="download" css={Inner}>
          <View.Row>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Btn type="black">Download Resume</Btn>
            </a>
            <Link to="projects">
              <Btn>View My Works</Btn>
            </Link>
          </View.Row>
        </Download>
      </Motion>
    );
  }
}