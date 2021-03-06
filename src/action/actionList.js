// Modules
import {ObjectId} from 'bson';


// Action Builders
// TODO: Export Action Builder

//default state 
export const initList = {
idList : 0 , //TODO check
name: 'My list',
isClosed: false, 
idBoard: null,
position : 0,
cards :  [
  {}
],
subscribed : 'subscribed'|'notSubscribed', 
}
 
// Action type constants
export const SET_LIST_CLOSED = "@@list/SET_LIST_CLOSED"
export const SET_LIST_POSITION = "@@list/SET_LIST_POSITION"
export const SET_LIST_SUBSCRIBED = "@@list/SET_LIST_SUBSCRIBED "
export const SET_LIST_NAME = "@@list/SET_LIST_NAME"
export const SET_LIST_BOARD = "@@list/SET_LIST_BOARD"
export const SET_NEW_LIST = "@@list/SET_NEW_LIST"
export const MOVE_CARD_IN_LIST = "@@list/MOVE_CARD_IN_LIST"
export const ADD_CARD_TO_LIST = "@@list/ADD_CARD_TO_LIST";
export const ADD_CARD_IN_CALENDAR = "@@list/ADD_CARD_IN_CALENDAR";

// Action Builders
// TODO: Export Action Builder

export const setListClosed = (id, isClosed) => ({
    type: SET_LIST_CLOSED,
    payload:  {
      id : id,
      isClosed : isClosed
    }
  })


export const setListPosition = (id, position) => ({
  type: SET_LIST_POSITION,
  payload:  {
    id,
    position
  }
})

export const setListSubscribed = (id, subscribed) => ({
  type: SET_LIST_SUBSCRIBED,
  payload:  {
    id,
    subscribed
  }
})

export const setListName = (id, newName) => ({
  type: SET_LIST_NAME,
  payload:  {
    id : id,
    name : newName
  }
})

export const setListBoard = (id, idBoard) => ({
  type: SET_LIST_BOARD,
  payload:  {
    id,
    idBoard
  }
})

export const createList = (id, name , isClosed,  idBoard, position , subscribed ) => ({
  type: SET_NEW_LIST,
  payload:  {
    id,
    name ,
    isClosed,
    idBoard,
    position ,
    subscribed   }
})

// Move a card position in the list
export const moveCardInList = (cardToMovePos, newCardPos) => ({
  type: MOVE_CARD_IN_LIST,
  payload: {
    cardToMovePos,
    newCardPos,
  }
})

// Add a new card at the end of the list
export const addCardToList = (idList, idBoard, cardName, dueDate, allDay, dueComplete) => ({
  type: ADD_CARD_TO_LIST,
  payload: {
    id : new  ObjectId(),
    idList: idList,
    idBoard : idBoard,
    name: cardName,
    dueDate : dueDate, 
    allDay : allDay,
    dueComplete : dueComplete,
    
  }
})

