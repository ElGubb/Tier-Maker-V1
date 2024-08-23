import { useState } from 'react';
import './Tiers.css'

function Tiers() {

    interface Tier {
        name : string
    } 

const [input, setInput] = useState<Tier>();
const [tiers, setTiers] = useState<Tier>();

const addTier = () => {
if(input.name !== ""){
    console.log("INPUT", input);
    setTiers(input);
    setInput("")
    return;
    }
    alert("Empty Field")
}
const rows = tiers.map((tier, index) => 
<h2 key={index}>{tier}</h2>);

return (
<>
    <div>
    <h2>Tiers Component {tiers}</h2>
    <input onChange={(e) => setInput(e.target.value)} />
    <button onClick={addTier}>Añadir Tier</button>
    <div>{rows}</div>
    </div>
</>
)
}

export default Tiers
