const Butterfly = ({ delay = 0, duration = 15, startX = -10, endX = 110 }) => {
    return (
        <div
            className="butterfly"
            style={{
                position: 'fixed',
                left: `${startX}%`,
                animation: `fly ${duration}s linear ${delay}s infinite`,
                zIndex: 1,
                pointerEvents: 'none'
            }}
        >
            <div className="butterfly-wings">
                <div className="wing left-wing"></div>
                <div className="wing right-wing"></div>
            </div>

            <style>{`
        @keyframes fly {
          0% {
            left: ${startX}%;
            top: ${Math.random() * 20 + 10}%;
          }
          25% {
            top: ${Math.random() * 20 + 30}%;
          }
          50% {
            top: ${Math.random() * 20 + 50}%;
          }
          75% {
            top: ${Math.random() * 20 + 30}%;
          }
          100% {
            left: ${endX}%;
            top: ${Math.random() * 20 + 10}%;
          }
        }
        
        @keyframes flutter {
          0%, 100% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
        }
        
        .butterfly-wings {
          position: relative;
          width: 40px;
          height: 30px;
          animation: flutter 0.5s ease-in-out infinite;
        }
        
        .wing {
          position: absolute;
          width: 20px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
        }
        
        .left-wing {
          left: 0;
          background: linear-gradient(135deg, #FF1B6B 0%, #8B5CF6 100%);
          transform-origin: right center;
          box-shadow: 0 2px 8px rgba(255, 27, 107, 0.3);
        }
        
        .right-wing {
          right: 0;
          background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);
          transform: scaleX(-1);
          transform-origin: left center;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        }
      `}</style>
        </div>
    );
};

const AnimatedButterflies = () => {
    const butterflies = [
        { delay: 0, duration: 20, startX: -10, endX: 110 },
        { delay: 3, duration: 18, startX: -10, endX: 110 },
        { delay: 6, duration: 22, startX: -10, endX: 110 },
        { delay: 9, duration: 19, startX: -10, endX: 110 },
        { delay: 12, duration: 21, startX: -10, endX: 110 },
    ];

    return (
        <>
            {butterflies.map((props, index) => (
                <Butterfly key={index} {...props} />
            ))}
        </>
    );
};

export default AnimatedButterflies;
