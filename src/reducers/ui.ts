import { handleActions } from 'redux-actions'

export const initState = {
  toast: { kind: 'success', text: ''},
  popup: {
    track: {
      visible: false,
      id: 0
    },
    collect: {
      visible: false,
      id: 0
    },
    playlist: {
      visible: false,
      id: 0
    }
  },
  modal: {
    playlist: {
      visible: false,
      id: 0,
      kind: 'collect'
    }
  }
}

const next = () => {
  let n = 1
  return () => n++
}

const toastId = next()
const trackId = next()
const collectId = next()
const playlistId = next()
const modalId = next()

export default handleActions({
  'ui/toast' (state: any, {
    payload
  }: any) {
    return {
      ...state,
      toast: {
        kind: payload.kind,
        text: payload.text,
        id: toastId()
      }}
  },
  'ui/modal/playlist/show' (state, { payload }) {
    return {
      ...state,
      modal: {
        ...state.modal,
        playlist: {
          visible: true,
          id: modalId(),
          kind: payload
        }
      }
    }
  },
  'ui/modal/playlist/hide' (state) {
    return {
      ...state,
      modal: {
        ...state.modal,
        playlist: {
          visible: false,
          id: modalId()
        }
      }
    }
  },
  'ui/popup/track/show' (state) {
    return {
      ...state,
      popup: {
        ...state.popup,
        track: {
          visible: true,
          id: trackId()
        }
      }
    }
  },
  'ui/popup/playlist/show' (state) {
    return {
      ...state,
      popup: {
        ...state.popup,
        playlist: {
          visible: true,
          id: playlistId()
        }
      }
    }
  },
  'ui/popup/collect/show' (state) {
    return {
      ...state,
      popup: {
        ...state.popup,
        collect: {
          visible: true,
          id: collectId()
        }
      }
    }
  },
  'ui/popup/track/hide' (state) {
    return {
      ...state,
      popup: {
        ...state.popup,
        track: {
          visible: false,
          id: trackId()
        }
      }
    }
  },
  'ui/popup/playlist/hide' (state) {
    return {
      ...state,
      popup: {
        ...state.popup,
        playlist: {
          visible: false,
          id: playlistId()
        }
      }
    }
  },
  'ui/popup/collect/hide' (state) {
    return {
      ...state,
      popup: {
        ...state.popup,
        collect: {
          visible: false,
          id: collectId()
        }
      }
    }
  }
}, initState)
