import { useRouter } from "next/router"

export default function PostPage() {
    const router = useRouter();
    return (
        <h1>Oferta {router.query.id} </h1>
    )
}