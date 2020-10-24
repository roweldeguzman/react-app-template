import PropTypes from "prop-types";
import useMeta from "hooks/useMeta";

function PageWrapper(props) {
  
  useMeta(props);

  const { children } = props;

  return children;
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapper;
