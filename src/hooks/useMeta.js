import { useEffect } from "react";

export default function useMeta(props) {
  
  const { title } = props;

  useEffect(() => {
    const pageTitle = `${title || ""} :: React Template`;
    document.title = pageTitle;
  }, [title]);

  return null;
}
