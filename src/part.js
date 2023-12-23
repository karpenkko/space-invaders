class Particle {
    constructor({ position, velocity, radius, color, fades}) {
        this.position = position
        this.velocity = velocity

        this.radius = radius
        this.color = color
        this.opacity = 1
        this.fades = fades
    }
}

const particles = []

function createParticles({object, color, fades}) {
    for (let i = 0; i < 15; i++) {
        particles.push(new Particle({
            position: {
                x: object.position.x + object.width / 2,
                y: object.position.y + object.height / 2
            },
            velocity: {
                x: (Math.random() - 0.5) * 3,
                y: (Math.random() - 0.5) * 3
            },
            radius: Math.random() * 3,
            color: color || '#BAA0DE',
            fades: fades
        }))    
    }
}

module.exports = { Particle, particles, createParticles };


test(' ', () => {
    const object = {
      position: { x: 100, y: 200 },
      width: 20,
      height: 30,
    };

    createParticles({ object: object, color: 'red', fades: true });

    expect(particles).toHaveLength(15);

    particles.forEach((particle) => {
      expect(particle).toBeInstanceOf(Particle);
      expect(particle.position.x).toBe(object.position.x + object.width / 2);
      expect(particle.position.y).toBe(object.position.y + object.height / 2);
      expect(particle.velocity.x).toBeGreaterThanOrEqual(-1.5);
      expect(particle.velocity.x).toBeLessThanOrEqual(1.5);
      expect(particle.velocity.y).toBeGreaterThanOrEqual(-1.5);
      expect(particle.velocity.y).toBeLessThanOrEqual(1.5);
      expect(particle.radius).toBeGreaterThanOrEqual(0);
      expect(particle.radius).toBeLessThanOrEqual(3);
      expect(particle.color).toBe('red');
      expect(particle.fades).toBe(true);
    });
    
  });


      // "collectCoverage": true,
    // "coverageReporters": ["lcov", "text", "html"],
    // "coverageDirectory": "coverage"