import io from 'socket.io-client'
import GAME_TYPES from './types'
import { URL } from '../../common/connection'
import { QuestService } from '../../services/quest'

const socket = io(URL.SERVER.DEV)

const { ROOM: GAME, PLAYER, STATUS } = GAME_TYPES

const configureSocket = dispatch => {
  socket.on('connect', () => {
    console.log('connected to server')
  })

  socket.on(GAME.START, thisPlayer => {
    console.log(thisPlayer)
      return dispatch({
        type: GAME.START,
        payload: {
          thisPlayer
        }
      })
  })

  socket.on(GAME.FOUND, (game, thisPlayer) => {
    return dispatch({
      type: GAME.FOUND,
      payload: {
        ...game,
        thisPlayer,
        foundGame: true
      }
    })
  })

  socket.on(GAME.NEW_PLAYER, (players) => {
    return dispatch({
      type: GAME.NEW_PLAYER,
      payload: {
        players
      }
    })
  })

  socket.on(PLAYER.CHAT, (chat) => {
    return dispatch({
      type: PLAYER.CHAT,
      payload: {
        chat
      }
    })
  })

  // socket.on(GAME.TIMEOUT, () => {
  //   return dispatch({
  //     type: GAME.BEGIN,
  //     payload: {
  //       timeout: true,
  //       newQuestion: false,
  //       result: true,
  //       running: false,
  //     }
  //   })
  // })

  // socket.on(GAME.NEW_QUESTION, (idQuestion) => {
  //   return dispatch({
  //     type: GAME.NEW_QUESTION,
  //     payload: {
  //       idQuestion,
  //       newQuestion: true,
  //       endGame: false,
  //       timeout: false,
  //       correct: 0,
  //       result: true,
  //       running: false
  //     }
  //   })
  // })

  // socket.on(GAME.ANSWER, (scoreBoard) => {
  //   return dispatch({
  //     type: GAME.ANSWER,
  //     payload: {
  //       players: scoreBoard,
  //       result: true,
  //       running: false,
  //     }
  //   })
  // })

  // socket.on(GAME.CORRECT_ANSWER, (res) => {
  //   return dispatch({
  //     type: GAME.CORRECT_ANSWER,
  //     payload: {
  //       correct: res ? 1 : -1,
  //       result: false,
  //       running: false,
  //     }
  //   })
  // })

  // socket.on(GAME.END, () => {
  //   return dispatch({
  //     type: GAME.END,
  //     payload: {
  //       endGame: true
  //     }
  //   })
  // })

  return socket
}

const setUserName = username => {
  return {
    type: PLAYER.SET_USERNAME,
    payload: {
      username
    }
  }
}

const chat = (id, gameCode, username, message) => {
  socket.emit(PLAYER.CHAT, id, gameCode, username, message)
  return dispatch => dispatch({ type: "NULL"})
}

const findGame = (username, accountId) => {
  console.log('Ok');
  socket.emit(GAME.FIND, username, accountId)
  return dispatch => {
    dispatch({
      type: GAME.FIND,
      foundGame: false,
    })
  }
}

const vote = (gameCode, username) => {
  socket.emit(GAME.FIND, username)
}

const disconnect = (gameCode, username) => {

}

const startGame = (idQuest) => {
  return dispatch => {
    QuestService.startGame(idQuest)
      .then(res => res.json())
      .catch(err => console.log(err))
      .then(res => {
        socket.emit(GAME.START, res.code, idQuest)
        return dispatch({
          type: GAME.START,
          payload: {
            code: res.code,
            result: true,
            running: false,
            idGame: res.idGame
          }
        })
      })
  }
}

const nextQuestion = (idGame, idQuestion) => {
  socket.emit(GAME.NEXT_QUESTION, idGame, idQuestion)
  return dispatch => {
    dispatch({
      type: GAME.NEXT_QUESTION,
      payload: {

      }
    })
  }
}

const answer = (idGame, idQuestion, answer) => {
  socket.emit(GAME.ANSWER, idGame, idQuestion, answer)
}
// export const endGame = (idGame) => {
//   return dispatch => {
//       socket.emit(GAME.END, idGame)
//     }
// }

const resetCorrect = () => {
  return {
    type: STATUS.CORRECT_ANSWER,
    payload: {
      correct: 0,
      result: false,
      running: false
    }
  }
}
const resetResult = () => {
  return {
    type: STATUS.RESET,
    payload: {
      result: false,
      running: false
    }
  }
}

export default configureSocket

export {
  resetCorrect,
  resetResult,
  answer,
  startGame,
  nextQuestion,
  findGame,
  setUserName,
  chat
}
