'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const rembashcodingalv = () => {
    alert('💞 Ya somos novios!! 💞');
    alert('😱Nos casamos mañana<3😱');
    location.href = 'https://youtu.be/Jrg9KxGNeJY?t=122';
  };

  const nomedirasquenopendeja = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Escribe tu nombre 🥰');
  heroTitle.innerHTML += partner + ' ❤ ';

  heroButtonSi.addEventListener('click', rembashcodingalv);
  heroButtonNo.addEventListener('mouseover', nomedirasquenopendeja);
};

document.addEventListener('DOMContentLoaded', documentReady);