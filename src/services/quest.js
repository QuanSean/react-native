import { FETCH_TYPES } from './types'
import { FETCH, MAKE_FROM_BODY } from './fetch';

export const QuestService = {
  getAllQuests: () => {
    return FETCH(FETCH_TYPES.GET, "game/", null);
  },
  getQuestInfo: (idQuest) => {
    return FETCH(FETCH_TYPES.GET, "game/" + idQuest, null);
  },
  getQuest: (idQuest) => {
    return FETCH(FETCH_TYPES.GET, "game/" + idQuest, null);
  },
  createQuest: (newQuest) => {
    let formBody = MAKE_FROM_BODY({
      newQuest: JSON.stringify(newQuest)
    });
    return FETCH(FETCH_TYPES.POST, "game/", formBody);
  },
  addQuestion: (newQuestion) => {
    let formBody = MAKE_FROM_BODY({
      newQuestion: JSON.stringify(newQuestion)
    });
    return FETCH(FETCH_TYPES.POST, "game/gameion", formBody);
  },
  startGame: (idQuest) => {
    let formBody = MAKE_FROM_BODY({
      idQuest: idQuest
    });
    return FETCH(FETCH_TYPES.POST, "game/start", formBody);
  },
  deleteQuest: (idQuest) => {
    let formBody = MAKE_FROM_BODY({
      idQuest: idQuest
    });
    return FETCH(FETCH_TYPES.POST, "game/delete", formBody);
  },
}
