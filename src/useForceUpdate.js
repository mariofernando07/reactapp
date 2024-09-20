import { useState } from "react";

function useForceUpdate() {
    const [value, setBoolean] = useState(true);
    function forceUpdate() {
        setBoolean(!value);
    }

    return [forceUpdate]
}

export default useForceUpdate;