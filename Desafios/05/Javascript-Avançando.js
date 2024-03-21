const Pagina = document.querySelector("body");
const Div = document.querySelector("div");
const ImgPerfil = document.querySelector("div > img");
const Texto = document.querySelector("div > p");
const Links = document.querySelector("ul");

const OrigTexto = Texto.innerHTML
const OrigLinks = Links.innerHTML

ImgPerfil.addEventListener("click",()=>{

    //Gustavo Augusto
    if (ImgPerfil.alt == "foto-perfil-guanabara"){
        //mudar Foto
        ImgPerfil.src = ("imagens/Meu/GusAug.jpg");
        //mudando o idetificador
        ImgPerfil.alt = ("foto-perfil-gustavo-Augusto");
        // Texto
        Texto.innerHTML = ("Meu nome é <strong>Gustavo Augusto</strong>, sou estudante de Tecnologia desde 2023 e hoje produzo conteúdo para Tiktok enquanto aprimoro minhas habilidades em Programação e desenvolvimento de sites/aplicativos. Atualmente estou estudando JavaScript e Inglês.")
        //Links
        Links.innerHTML = (`
        <li>
            <img src="imagens/icone-youtube.png" alt="Youtube"><a target="_blank" href="https://www.youtube.com/channel/UCkAv9VQwbc5AYGdzwCYqC0A">/AngaratoVardamir</a> - Se inscreve lá no meu canal no YouTube
        </li>
        <li>
            <img src="imagens/icone-github.png" alt="GitHub"><a target="_blank" href="https://github.com/AngaratoVardamir">/Gustavo Augusto</a> - Acessa meu Repositório público no GitHub
        </li>
        <li>
            <img src="imagens/icone-linkedin.png" alt="Linkedin"><a target="_blank" href="https://www.linkedin.com/in/gustavo-augusto-2b384024b/">/Gustavo Augusto</a> - Me adiciona lá no Linkedin
        </li>
        <li>
            <img src="imagens/icone-facebook.png" alt="Facebook"><a target="_blank" href="https://www.facebook.com/profile.php?id=100087432616028">/Gustavy Augusty</a> - Me acompanha lá no Facebook
        </li>`);
        //Cores
        Pagina.style.backgroundColor = ("#292929");
        Pagina.style.color = ("#b400a5");
        Div.style.borderColor = ("#008ab4");
        ImgPerfil.style.borderColor = ("#af01ff");
    }


    //Gustavo Guanabara
    else{
        //mudar Foto
        ImgPerfil.src = ("imagens/foto-perfil-guanabara.png");
        //mudando o idetificador
        ImgPerfil.alt = ("foto-perfil-guanabara");
        Texto.innerHTML = OrigTexto
        Links.innerHTML = OrigLinks
        //Cores
        Pagina.style.backgroundColor = ("#232323");
        Pagina.style.color = ("#af01ff");
        Div.style.borderColor = ("#cdcdcd");
        ImgPerfil.style.borderColor = ("#fbff01");
    }
})