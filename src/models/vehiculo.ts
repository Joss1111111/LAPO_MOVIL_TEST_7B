export type Vehiculo = {
  marca: string;
  modelo: string;
  placa: string;
  nombreDuenio: string;
  anio: string;
  tipoGasolina: string;
};

export const emptyVehiculo: Vehiculo = {
  marca: '',
  modelo: '',
  placa: '',
  nombreDuenio: '',
  anio: '',
  tipoGasolina: '',
};