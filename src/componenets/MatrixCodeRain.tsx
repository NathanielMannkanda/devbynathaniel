import { useEffect, useRef } from "react";

const MatrixCodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";

    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const amharic = 
      "ቈርትዩኢኦፖኢኡይትረውቈርትዩኢኦኣስድፍግህጅክልክጅህግፍድሳስድፍግህጅክዝኅችቭብንምኪኡይስግትፋድኅጋውህግጅብኅክግይድክህንህብችግስጀኣችብክሽግይቱአፍብህክፍግድቭጅቀብውክሃችስይግትጅግቭጅቀንጅድችብህጅንችልድህግይትጅቨብፍውክንቭስክምልድቪጆስምል";

    const alphabet = katakana + latin + numbers + amharic;

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    let rainDrops = Array(columns).fill(1);

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#00ff41";
      context.font = `${fontSize}px monospace`;

      rainDrops.forEach((drop, index) => {
        const text =
          alphabet[Math.floor(Math.random() * alphabet.length)];

        context.fillText(text, index * fontSize, drop * fontSize);

        if (
          drop * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          rainDrops[index] = 0;
        }

        rainDrops[index]++;
      });
    };

    const interval = window.setInterval(draw, 33);

    const handleResize = () => {
      resizeCanvas();

      columns = Math.floor(canvas.width / fontSize);
      rainDrops = Array(columns).fill(1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-screen w-screen bg-black -z-10"
    />
  );
};

export default MatrixCodeRain;