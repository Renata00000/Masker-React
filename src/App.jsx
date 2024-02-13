import { defineConfig } from "vite";
import  Mask  from "./mask/index";


export default function App(){

return (
  <>
    <input
      type="text"
      placeholder="00/00/0000"
      value={date}
      onChange={(e) => handleChange(mask(e.target.value, "##/##/####"))}
    />

    <input
      type="text"
      placeholder="f20"
      value={date}
      onChange={(e) => handleChange(mask(e.target.value, "?##"))}
    />
    
  </>
)
}







