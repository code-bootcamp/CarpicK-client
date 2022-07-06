/* title, contents, positive button */

import styled from "@emotion/native"
import { useState } from "react"
import { Dimensions, Modal } from "react-native"

interface IModal4Props {
    title: string;
    contents: string;
    positiveText: string;
    positive: () => void;
}

export default function Modal4(props: IModal4Props) {
    const [isVisible, setIsVisible] = useState(true)

    const onClickPositive = () => {
        props.positive()
        setIsVisible(false)
    }

    return(
        <Modal
        //animationType='fade'
        //animationType='slide'
        transparent={true}
        visible={isVisible}
        >
            <ModalCenteredView>
                <ModalView>
                    <ContentsView>
                        <TitleText>{props.title}</TitleText>
                        <ContentsText>{props.contents}</ContentsText>
                    </ContentsView>
                    <ButtonsView>
                        <PositiveButton activeOpacity={0.7} onPress={onClickPositive}><ButtonText>{props.positiveText}</ButtonText></PositiveButton>
                    </ButtonsView>
                </ModalView>
            </ModalCenteredView>
        </Modal>
    )
}

const ModalCenteredView = styled.View`
    width: ${(Dimensions.get("window").width)}px;
    height: ${(Dimensions.get("window").height)}px;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`

const ModalView = styled.View`
    width: 100%;
    background-color: white;
    border-radius: 21px 21px 0 0;
`

const ContentsView = styled.View`
    padding: 25px;
`

const TitleText = styled.Text`
    font-size: 18px;
    font-weight: 600;
`

const ContentsText = styled.Text`
    font-size: 16px;
    font-weight: normal;
    margin-top: 10px;
`

const ButtonsView = styled.View`
    flex: 1;
    flex-direction: row;
`

const ButtonText = styled.Text`
  color: white;
`

const PositiveButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #5D8BFF;
  color: white;
  border-radius: 0 0 21px 21px;
`