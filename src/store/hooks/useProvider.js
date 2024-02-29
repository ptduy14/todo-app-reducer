import Context from "../Context";
import { useContext } from "react";

function useProvider() {
    return useContext(Context);
}

export default useProvider;