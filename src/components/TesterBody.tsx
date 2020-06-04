import React from 'react';
import { inject, observer } from 'mobx-react';

import Editor from './Editor';

@inject()
@observer
class EditorBody extends React.Component {
  render() {
    return <Editor {...this.props} />;
  }
}

export default EditorBody;
