import moment from "moment";

export default function dateFormat(date: string) {
   return moment(date).format("YYYY.MM.DD HH:mm");
}
