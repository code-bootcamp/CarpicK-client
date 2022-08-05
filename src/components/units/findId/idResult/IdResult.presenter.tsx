import * as S from "./IdResult.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Button01Blue from "../../../commons/button/button_01_blue";
import SubTitleText from "../../../commons/text/SubTitleText";
import { IIdResultUIProps } from "./IdResult.types";

export default function IdResultPageUI(props: IIdResultUIProps) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles40}>
         <S.TitleWrapper>
            <TitleText color="#5D8BFF">아이디 찾기</TitleText>
            <S.ProcessWrapper>
               <S.ProcessIconGray />
               <S.ProcessIcon />
            </S.ProcessWrapper>
         </S.TitleWrapper>
         <S.TextWrapper>
            <SubTitleText>회원님의 아이디는 !</SubTitleText>
         </S.TextWrapper>
         <S.TextWrapper>
            <SubTitleText color="#777777">{props.email} 입니다.</SubTitleText>
         </S.TextWrapper>
         <S.ButtonWrapper>
            <Button01Blue
               func={props.onPressToLogin}
               title={"로그인 하러가기"}
            />
         </S.ButtonWrapper>
      </S.Wrapper>
   );
}
