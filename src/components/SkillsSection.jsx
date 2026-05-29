import React, { useEffect, useRef } from 'react';

const SkillsSection = ({ sectionRef, isVisible, currentTheme, handleMouseEnterInteractive, handleMouseLeaveInteractive }) => {
  const canvasRef = useRef(null);

  // Added your actual tech stack alongside standard web dev tools
  const skills = [
    'React', 'Node.js', 'Express', 'MongoDB', 
    'C++', 'Python', 'AI Agents', 'RAG', 
    'Vector DBs', 'Tailwind', 'Git'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = 600; // Fixed height for the universe viewport
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Physics constants
    const STARS = [];
    const NUM_STARS = skills.length;
    const BASE_RADIUS = 45;

    // Helper: Random number generator
    const random = (min, max) => Math.random() * (max - min) + min;

    // Star Class
    class Star {
      constructor(x, y, radius, text) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.text = text;
        this.mass = radius; 
        
        // Random velocity
        this.dx = random(-1.5, 1.5);
        this.dy = random(-1.5, 1.5);
        
        // Visuals
        const colors = [
          { glow: '#60a5fa', core: '#1e3a8a' }, // Blue
          { glow: '#34d399', core: '#064e3b' }, // Emerald
          { glow: '#c084fc', core: '#4c1d95' }, // Purple
          { glow: '#f472b6', core: '#831843' }  // Pink
        ];
        this.theme = colors[Math.floor(Math.random() * colors.length)];
      }

      draw(ctx) {
        // Draw Glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + 10, 0, Math.PI * 2);
        ctx.fillStyle = this.theme.glow;
        ctx.globalAlpha = 0.2;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Draw Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.theme.glow);
        gradient.addColorStop(1, this.theme.core);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.theme.glow;
        ctx.stroke();

        // Draw Text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Space Mono", monospace, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Word wrap simple implementation
        const words = this.text.split(' ');
        if (words.length > 1) {
          ctx.fillText(words[0], this.x, this.y - 8);
          ctx.fillText(words.slice(1).join(' '), this.x, this.y + 10);
        } else {
          ctx.fillText(this.text, this.x, this.y);
        }
      }

      update() {
        // Wall collisions (Bounce off edges)
        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
          this.dx = -this.dx;
          // Keep inside bounds to prevent sticking
          this.x = this.x + this.radius >= canvas.width ? canvas.width - this.radius : this.radius;
        }
        if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
          this.dy = -this.dy;
          this.y = this.y + this.radius >= canvas.height ? canvas.height - this.radius : this.radius;
        }

        // Move
        this.x += this.dx;
        this.y += this.dy;
      }
    }

    // Resolve Collisions between two stars (1D Elastic Collision mapped to 2D)
    const resolveCollision = (star1, star2) => {
      const dx = star2.x - star1.x;
      const dy = star2.y - star1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = star1.radius + star2.radius;

      if (distance < minDistance) {
        // Prevent sticking by moving them apart
        const overlap = minDistance - distance;
        const nx = dx / distance;
        const ny = dy / distance;
        
        star1.x -= nx * (overlap / 2);
        star1.y -= ny * (overlap / 2);
        star2.x += nx * (overlap / 2);
        star2.y += ny * (overlap / 2);

        // Calculate relative velocity
        const vxDiff = star1.dx - star2.dx;
        const vyDiff = star1.dy - star2.dy;

        // Velocity along the normal
        const velocityAlongNormal = vxDiff * nx + vyDiff * ny;

        // Do not resolve if velocities are separating
        if (velocityAlongNormal < 0) return;

        // Restitution (bounciness): 1 = perfectly elastic
        const restitution = 0.9;

        // Calculate impulse scalar
        const j = -(1 + restitution) * velocityAlongNormal;
        const impulse = j / (1 / star1.mass + 1 / star2.mass);

        // Apply impulse
        star1.dx += (impulse / star1.mass) * nx;
        star1.dy += (impulse / star1.mass) * ny;
        star2.dx -= (impulse / star2.mass) * nx;
        star2.dy -= (impulse / star2.mass) * ny;
      }
    };

    // Initialize Stars
    const init = () => {
      STARS.length = 0;
      for (let i = 0; i < NUM_STARS; i++) {
        const radius = BASE_RADIUS + random(-5, 10);
        let x = random(radius, canvas.width - radius);
        let y = random(radius, canvas.height - radius);
        
        // Prevent spawning on top of each other
        if (i !== 0) {
          for (let j = 0; j < STARS.length; j++) {
            const dx = x - STARS[j].x;
            const dy = y - STARS[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < radius + STARS[j].radius) {
              x = random(radius, canvas.width - radius);
              y = random(radius, canvas.height - radius);
              j = -1; // Reset loop to check new position against all previous stars
            }
          }
        }
        STARS.push(new Star(x, y, radius, skills[i]));
      }
    };

    init();

    // Animation Loop
    const animate = () => {
      // Clear canvas with a very slight fade for trailing effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.3)'; // Dark slate background to match theme
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw background tiny stars for universe effect
      ctx.fillStyle = '#ffffff';
      for(let i=0; i<5; i++) {
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
      }

      // Update and Draw Skill Stars
      for (let i = 0; i < STARS.length; i++) {
        STARS[i].update();
        STARS[i].draw(ctx);

        // Check collision against all other stars
        for (let j = i + 1; j < STARS.length; j++) {
          resolveCollision(STARS[i], STARS[j]);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`relative overflow-hidden py-20 border-y ${currentTheme?.navBorder || 'border-slate-800'}`}
      style={{ backgroundColor: '#0f172a' }} // Deep universe slate
      onMouseEnter={() => handleMouseEnterInteractive?.(currentTheme?.cursorSkill)}
      onMouseLeave={handleMouseLeaveInteractive}
    >
      <div className="container mx-auto relative z-10 px-6">
        <h2 className="mb-8 text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-xl">
          Constellation of Skills
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
          A dynamic ecosystem of the technologies I utilize to architect and construct digital solutions.
        </p>
      </div>

      {/* Physics Canvas Engine */}
      <div className="w-full max-w-6xl mx-auto relative cursor-crosshair">
        <canvas 
          ref={canvasRef} 
          className="w-full rounded-2xl shadow-[0_0_50px_rgba(30,58,138,0.2)] border border-slate-800/50"
        />
      </div>
    </section>
  );
};

export default SkillsSection;