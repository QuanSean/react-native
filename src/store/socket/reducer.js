import GAME_TYPES from './types'

const initialState = {
  gameCode: null,
  players: [],
  correct: 0,
  listChat: [],
  player: {},
  foundGame: false,
  thisPlayer: {},
  isStarted: false,
}

let { ROOM: GAME, PLAYER } = GAME_TYPES

export const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME.START:
      return {
        ...state,
        thisPlayer: {...payload.thisPlayer},
        isStarted: true,
      }
    case GAME.JOIN:
    case GAME.FOUND:
    case GAME.END:
      return {
        ...state,
        ...payload
      }
    case GAME.NEW_PLAYER:
      let { players } = payload
      return {
        ...state,
        players
      }
    case PLAYER.SET_USERNAME:
      return {
        ...state,
        player: {
          ...state.player,
          username: payload.username
        }
      }
    case PLAYER.CHAT: 
      let { listChat } = state
      listChat.push({ ...payload.chat })
      return {
        ...state,
        listChat
      }
    case GAME.LEAVE:
      return {
        ...state,
        game: { ...payload.game },
      }
    default:
      return state
  }
}
