export const loadPros = pros => ({ type: "LOAD_PROS", pros })

export const addPro = pro => ({ type: "ADD_PRO", pro })

export const addClub = (club, proId) => ({ type: "ADD_CLUB", club, proId })

export const proError = pro => ({ type: "ADD_PRO_ERRORS", pro })

export const clubError = club => ({ type: "ADD_CLUB_ERRORS", club })


export const fetchPros = () => {
    return dispatch => {
      return fetch("https://rails-api-caddy-app-backend.herokuapp.com/pros")
        .then(resp => resp.json())
        .then(prosJSON => {
          if (prosJSON.error) {
            alert(prosJSON.error)
          } else {
            dispatch(loadPros(prosJSON))
          }
        })
    }
  }

  export const createPro = (pro) => {
    return dispatch => {
      const body = {
        pro
      }
      return fetch("https://rails-api-caddy-app-backend.herokuapp.com/pros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(newPro => {
          if (newPro.id === undefined){
            dispatch(proError(newPro))
          } else {
            dispatch(addPro(newPro))
          }
          return newPro
        })
    }
}

export const createClub = (club) => {
  return dispatch => {
    const body = {
      club
    }
    return fetch("https://rails-api-caddy-app-backend.herokuapp.com/clubs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(newClub => {
        if (newClub.id === undefined){
          dispatch(clubError(newClub))
        } else {
          dispatch(addClub(newClub, club.pro_id))
        }
        return newClub
      })
  }
}
