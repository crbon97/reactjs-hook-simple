import styled from 'styled-components'

import { BUTTON_COLOR_LG, BUTTON_COLOR_SM_FIRST } from '../Variables'

const BaseButton = styled.button`
  font-size: 20px;
  font-weight: "SemiBold";
  -webkit-font-smoothing: antialiased;
  background: transparent;
  padding:20px 24px;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 0;
  line-height: 24px;
  border-radius: 24px;
  outline: none;
  border: none;
  &:focus{
  outline: none;
  border: none;
  }
  &:active,
  &:disabled {
    opacity: 0.7;
  }
`
const BaseButtonSmall = styled.button`
  font-size: 16px;
  font-weight: "SemiBold";
  -webkit-font-smoothing: antialiased;
  background: transparent;
  padding:5px 16px;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 0;
  line-height: 24px;
  border-radius: 24px;
  outline: none;
  border: none;

  &:active,
  &:disabled {
    opacity: 0.7;
  }
`

const ButtonLarge = styled(BaseButton)`
  background-color: ${BUTTON_COLOR_LG};
  color: #FFFFFF;
`

const ButtonSmall = styled(BaseButtonSmall)`
  background-color: ${BUTTON_COLOR_SM_FIRST};
  color: #3C4450;
`




export { ButtonSmall, ButtonLarge }



// WEBPACK FOOTER //
// ./src/components/UIKit/Button/index.js