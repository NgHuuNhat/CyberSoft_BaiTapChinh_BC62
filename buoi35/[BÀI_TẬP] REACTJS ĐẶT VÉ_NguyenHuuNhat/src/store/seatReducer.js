import { CHON_GHE, DAT_VE } from "./constants";
import data from "./data.json";

const intitialState = {
  listSeats: data,
  gheDaChon: [],
  gheDaDat: []
};

const seatReducer = (state = intitialState, action) => {
  switch (action.type) {
    case CHON_GHE: {
      const gheDaChonClone = [...state.gheDaChon];
      const gheChon = action.payload;
      const index = gheDaChonClone.findIndex((ghe) => {
        return ghe.soGhe === gheChon.soGhe;
      });
      if (index !== -1) {
        gheDaChonClone.splice(index, 1);
      } else {
        gheDaChonClone.push(gheChon);
      }
      state.gheDaChon = gheDaChonClone;
      return { ...state };
    }

    case DAT_VE: {
      const listSeatsClone = [...state.listSeats];
      const gheChon = action.payload
      const hangGhe = listSeatsClone.map((row) => row.danhSachGhe);
      hangGhe.forEach((listGhe)=>{
        listGhe.forEach((ghe)=>{
          const index = gheChon.findIndex((gheDC) => gheDC.soGhe === ghe.soGhe)
          if(index !== -1){
            ghe.daDat = true;
          }
        })
      })
      state.gheDaChon = [];
      state.gheDaDat = gheChon;
      state.listSeats = listSeatsClone
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default seatReducer;
