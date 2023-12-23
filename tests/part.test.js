const {Particle, particles, createParticles } = require('../src/part');

describe('createParticles function', () => {

  // Arrange 
  const object = {
    position: { x: 100, y: 200 },
    width: 20,
    height: 30,
  };

  test('creates correct number of particles', () => {
    // Act
    createParticles({ object: object, color: 'red', fades: true });

    // Assert 
    expect(particles).toHaveLength(30);
  });

  test('creates instances of the Particle class only', () => {
  
    createParticles({ object: object, color: 'red', fades: true });
  
    particles.forEach((particle) => {
      expect(particle).toBeInstanceOf(Particle);
    });
  });
  
  test('creates correct position of particles', () => {
  
    createParticles({ object: object, color: 'red', fades: true });
  
    particles.forEach((particle) => {
      expect(particle.position.x).toBe(object.position.x + object.width / 2);
      expect(particle.position.y).toBe(object.position.y + object.height / 2);
    });
  });
  
  test('creates correct velocity of particles', () => {
  
    createParticles({ object: object, color: 'red', fades: true });
  
    particles.forEach((particle) => {
      expect(particle.velocity.x).toBeGreaterThanOrEqual(-1.5);
      expect(particle.velocity.x).toBeLessThanOrEqual(1.5);
      expect(particle.velocity.y).toBeGreaterThanOrEqual(-1.5);
      expect(particle.velocity.y).toBeLessThanOrEqual(1.5);
    });
  });
  
  test('creates correct radius of particles', () => {
  
    createParticles({ object: object, color: 'red', fades: true });
  
    particles.forEach((particle) => {
      expect(particle.radius).toBeGreaterThanOrEqual(0);
      expect(particle.radius).toBeLessThanOrEqual(3);
    });
  });
  
  
  test('creates correct color of particles and assures that the particles will disappear', () => {
  
    createParticles({ object: object, color: 'red', fades: true });
  
    particles.forEach((particle) => {
      expect(particle.color).toBe('red');
      expect(particle.fades).toBe(true);
    });
  });
});









