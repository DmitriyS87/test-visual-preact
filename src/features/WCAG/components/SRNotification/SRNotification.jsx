import { useContext } from "preact/hooks";
import { WCAGContext } from "../../context/Provider";

const SRNotification = () => {
  const { state } = useContext(WCAGContext);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {state.message}
    </div>
  );
};

export default SRNotification;
