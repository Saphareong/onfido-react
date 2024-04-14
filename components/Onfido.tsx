import { useRef, useEffect } from "react";
import * as Onfido from "onfido-sdk-ui";


// const onfidoToken = process.env.NEXT_PUBLIC_ONFIDO_TOKEN;
const onfidoToken = "onfido-jwt";
const OnfidoComp = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Onfido.init({
        token: onfidoToken,
        containerEl: ref.current,
      });
    }
  }, []);

  return <div ref={ref} id="onfido-mount" />;
};

export default OnfidoComp;
