import styled from "styled-components";

export const LineBlock = styled.hr`
  width: 100%;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;
export const MainDivHidden = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;

export const Title = styled.h1`
  display: inline-block;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-right: 220px;
  font-size: 180%;
  font-weight: bold;
`;

export const InputLabel = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-right: 245px;
`;

export const LabelError = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  color: #d0021b;
`;

export const Input = styled.input`
  display: block;
  background: transparent;
  border: 1px solid #919191;
  border-radius: 5px;
  width: 376px;
  height: 48px;
  font-weight: 300;
  font-size: 16px;
  color: #252525;
  padding-left: 15px;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 2px #4a90e2 inset;
  }
`;

export const InputError = styled.input`
  display: block;
  background: transparent;
  border: 1px solid #d0021b;
  border-radius: 5px;
  width: 376px;
  height: 48px;
  font-weight: 300;
  font-size: 16px;
  padding-left: 15px;
  border: none;
  outline: none;
  box-shadow: 0 0 0 2px #d0021b inset;
`;

export const Button = styled.button`
  float: right;
  display: block;
  width: 115px;
  height: 48px;
  background: transparent;
  border: 2px solid #4a90e2;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #4a90e2;
  -webkit-transition: border 0.2s, color 0.2s;
  transition: border 0.2s, color 0.2s;

  &:hover {
    border: 2px solid #2c73c7;
    color: #0051a5;
  }

  &:focus {
    outline: #006ac3 1px solid;
    outline-offset: 3px;
    border: 2px solid #4a90e2;
    color: #006ac3;
  }

  &:active {
    outline: none;
    border: 2px solid #185cac;
    color: #003168;
  }
`;

export const LabelUniqueResult = styled.span`
  display: block;
  font-size: 130%;
  font-weight: 500;
  margin-top: 20px;
  margin-right: 187px;
`;

export const UniqueStringResult = styled.span`
  display: block;
  align-content: center;
  font-size: 120%;
  font-weight: 500;
  margin-top: 30px;
  margin-left: 20%;
  font-style: oblique;
  margin-right: 150px;
`;
