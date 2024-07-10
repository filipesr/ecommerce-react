import { useLayoutEffect } from "react";

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "IGNITE shop";
    }
  }, [title]);
};

export default useDocumentTitle;
