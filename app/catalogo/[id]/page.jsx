import { env } from "@/next.config"
import Link from "next/link"


async function fetchPhone(id) {

    const res = await fetch(`${env.REACT_API_URL}/phones/getPhone/${id}`)
    const data = await res.json()

    return data


}


async function phonePage({ params }) {

    const phone = await fetchPhone(params.id)
    console.log(phone);

    return (
        <>
            <div class=" bg-white shadow-md rounded-lg p-4">
                <img class="w-40" src={`/${phone.imageFileName}`} alt="Producto" />
                <h3 class="text-xl font-semibold mt-2">{phone.name}</h3>
                <h2 class="text-xl font-semibold mt-2">{phone.manufacturer}</h2>

                <p class="text-gray-600">{phone.description}</p>
                <div class=" justify-between items-center mt-4">
                    <span class="text-lg font-semibold">Caracteristicas</span>
                    <p>color: {phone.color}</p>
                    <p>pantalla: {phone.screen}</p>
                    <p>Procesador: {phone.processor}</p>
                    <p>Ram: {phone.ram}</p>

                </div>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-lg font-semibold">{phone.price} €</span>
                </div>


            </div>
            <button class="bg-gray-200 text-black hover:text-black hover:bg-gray-300 py-2 px-4 rounded-lg">
                <Link href={'/catalogo'}>Volver</Link>
            </button>
        </>
    )
}

export default phonePage