import TRAIL_DATA from "../../Assets/data/TrailData";
import SWORKS_DATA from "../../Assets/data/SWorksData";
import DOWNHILL_DATA from "../../Assets/data/DownHillData";
import {GET_BIKE,GET_BIKES,ADD_BIKE} from "./bikesActions";
import {addItem} from "./helperFunctions";

const initialState={
    data:[TRAIL_DATA, SWORKS_DATA, DOWNHILL_DATA],
    bike:0,
    bikes:[],
    cart:[],
}

const bikesReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_BIKE:
            return{
                ...state,
                bike: state.data.map((i)=>i.items.filter(l=>l.name.split(" ").join("")===action.payload)).filter(it=>it[0])[0][0]
            }
        case GET_BIKES:
                    return{
                        ...state,
                        bikes: state.data.map(i=>i.items.map(l=>l))
                      
                    }
        case ADD_BIKE:
                    return{
                        ...state,
                        cart:addItem(state.cart,state.bike) ,
                        }
        default:
            return state;
    }
}


export default bikesReducer;