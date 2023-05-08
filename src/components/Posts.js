import Post from "./Post";

export default function Posts() {

    const posts = [
        {
            imagemPerfil: <img src="./assets/img/meowed.png" />,
            nomePerfil: 'Jantar Romântico',
            fotoPost: <img data-test="post-image" src="./assets/img/noiva.jpg" />,
            imagemLike: <img src="./assets/img/respondeai.png" />,
            nomeLike: 'respondeai',
            qtdLike: 'outras 101.523 pessoas',
            nomeComentario: 'luanmede ',
            comentario: 'Aaah, gatíneaaa',
        },
        {
            imagemPerfil: <img src="./assets/img/barked1.png" />,
            nomePerfil: 'a Aventura está lá Fora',
            fotoPost: <img data-test="post-image" src="./assets/img/sobrinhos.jpg" />,
            imagemLike: <img src="./assets/img/adorableanimals.png" />,
            nomeLike: 'adorable_animals',
            qtdLike: 'outras 99.159 pessoas',
            nomeComentario: 'luanmede ',
            comentario: 'Awwwnt que lindxxx',
        },
        {
            imagemPerfil: <img src="./assets/img/smallcutecats.png" />,
            nomePerfil: 'BrowniedoMarcão',
            fotoPost: <img data-test="post-image" src="./assets/img/brownie.jpg" />,
            imagemLike: <img src="./assets/img/respondeai.png" />,
            nomeLike: 'respondeai',
            qtdLike: 'outras 575.418 pessoas',
            nomeComentario: 'gingernome_ ',
            comentario: 'Yuizinhaaaa!!!',
        }
    ]

    return (
        <div className="feed">
            {posts.map((post) =>
                <Post key={post.comentario} imagemPerfil={post.imagemPerfil} nomePerfil={post.nomePerfil}
                    fotoPost={post.fotoPost} imagemLike={post.imagemLike}
                    nomeLike={post.nomeLike} qtdLike={post.qtdLike}
                    nomeComentario={post.nomeComentario} comentario={post.comentario} />
            )}
        </div>
    )
}