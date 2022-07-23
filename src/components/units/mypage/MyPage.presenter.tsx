import * as R from "react-native";
import * as S from "./MyPage.styles";
import { IMyPageProps } from "./MyPage.types";
import globalStyle from "../../../commons/styles/globalStyle";
import colors from "../../../commons/lib/colors";
import ProfileImg from "../../../../assets/mypage/ic_profile.svg";
import ArrowRight from "../../../../assets/mypage/ic_arrow_right.svg";
import NoAuthIcon from "../../../../assets/mypage/ic_no_auth.svg";
import AuthIcon from "../../../../assets/mypage/ic_auth.svg";
import LocationIcon from "../../.././../assets/mypage/ic_location.svg";
import TitleText from "../../commons/text/TitleText";
import Contents1Text from "../../commons/text/Contents1Text";
import Contents2Text from "../../commons/text/Contents2Text";
import oilTranslation from "../../../commons/lib/oilTranslation";
import statusTranslation from "../../../commons/lib/statusTranslation";
import { useEffect, useState } from "react";

export default function MyPageUI(props: IMyPageProps) {
   const [showStatus, setShowStatus] = useState(true);

   useEffect(() => {
      const interval = setInterval(() => {
         setShowStatus((prev) => !prev);
      }, 1500);
      return () => clearInterval(interval);
   }, []);

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
                              면허 등록이 완료되었습니다.
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
               <S.TitleBox>
                  <TitleText fontSize="18">내 차량</TitleText>
                  {props.data?.fetchLoginOwner.carRegistration?.status ===
                     "PASS" &&
                     props.data?.fetchLoginOwner.car?.isValid && (
                        <S.StatusBox>
                           <Contents2Text color="#fff">운행중</Contents2Text>
                        </S.StatusBox>
                     )}
                  {props.data?.fetchLoginOwner.carRegistration?.status ===
                     "PASS" &&
                     !props.data?.fetchLoginOwner.car?.isValid && (
                        <>
                           <S.StatusBoxExpired>
                              <Contents2Text color="#fff">
                                 운행중지
                              </Contents2Text>
                           </S.StatusBoxExpired>
                           <R.View style={{ marginLeft: 14 }}>
                              <Contents1Text fontSize="8">{`계약 기간 혹은 기타 이유로 운행이 중지되었습니다.\n자세한 사항은 카픽으로 문의주시기 바랍니다.`}</Contents1Text>
                           </R.View>
                        </>
                     )}
               </S.TitleBox>
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
                           <R.View style={{ alignItems: "center" }}>
                              <TitleText fontSize="16" color={colors.theme}>
                                 하이패스
                              </TitleText>
                              <Contents1Text fontSize="15">
                                 {props.data?.fetchLoginOwner.car.isHipass
                                    ? "장착"
                                    : "미장착"}
                              </Contents1Text>
                           </R.View>
                        </S.CarInfo>
                        <S.CarLocation>
                           <LocationIcon />
                           <R.View style={{ marginLeft: 6 }}>
                              <Contents1Text fontSize="14">
                                 {
                                    props.data?.fetchLoginOwner.car.carLocation
                                       .addressDetail
                                 }
                              </Contents1Text>
                           </R.View>
                        </S.CarLocation>
                     </>
                  ) : (
                     <>
                        {props.data?.fetchLoginOwner.carRegistration !==
                        null ? (
                           <>
                              <R.View style={{ height: 50 }}>
                                 {props.data?.fetchLoginOwner.carRegistration
                                    .status === "FAIL" && (
                                    <S.CarStatusBoxFail showStatus={showStatus}>
                                       <S.CarStatusFail showStatus={showStatus}>
                                          {statusTranslation(
                                             props.data?.fetchLoginOwner
                                                .carRegistration.status
                                          )}
                                       </S.CarStatusFail>
                                    </S.CarStatusBoxFail>
                                 )}
                                 {props.data?.fetchLoginOwner.carRegistration
                                    .status !== "FAIL" && (
                                    <S.CarStatusBox showStatus={showStatus}>
                                       <S.CarStatus showStatus={showStatus}>
                                          {statusTranslation(
                                             props.data?.fetchLoginOwner
                                                .carRegistration.status
                                          )}
                                       </S.CarStatus>
                                    </S.CarStatusBox>
                                 )}
                              </R.View>
                              <S.InfoWrapper
                                 FAIL={
                                    props.data?.fetchLoginOwner.carRegistration
                                       .status
                                 }
                              >
                                 {props.data?.fetchLoginOwner.carRegistration
                                    .status === "FAIL" && (
                                    <S.FailBackgound>
                                       <TitleText color={colors.dark_gray}>
                                          카픽으로 문의하시기 바랍니다.
                                       </TitleText>
                                    </S.FailBackgound>
                                 )}
                                 <R.View style={{ marginTop: 40 }}>
                                    <S.CarImage
                                       resizeMode="contain"
                                       source={{
                                          uri: `https://storage.googleapis.com/${props.data?.fetchLoginOwner.carRegistration.imageCar[0].url}`,
                                       }}
                                    />
                                 </R.View>
                                 <S.CarInfo>
                                    <R.View style={{ alignItems: "center" }}>
                                       <TitleText
                                          fontSize="16"
                                          color={colors.theme}
                                       >
                                          차량번호
                                       </TitleText>
                                       <Contents1Text fontSize="15">
                                          {
                                             props.data?.fetchLoginOwner
                                                .carRegistration.carNumber
                                          }
                                       </Contents1Text>
                                    </R.View>
                                    <R.View style={{ alignItems: "center" }}>
                                       <TitleText
                                          fontSize="16"
                                          color={colors.theme}
                                       >
                                          모델
                                       </TitleText>
                                       <Contents1Text fontSize="15">
                                          {
                                             props.data?.fetchLoginOwner
                                                .carRegistration.model
                                          }
                                       </Contents1Text>
                                    </R.View>
                                    <R.View style={{ alignItems: "center" }}>
                                       <TitleText
                                          fontSize="16"
                                          color={colors.theme}
                                       >
                                          연료
                                       </TitleText>
                                       <Contents1Text fontSize="15">
                                          {oilTranslation(
                                             props.data?.fetchLoginOwner
                                                .carRegistration.oil
                                          )}
                                       </Contents1Text>
                                    </R.View>
                                    <R.View style={{ alignItems: "center" }}>
                                       <TitleText
                                          fontSize="16"
                                          color={colors.theme}
                                       >
                                          하이패스
                                       </TitleText>
                                       <Contents1Text fontSize="15">
                                          {props.data?.fetchLoginOwner
                                             .carRegistration.isHipass
                                             ? "장착"
                                             : "미장착"}
                                       </Contents1Text>
                                    </R.View>
                                 </S.CarInfo>
                                 <S.CarLocation>
                                    <LocationIcon />
                                    <R.View style={{ marginLeft: 6 }}>
                                       <Contents1Text fontSize="14">
                                          {
                                             props.data?.fetchLoginOwner
                                                .carRegistration.address
                                          }
                                       </Contents1Text>
                                    </R.View>
                                 </S.CarLocation>
                              </S.InfoWrapper>
                           </>
                        ) : (
                           <S.EmptyMyCarBox>
                              <Contents1Text color={colors.gray}>
                                 등록된 차량이 없습니다
                              </Contents1Text>
                           </S.EmptyMyCarBox>
                        )}
                     </>
                  )}
               </R.View>
            </S.MyCarContainer>
            <S.HR />
         </R.ScrollView>
      </S.Wrapper>
   );
}
