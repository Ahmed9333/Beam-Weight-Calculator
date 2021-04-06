const initialData = {
  inputs: {
    h: {
      name: 'h',
      text: 'h',
      value: 3,
      description: 'Hauteur du rectangle',
      unit: 'm'
    },
    b: {
      name: 'b',
      text: 'b',
      value: 5,
      description: 'Largeur du rectangle',
      unit: 'm'
    },
    L: {
      name: 'L',
      text: 'L',
      value: 4,
      description: 'Longueur de la poutre',
      unit: 'm'
    },
    

    rho: {
      name: 'rho',
      text: 'rho',
      value: 7500,
      description: 'Masse volumique du matériau',
      unit: 'Kg/m3'
    }
  },
    
  outputs: {
    A: {
      name: 'A',
      text: 'A',
      value: 15,
      description: 'Surface Rectangle',
      unit: 'm2'
    },
    V: {
      name: 'V',
      text: 'V',
      value: 60,
      description: 'Volume de la poutre',
      unit: 'm3'
    },
    Ixx: {
      name: 'Ixx',
      text: 'Ixx',
      value: 12,
      description: 'Inertie Rectangle suivant x',
      unit: 'm4'
    },
    M: {
      name: 'M',
      text: 'M',
      value: 450000,
      description: 'Masse de la poutre',
      unit: 'Kg'
    }
  }  
}

export default initialData;
