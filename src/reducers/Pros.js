export default (state={pros: []}, action) => {
    switch (action.type) {
      case "LOAD_PROS":
        return {...state, pros: action.pros}
      case "ADD_PRO":
          const pro = {...action.pro, clubs: []}
          const prosArray = state.pros.concat(pro)
        return ({pros: prosArray})
      case "ADD_PRO_ERRORS":
          return {...state, proError: action.pro}
      case "ADD_CLUB_ERRORS":
           return {...state, clubError: action.club}
      case "ADD_CLUB":
            const newPros = state.pros.map(pro => {
                if(pro.id === Number(action.proId)) {
                    return(
                        {...pro, clubs: pro.clubs.concat(action.club) }
                        )
                    }else {
                        return(
                            pro
                            )
                        }
                    })
                return({pros: newPros})
      default:
        return state
    }
  }