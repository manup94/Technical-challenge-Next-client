import Phones from "@/components/phones"
import { env } from "@/next.config"

async function fetchPhones() {

    const res = await fetch(`${env.REACT_API_URL}/phones/getAllPhones`)
    const data = await res.json()
    return data

}


async function Catalogo() {

    const phones = await fetchPhones()


    return (
        <div className="container mx-auto px-4">
            <h2>Catalogo</h2>
            <Phones phones={phones}></Phones>
        </div>
    )
}

export default Catalogo