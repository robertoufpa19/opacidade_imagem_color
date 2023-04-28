
//fundoImg é a imagem de fundo a ser modificada.

//primeiroPlanoImg é a imagem em primeiro plano.

//primeiroPlanoOpacImg é a opacidade da imagem em primeiro plano.


/* posImgPrimeiroPlano is the position of the foreground image in pixels. It can be negative and (0,0)
 means the top-left pixels of the foreground and background are aligned.*/

/*fgPos é a posição da imagem em primeiro plano em pixels. Pode ser negativo e (0,0) 
significa que os pixels superiores esquerdos do primeiro plano e do plano de fundo estão alinhados.*/


//função de composição alfa para imagens raster usando JavaScript.
function composite( fundoImg, primeiroPlanoImg, primeiroPlanoOpacImg, posImgPrimeiroPlano ) {

    /* O valor atribuído a bgIndex é calculado multiplicando a coordenada y de uma posição em uma imagem 
    por quatro vezes a largura da imagem e adicionando a coordenada x dessa posição.*/
    let fundoIndex = posImgPrimeiroPlano.x + posImgPrimeiroPlano.y *2*fundoImg.width;
    let primeiroPlanoIndex = 0;

    /*Esse loop itera sobre cada linha de pixels em uma imagem (primeiroPlanoImg) e define os pixels 
    correspondentes em outra imagem (fundoImg) com a mesma cor que os pixels primeiroPlanoImg. O loop começa em y=0 e continua até 
    que y seja menor que a altura do primeiroPlanoImg. A variável bgIndex é incrementada em 4 vezes a largura de fundoImg em cada
    iteração do loop. Esse código pode ser usado para criar uma imagem composta sobrepondo uma imagem sobre a outra. */
    for( var y=0; y < primeiroPlanoImg.height; ++y, fundoIndex += 2*fundoImg.width) {

        /*loop que itera sobre os pixels de uma imagem e define o valor alfa de cada pixel como 255 (totalmente opaco).
         O loop começa em x = 0 e continua até que x seja menor que a largura da imagem. 
         Para cada iteração do loop, x é incrementado por um e fgIndex(incrementado por quatro)*/
        for( var x = 0; x < primeiroPlanoImg.width; ++x, primeiroPlanoIndex += 4) {

            /*O trecho de código define a cor de um pixel em uma imagem.
            O código faz um loop através de cada canal de cor (vermelho, verde e azul) 
            e define a cor de um pixel em uma imagem com base em seu valor de opacidade.*/
            for( var color = 0; color<3; ++color) {
                fundoImg.data[fundoIndex + 4*x + color] = 
                primeiroPlanoImg.data[primeiroPlanoIndex + color] * primeiroPlanoOpacImg + (1 - primeiroPlanoOpacImg) * fundoImg.data[fundoIndex + 4*x + color]
            }
        }
    }
}

