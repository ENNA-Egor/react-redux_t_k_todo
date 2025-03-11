import {  useDispatch } from 'react-redux';
import {ResetToDefault} from '../rootSelectors';


export const ResetApp = ()=>{
   const dispatch = useDispatch();

   return (
      <button onClick={()=> dispatch(ResetToDefault())} className = "btn-reset"> ResetApp</button>
   )
}