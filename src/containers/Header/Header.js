import React from "react";
import * as SC from "./Header.styles";
import mail_ic from "../../assets/images/ic/mail.svg";
import phone_ic from "../../assets/images/ic/phone_call.svg";
export default function Header() {
  return (
    <SC.Header>
      <div className="header-box">
        <div className="header-title">
          <SC.BOXCOLOR></SC.BOXCOLOR>
          <SC.COL>
            <SC.TITLEH>
              HEllo
            </SC.TITLEH>
            <SC.TITLESUB>0000000000</SC.TITLESUB>
          </SC.COL>
        </div>
        <div className="header-contact">
          <SC.RowCT>
            <img src={phone_ic} alt="Hotline Golden" />
            <SC.COLCT>
              <SC.TXTHOTLINE>HOTLINE</SC.TXTHOTLINE>
              <SC.TITLEHOTLINESUB>000000000</SC.TITLEHOTLINESUB>
            </SC.COLCT>
          </SC.RowCT>
          <SC.RowCT>
            <img src={mail_ic} alt="no" />
            <SC.COLCT>
              <SC.TXTHOTLINE>EMAIL</SC.TXTHOTLINE>
              <SC.TITLEHOTLINESUB>demo@gmial.com</SC.TITLEHOTLINESUB>
            </SC.COLCT>
          </SC.RowCT>
        </div>
      </div>
    </SC.Header>
  );
}
