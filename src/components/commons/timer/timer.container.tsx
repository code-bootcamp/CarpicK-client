import { useEffect, useRef, useState } from "react";
import TimerUI from "./timer.presenter";
import { ITimerProps } from "./timer.types";

export default function Timer(props: ITimerProps) {
   const [min, setMin] = useState(3);
   const [sec, setSec] = useState(0);
   let time = useRef(179);
   let timerId = useRef(null);

   useEffect(() => {
      timerId.current = setInterval(() => {
         setMin(parseInt(time.current / 60));
         setSec(time.current % 60);
         time.current -= 1;
      }, 1000);

      return () => clearInterval(timerId.current);
   }, []);

   useEffect(() => {
      if (time.current <= 0) {
         props.setToken("");
         props.setOpenTimer(false);
         props.setOpenRedo(true);
         clearInterval(timerId.current);
      }
   }, [sec]);

   return <TimerUI min={min} sec={sec} />;
}
