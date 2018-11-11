// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Action builder
import { moveListInBoard, addListToBoard} from '../../action/actionBoard';

// Components
import List from './List/List';
import ListCreator from './ListCreator';

// Styles
import '../../style/board.css';


class Board extends React.Component{
  render() { 
    const {
      idBoard,
      lists,
      dispatchOnDragEnd,
      dispatchAddListToBoard }
  = this.props;
  return (
  <div>
    <ListCreator addList={(listName) => dispatchAddListToBoard(idBoard,listName)} />
    <table className="listLists">
    <tr>
      <DragDropContext onDragEnd={( result ) => dispatchOnDragEnd( result )}>
      <Droppable droppableId="droppable" direction="horizontal">
      {(provided, snapshot) => (
              <span
                ref={provided.innerRef}
                className={classNames("board-lists", { "list-dragging-over": snapshot.isDraggingOver })}
                {...provided.droppableProps}>
            {lists.map((list, index) => ( 
                  <Draggable key={list.idList} draggableId={list.idList} index={index}>
                  {(provided, snapshot) => (
                    <span
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={classNames(
                        "list-item",
                        { "list-dragged": snapshot.isDragging }
                      )}
                    >
                      <td>
                      <List idList={list.idList}/>  
                      </td>
                    </span>
                  )}
                </Draggable>
            ) )} 
      
          
          </span>
            )}
          </Droppable>
          </DragDropContext>
          </tr>
          </table>

  </div>
    );
  }
}

const mapStateToProps = ( state, props ) => ({
  name: state.board.name,
  lists: state.lists.filter(list => list.idBoard === props.idBoard),
  desc: state.board.desc,
  memberships: state.board.memberships,
  closed: state.board.closed,
  pos: state.board.pos,
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatch,
  dispatchOnDragEnd: ({source, destination}) => (
    destination &&
    dispatch(moveListInBoard(source.index, destination.index))
  ),
  dispatchAddListToBoard: (idBoard,listName) => dispatch(addListToBoard(idBoard, listName))
});

// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(Board); 