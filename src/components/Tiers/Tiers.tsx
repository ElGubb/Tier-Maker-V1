import { useState } from 'react';
import './Tiers.css'

function Tiers() {

interface Tiers {
    id: number,
    tier: string,
    editable: boolean,
}

const [input, setInput] = useState<Tiers | null>(null);
const [tiers, setTiers] = useState<Array<Tiers | null>>([]);
const tierInput : HTMLInputElement | null = document.getElementById('tierInput') as HTMLInputElement;
const [contador, setContador] = useState<number>(tiers.length);

const addTier = () => {
if(input?.tier !== ""){
    const found = tiers.find((el) => el?.tier.toLowerCase() === input?.tier.toLowerCase());
    if (found) {
        alert("Tier ya existente")
        return;
    }
    tiers.push(input);
    setInput({id:contador, tier:"", editable:false})
    tierInput.value = ""
    setContador(contador+1);
    return;
    }
    alert("Empty Field")
}
const deleteTier = (id:number) => {
    const differentValues = tiers.filter((value:Tiers | null) => value!.id !== id);
    console.log("filtrado", differentValues)
    setTiers(differentValues);
}
const editTier = (tier:Tiers | null) => {
    tiers[tiers.indexOf(tier)] = input;
    setTiers(tiers);
}
const toggleEdit = (tier:Tiers) => {
    setInput({id:tier.id,tier:tier.tier,editable:!tier.editable});
    tiers[tiers.indexOf(tier)] = input;
    setTiers(tiers);
}


const rows = tiers.map((e:Tiers | null)=> {
return(
e?.editable?
<div key={e?.id}>
    <input value={e.tier} onChange={(e) => setInput({id:contador,tier:e.target.value,editable:false})} />
    <button onClick={() => editTier(e!)}>Confirmar</button><br></br>
    <button onClick={() => toggleEdit(e!)}>Cancelar</button>
</div>:
<div key={e?.id}>
    <h2>ID:{e?.id} TIER:{e?.tier}</h2>
    <button onClick={() => deleteTier(e!.id)}>Borrar Tier</button><br></br>
    <button onClick={() => toggleEdit(e!)}>Editar Tier</button>
</div>
)
}
);

return (
<>
    <div className='tiers_component'>
    <h2>Tiers Component</h2>
    <input id="tierInput" onChange={(e) => setInput({id:contador,tier:e.target.value,editable:false})} />
    <button onClick={addTier}>Añadir Tier</button>
    <div>{rows}</div>
    </div>
</>
)
}

export default Tiers
