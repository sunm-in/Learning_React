import React from "react";
import _ from "lodash";
import { Spinner } from "../elements";

const InfinityScroll = (props) => {
  const { children, calNext, is_next, loading } = props;

  // 쓰로틀
  const _handleScroll = _.throttle(() => {
    // 로딩중일 때 다음 걸 부르면 안됨
    if (loading) {
      return;
    }

    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    // 스크롤 계산
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 200) {
      calNext();
    }
  }, 300);

  const handleScroll = React.useCallback(_handleScroll, [loading]);

  React.useEffect(() => {
    // 로딩 중이면 return
    if (loading) {
      return;
    }

    if (is_next) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [is_next, loading]);

  return (
    <React.Fragment>
      {props.children}
      {is_next && <Spinner/>}
    </React.Fragment>
  );
};

InfinityScroll.defaultProps = {
  children: null,
  calNext: () => {},
  is_next: false,
  loading: false,
};

export default InfinityScroll;
