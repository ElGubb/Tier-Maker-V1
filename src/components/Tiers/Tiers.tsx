import { useState } from 'react';
import './Tiers.css'

function Tiers() {

interface Tiers {
    id: number,
    tier: string
}

const [input, setInput] = useState<Tiers | null>(null);
const [tiers, setTiers] = useState<Array<Tiers | null>>([]);
const tierInput : HTMLInputElement | null = document.getElementById('tierInput') as HTMLInputElement;
const [contador, setContador] = useState<number>(tiers.length);

const addTier = () => {
if(input?.tier !== ""){
    tiers.push(input);
    setInput({id:contador, tier:""})
    tierInput.value = ""
    setContador(contador+1);
    return;
    }
    alert("Empty Field")
}
const deleteTier = (id:number) => {
    const differentValues = tiers.filter((value:any) => value.id !== id);
    console.log("filtrado", differentValues)
    setTiers(differentValues);
}

const rows = tiers.map((e)=> {
return(
<div key={e?.id}>
    <h2>ID:{e?.id} TIER:{e?.tier}</h2>
    <button onClick={() => deleteTier(e!.id)}>Borrar Tier</button>
    </div>
    )
}
);

return (
<>
    <div className='tiers_component'>
    <h2>Tiers Component</h2>
    <input id="tierInput" onChange={(e) => setInput({id:contador,tier:e.target.value})} />
    <button onClick={addTier}>Añadir Tier</button>
    <div>{rows}</div>
    </div>
</>
)
}

export default Tiers
