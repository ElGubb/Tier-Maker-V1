import { useState } from 'react';
import './Tiers.css'

function Tiers() {

const [input, setInput] = useState<string | null>(null);
const [tiers, setTiers] = useState<Array<string | null>>([]);
const tierInput : HTMLInputElement | null = document.getElementById('tierInput') as HTMLInputElement;

const addTier = () => {
if(input !== ""){
    console.log("INPUT", input);
    tiers.push(input);
    setInput("")
    tierInput.value = ""
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
    <input id="tierInput" onChange={(e) => setInput(e.target.value)} />
    <button onClick={addTier}>Añadir Tier</button>
    <div>{rows}</div>
    </div>
</>
)
}

export default Tiers
