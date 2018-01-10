import {gql} from 'react-apollo';
import withQuery from 'coral-framework/hocs/withQuery';
import Header from '../components/ui/Header';

export default withQuery(gql`
  query TalkAdmin_Header {
    __typename
    premodCount: commentCount(query: {
      statuses: [PREMOD]
    })
    reportedCount: commentCount(query: {
      statuses: [NONE, PREMOD, SYSTEM_WITHHELD],
      action_type: FLAG
    })
    flaggedUsernamesCount: userCount(query: {
      action_type: FLAG,
      state: {
        status: {
          username: [SET, CHANGED]
        }
      }
    })
  }
`, {
    options: {
      pollInterval: 10000
    }
  })(Header);
