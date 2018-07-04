import {connect} from 'react-redux';
import Comment from './comment.js';
import {thumbUpComment} from './action.js';
import {thumbDownComment} from './action.js'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
//mapDispatchToProps -> funkcja która mapuje odpowiednie wywołanie akcji do propsów