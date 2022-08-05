export interface ITermsPageUIProps {
   isAllChecked: boolean;
   isServiceChecked: boolean;
   isPrivacyChecked: boolean;
   onChangeAllChecked: (isChecked: boolean) => void;
   onChangeServiceChecked: (isChecked: boolean) => void;
   onChangePrivacyChecked: (isChecked: boolean) => void;
   onPressService: () => void;
   onPressPrivacy: () => void;
   onPressNext: () => void;
}
