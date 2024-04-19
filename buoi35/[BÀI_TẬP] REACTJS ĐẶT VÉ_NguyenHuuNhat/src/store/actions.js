import { CHON_GHE, DAT_VE } from "./constants"

const actChonGhe = (seat) => {
    return {
        type: CHON_GHE,
        payload: seat,
    }
}

const actDatVe = (ghe) => {
    return {
        type: DAT_VE,
        payload: ghe,
    }
}

export {actChonGhe, actDatVe}