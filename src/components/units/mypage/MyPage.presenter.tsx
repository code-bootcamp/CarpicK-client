import * as R from "react-native";
import * as S from "./MyPage.styles";
import { IMyPageProps } from "./MyPage.types";
import globalStyle from "../../../commons/styles/globalStyle";
import colors from "../../../commons/lib/colors";
import ProfileImg from "../../../../assets/mypage/ic_profile.svg";
import ArrowRight from "../../../../assets/mypage/ic_arrow_right.svg";
import NoAuthIcon from "../../../../assets/mypage/ic_no_auth.svg";
import AuthIcon from "../../../../assets/mypage/ic_auth.svg";
import TitleText from "../../commons/text/TitleText";
import Contents1Text from "../../commons/text/Contents1Text";
import Contents2Text from "../../commons/text/Contents2Text";
import oilTranslation from "../../../commons/lib/oilTranslation";

export default function MyPageUI(props: IMyPageProps) {
   return (
      <S.Wrapper>
         <R.ScrollView>
            <R.View style={globalStyle.GlobalStyles}>
               <S.Profile>
                  <ProfileImg />
                  <S.UserInfo>
                     <R.View>
                        <TitleText fontSize="15" color={colors.black}>
                           {props.data?.fetchLoginOwner.name}
                        </TitleText>
                     </R.View>
                     <R.View style={{ marginTop: 3 }}>
                        <Contents1Text fontSize="12" color={colors.gray}>
                           {props.data?.fetchLoginOwner.email}
                        </Contents1Text>
                     </R.View>
                  </S.UserInfo>
                  <S.UpdateInfoButton onPress={props.onPressUpdateInfo}>
                     <Contents1Text fontSize="12" color={colors.gray}>
                        내 정보 수정하기
                     </Contents1Text>
                     <R.View style={{ marginLeft: 6 }}>
                        <ArrowRight />
                     </R.View>
                  </S.UpdateInfoButton>
               </S.Profile>
               <S.AuthContainer>
                  {props.data?.fetchLoginOwner.isAuth ? (
                     <>
                        <AuthIcon />
                        <R.View style={{ marginLeft: 10 }}>
                           <Contents1Text
                              fontSize="14"
                              color={colors.dark_gray}
                           >
                              면허 등록이 되어있습니다.
                           </Contents1Text>
                        </R.View>
                     </>
                  ) : (
                     <S.NoAuthBox>
                        <S.NoAuthRowCenter>
                           <NoAuthIcon />
                           <R.View style={{ marginLeft: 10 }}>
                              <Contents1Text fontSize="14" color={colors.gray}>
                                 등록된 면허가 없습니다.
                              </Contents1Text>
                           </R.View>
                        </S.NoAuthRowCenter>
                        <S.MoveToLicenseButton
                           activeOpacity={0.7}
                           onPress={props.onPressMakeLicense}
                        >
                           <Contents2Text color={colors.gray}>
                              면허 등록하기
                           </Contents2Text>
                           <R.View style={{ marginLeft: 6 }}>
                              <ArrowRight />
                           </R.View>
                        </S.MoveToLicenseButton>
                     </S.NoAuthBox>
                  )}
               </S.AuthContainer>
            </R.View>
            <S.HR />
            <S.MyCarContainer style={globalStyle.GlobalStyles}>
               <TitleText fontSize="18">내 차량</TitleText>
               <R.View style={{ marginTop: 10 }}>
                  {props.data?.fetchLoginOwner.car !== null ? (
                     <>
                        <S.CarImage
                           resizeMode="contain"
                           source={{
                              uri: `https://storage.googleapis.com/${props.data?.fetchLoginOwner.car.imageCar[0].url}`,
                           }}
                        />
                        <S.CarInfo>
                           <R.View style={{ alignItems: "center" }}>
                              <TitleText fontSize="16" color={colors.theme}>
                                 차량번호
                              </TitleText>
                              <Contents1Text fontSize="15">
                                 {props.data?.fetchLoginOwner.car.carNumber}
                              </Contents1Text>
                           </R.View>
                           <R.View style={{ alignItems: "center" }}>
                              <TitleText fontSize="16" color={colors.theme}>
                                 모델
                              </TitleText>
                              <Contents1Text fontSize="15">
                                 {props.data?.fetchLoginOwner.car.carModel.name}
                              </Contents1Text>
                           </R.View>
                           <R.View style={{ alignItems: "center" }}>
                              <TitleText fontSize="16" color={colors.theme}>
                                 연료
                              </TitleText>
                              <Contents1Text fontSize="15">
                                 {oilTranslation(
                                    props.data?.fetchLoginOwner.car.oil
                                 )}
                              </Contents1Text>
                           </R.View>
                        </S.CarInfo>
                     </>
                  ) : (
                     <S.EmptyMyCarBox>
                        <Contents1Text color={colors.gray}>
                           등록된 차량이 없습니다
                        </Contents1Text>
                     </S.EmptyMyCarBox>
                  )}
               </R.View>
            </S.MyCarContainer>
            <S.HR />
         </R.ScrollView>
      </S.Wrapper>
   );
}
