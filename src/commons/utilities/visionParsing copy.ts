export function VisionParsing(arr) {
   const result = {
      BirthDate: "",
      Name: "",
      LicNumber: "",
      SpecialNumber: "",
      Fail: "",
   };

   // 1. 운전면허증인지? 판단
   const isLicence = arr
      .filter((el: string) => el.includes("Driver's License"))
      .filter((el: string) => el.replace(" ", "").includes("자동차운전면허증"));

   if (isLicence.length !== 1) {
      result.Fail = "다시인증해주세요, 운전면허증만 인증 가능합니다.";
      return result;
   }

   // 2. flag(licNumber index) ,  (전처리)
   let LicNumber = "";
   let flag = null;
   console.log("this is slice 4", arr.slice(4));
   arr.slice(0, 4).forEach((el: string, i: number) => {
      const tmp = el.split("-");
      if (tmp.length >= 2) {
         tmp[0] = tmp[0].split(" ").join("-");
         LicNumber = tmp.join("-");
         flag = i;
      }
   });

   // 3. 생일찾기 (parameter)
   try {
      const tmp = arr
         .filter((el: string) => el.split("-").length === 2)
         .filter((el: string) => el.length > 13)[0]
         .split("-")[0];

      if (tmp.split("-")[0] !== undefined) {
         result.BirthDate = "19" + tmp;
      }
   } catch (error) {
      console.log(error.message);
   }

   // 4. 이름 (parameter)
   if (flag) result.Name = arr[flag + 1];

   // 5. 라이센스 넘버 (parameter)
   result.LicNumber = LicNumber;

   // 6. 일련번호 찾기 (parameter)
   const regex1 = /^[A-Za-z]+$/;
   const regex2 = /^[A-Za-z0-9]+$/;

   const filteredArr = arr
      .slice(-5)
      .filter((el: string) => el.length === 5 || el.length === 6)
      .filter((el: string) => !regex1.test(el))
      .filter((el: string) => regex2.test(el));

   if (filteredArr.length === 1) result.SpecialNumber = filteredArr[0];

   // return
   if (result) return result;
}

const locationNum = {
   11: "서울",
   12: "부산",
   13: "경기",
   14: "강원",
   15: "충북",
   16: "충남",
   17: "전북",
   18: "전남",
   19: "경북",
   20: "경남",
   21: "제주",
   22: "대구",
   23: "인천",
   24: "광주",
   25: "대전",
   26: "울산",
   28: "없음",
};
