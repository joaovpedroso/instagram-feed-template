
const constants = {
    apiBaseUrl: 'https://graph.instagram.com/', //URL Base API
    camposMidias: 'id,media_url,thumbnail_url', //Campos retornados das Mídias
    access_token: ''                            //Token de acesso Instagram
}

function buscarMidias() {
    fetch(`${constants.apiBaseUrl}me/media?fields=${constants.camposMidias}&access_token=${constants.access_token}`)
    .then(response => response.json())
    .then(response => {
        exibirMidias(response.data);
    })
}

/**
 * 
 * Recebe um array de Mídias contendo Objetos com os campos declarados em constants.camposMidias e exibe em tela
 * [{ id, media_url... }]
 */
function exibirMidias(arrayMidias) {

    const containerMidias = document.querySelector('.facebook-widget-content');
    let midiasHtml = '';

    if( arrayMidias && Array.isArray(arrayMidias) && containerMidias ) {


        const initialValue = '';
        midiasHtml = arrayMidias.reduce(
            (previousValue, currentValue) => previousValue + htmlMidia(currentValue),
            initialValue
        );
    }

    containerMidias.innerHTML = midiasHtml;
}

/**
 * Recebe o obj com os dados da mídia de acordo com o declarado em constants.camposMidias
 */
function htmlMidia(midia) {
    return `
        <div class="facebook-widget-content-item">
            <img src="${midia.media_url}" alt="Imagem do instagram" />
        </div>
    `;
}

/** 
 * 
 * Obter dados do perfil,
 * Imagem, Nome, @, quantidade de seguidores, publicações
 * 
 * Seletor
 * Imagem do perfil -> .facebook-widget-profile-image
 * Nome             -> .facebook-widget-title-description h3
 * @                -> .facebook-widget-title-description span
 * Publicações      -> .facebook-widget-title-statics-posts h4
 * Seguidores       -> .facebook-widget-title-statics-followers h4
 * Seguindo         ->  .facebook-widget-title-statics-following 
 * 
 */



buscarMidias();