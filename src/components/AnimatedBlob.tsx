const AnimatedBlob = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            <style>{`
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
          mix-blend-mode: screen;
        }
        
        .blob-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
          top: 20%;
          left: 10%;
          animation: blob-float 25s ease-in-out infinite;
        }
        
        .blob-2 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
          top: 60%;
          right: 10%;
          animation: blob-float 20s ease-in-out infinite reverse;
        }
        
        .blob-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          bottom: 10%;
          left: 50%;
          animation: blob-float 30s ease-in-out infinite;
          animation-delay: -5s;
        }
        
        @keyframes blob-float {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(50px, -30px) scale(1.1) rotate(90deg);
          }
          50% {
            transform: translate(-30px, 50px) scale(0.9) rotate(180deg);
          }
          75% {
            transform: translate(40px, 20px) scale(1.05) rotate(270deg);
          }
        }
        
        @media (max-width: 768px) {
          .blob-1, .blob-2, .blob-3 {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
        </div>
    );
};

export default AnimatedBlob;
