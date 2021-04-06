const calculationFunctions = {
  surfaceRectangle: (inputs) => {
    const h = inputs.h.value;
    const b = inputs.b.value;

    const surface = b * h;

    return surface;
  },

  inertiaXX: (inputs) => {
    const h = inputs.h.value;
    const b = inputs.b.value;

    const Ixx = b * h**3 /12;
    
    return Ixx;
  },

  volume: (inputs) => {
    const h = inputs.h.value;
    const b = inputs.b.value;
    const L = inputs.L.value;

    const V = b * h * L;
    
    return V;
  },

  masse: (inputs) => {
    const rho = inputs.rho.value;
    const b = inputs.b.value;
    const h = inputs.h.value;
    const L = inputs.L.value;

    const M = rho * b * h * L;
    
    return M;
  },
}

export default calculationFunctions;