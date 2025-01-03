document.addEventListener("DOMContentLoaded", function () { 
    new SweetScroll({}); 
  
    particlesJS("particles-js", { 
      particles: { 
        number: { 
          value: 30, // 입자 수 유지 
          density: { 
            enable: true, 
            value_area: 400 // 영역 크기 조정 (기존 800에서 400으로 축소)
          } 
        }, 
        color: { value: "#ffffff" }, 
        shape: { 
          type: "polygon", 
          stroke: { width: 0, color: "#000000" }, 
          polygon: { nb_sides: 5 }, 
          image: { src: "img/github.svg", width: 100, height: 100 } 
        }, 
        opacity: { 
          value: 0.5, 
          random: false, 
          anim: { 
            enable: false, 
            speed: 1, 
            opacity_min: 0.1, 
            sync: false 
          } 
        }, 
        size: { 
          value: 3, 
          random: true, 
          anim: { 
            enable: false, 
            speed: 19.18, 
            size_min: 0.1, 
            sync: false 
          } 
        }, 
        line_linked: { 
          enable: true, 
          distance: 100, // 선의 연결 거리 축소 (기존 150에서 100으로)
          color: "#ffffff", 
          opacity: 0.4, 
          width: 1 
        }, 
        move: { 
          enable: true, 
          speed: 2, // 입자 이동 속도 감소 (기존 4에서 2로)
          direction: "none", 
          random: true, 
          straight: false, 
          out_mode: "out", 
          bounce: false, 
          attract: { enable: false, rotateX: 600, rotateY: 1200 } 
        } 
      }, 
      interactivity: { 
        detect_on: "canvas", 
        events: { 
          onhover: { enable: false, mode: "grab" }, 
          onclick: { enable: true, mode: "push" }, 
          resize: true 
        }, 
        modes: { 
          grab: { distance: 200, line_linked: { opacity: 1 } }, // grab 거리 감소
          bubble: { distance: 200, size: 20, duration: 2, opacity: 8, speed: 3 }, 
          repulse: { distance: 100, duration: 0.4 }, // repulse 거리 축소
          push: { particles_nb: 4 }, 
          remove: { particles_nb: 2 } 
        } 
      }, 
      retina_detect: true 
    }) 
  }, false);
  